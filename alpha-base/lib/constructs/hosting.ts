/* eslint-disable no-new */
import * as cdk from '@aws-cdk/core';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as s3 from '@aws-cdk/aws-s3';

export interface Props {
    domainName: string;
    siteSubDomain: string;
    certificateArn?: string;
}

/**
 * Static site infrastructure, which deploys site content to an S3 bucket.
 *
 * The site redirects from HTTP to HTTPS, using a CloudFront distribution,
 * Route53 alias record, and ACM certificate.
 */
export class Hosting extends cdk.Construct {
    public constructor(parent: cdk.Construct, name: string, props: Props) {
        super(parent, name);

        // Const zone = route53.HostedZone.fromLookup(this, 'Zone', { domainName: props.domainName });
        const siteDomain = `${props.siteSubDomain}.${props.domainName}`;

        new cdk.CfnOutput(this, 'Site', { value: `https://${siteDomain}` });

        // Content bucket
        const siteBucket = new s3.Bucket(this, 'SiteBucket', {
            bucketName: siteDomain,
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'error.html',
            publicReadAccess: true,

            // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
            // the new bucket, and it will remain in your account until manually deleted. By setting the policy to
            // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
            // NOT recommended for production code
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });

        new cdk.CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });

        // TLS certificate
        // const certificateArn = new acm.DnsValidatedCertificate(this, 'SiteCertificate', {
        //     domainName: siteDomain,
        //     hostedZone: zone
        // }).certificateArn;
        // new cdk.CfnOutput(this, 'Certificate', { value: certificateArn });

        // const certificateArn = acm.Certificate.fromCertificateArn(this, 'Certificate', 'arn:aws:acm:us-east-1:219009929765:certificate/555b504c-f21b-4046-9496-d8ef47349acb').certificateArn;

        // CloudFront distribution that provides HTTPS
        const distribution = new cloudfront.CloudFrontWebDistribution(
            this,
            'SiteDistribution',
            {
                viewerCertificate: props.certificateArn
                    ? {
                          aliases: [siteDomain],
                          props: {
                              acmCertificateArn: props.certificateArn,
                              sslSupportMethod: cloudfront.SSLMethod.SNI,
                          },
                      }
                    : cloudfront.ViewerCertificate.fromCloudFrontDefaultCertificate(),
                originConfigs: [
                    {
                        s3OriginSource: {
                            s3BucketSource: siteBucket,
                        },
                        behaviors: [{ isDefaultBehavior: true }],
                    },
                ],
            }
        );

        new cdk.CfnOutput(this, 'DistributionId', {
            value: distribution.distributionId,
        });
    }
}
