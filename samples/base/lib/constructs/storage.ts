import { Construct } from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';
import * as s3 from '@aws-cdk/aws-s3';

interface Props {
    authRole: iam.IRole;
    unAuthRole: iam.IRole;
}

export class Storage extends Construct {
    public constructor(parent: Construct, name: string, props: Props) {
        super(parent, name);

        const bucket = new s3.Bucket(this, 'Bucket', {
            cors: Storage.corsRules(),
        });

        // AuthRole
        props.authRole.attachInlinePolicy(this.privatePolicy(bucket.bucketArn));
        props.authRole.attachInlinePolicy(this.publicPolicy(bucket.bucketArn));
        props.authRole.attachInlinePolicy(
            this.protectedPolicy(bucket.bucketArn)
        );
        props.authRole.attachInlinePolicy(this.readPolicy(bucket.bucketArn));
        props.authRole.attachInlinePolicy(this.uploadsPolicy(bucket.bucketArn));

        // UnAuthRole
        props.unAuthRole.attachInlinePolicy(
            this.unAuthPublicPolicy(bucket.bucketArn)
        );
        props.unAuthRole.attachInlinePolicy(
            this.unAuthReadPolicy(bucket.bucketArn)
        );
    }

    private static corsRules(): s3.CorsRule[] {
        return [
            {
                allowedOrigins: ['*'],
                allowedMethods: [
                    s3.HttpMethods.GET,
                    s3.HttpMethods.HEAD,
                    s3.HttpMethods.PUT,
                    s3.HttpMethods.POST,
                    s3.HttpMethods.DELETE,
                ],
                allowedHeaders: ['*'],
                maxAge: 3000,
                exposedHeaders: [
                    'x-amz-server-side-encryption',
                    'x-amz-request-id',
                    'x-amz-id-2',
                    'ETag',
                ],
            },
        ];
    }

    private privatePolicy(bucketArn: string): iam.Policy {
        const policy = new iam.Policy(this, 'PrivatePolicy');
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
            resources: [
                `${bucketArn}/private/\${cognito-identity.amazonaws.com:sub}/*`,
            ],
        });

        policy.addStatements(statement);

        return policy;
    }

    private publicPolicy(bucketArn: string): iam.Policy {
        const policy = new iam.Policy(this, 'PublicPolicy');
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
            resources: [
                `${bucketArn}/public/\${cognito-identity.amazonaws.com:sub}/*`,
            ],
        });

        policy.addStatements(statement);

        return policy;
    }

    private protectedPolicy(bucketArn: string): iam.Policy {
        const policy = new iam.Policy(this, 'ProtectedPolicy');
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
            resources: [
                `${bucketArn}/protected/\${cognito-identity.amazonaws.com:sub}/*`,
            ],
        });

        policy.addStatements(statement);

        return policy;
    }

    private readPolicy(bucketArn: string): iam.Policy {
        const policy = new iam.Policy(this, 'ReadPolicy');
        const getObject = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:GetObject'],
            resources: [
                `${bucketArn}/protected/\${cognito-identity.amazonaws.com:sub}/*`,
            ],
        });
        const listBucket = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:ListBucket'],
            resources: [bucketArn],
            conditions: {
                StringLike: {
                    's3:prefix': [
                        'public/',
                        'public/*',
                        'protected/',
                        'protected/*',
                        `private/\${cognito-identity.amazonaws.com:sub}/`,
                        `private/\${cognito-identity.amazonaws.com:sub}/*`,
                    ],
                },
            },
        });

        policy.addStatements(getObject);
        policy.addStatements(listBucket);

        return policy;
    }

    private uploadsPolicy(bucketArn: string): iam.Policy {
        const policy = new iam.Policy(this, 'UploadsPolicy');
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:PutObject'],
            resources: [
                `${bucketArn}/uploads/\${cognito-identity.amazonaws.com:sub}/*`,
            ],
        });

        policy.addStatements(statement);

        return policy;
    }

    private unAuthPublicPolicy(bucketArn: string): iam.Policy {
        const policy = new iam.Policy(this, 'UnAuthPublicPolicy');
        const statement = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:GetObject'],
            resources: [`${bucketArn}/public/*`],
        });

        policy.addStatements(statement);

        return policy;
    }

    private unAuthReadPolicy(bucketArn: string): iam.Policy {
        const policy = new iam.Policy(this, 'UnAuthReadPolicy');
        const getObject = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:GetObject'],
            resources: [`${bucketArn}/protected/*`],
        });
        const listBucket = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['s3:ListBucket'],
            resources: [bucketArn],
            conditions: {
                StringLike: {
                    's3:prefix': [
                        'public/',
                        'public/*',
                        'protected/',
                        'protected/*',
                    ],
                },
            },
        });

        policy.addStatements(getObject);
        policy.addStatements(listBucket);

        return policy;
    }
}
