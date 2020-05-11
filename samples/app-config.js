const config = {
    aws: {
        aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
        aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
        aws_user_pools_web_client_id: process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
        oauth: {
            domain: process.env.REACT_APP_OAUTH_DOMAIN,
            scope: [
                'email',
                'openid',
                'profile'
            ],
            redirectSignIn: process.env.REACT_APP_OAUTH_REDIRECT_SIGN_IN,
            redirectSignOut: process.env.REACT_APP_OAUTH_REDIRECT_SIGN_OUT,
            responseType: 'code'
        },
        federationTarget: 'COGNITO_USER_POOLS',
        aws_appsync_graphqlEndpoint: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
        aws_appsync_region: process.env.REACT_APP_APPSYNC_REGION,
        aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
    }
};

export default config;
