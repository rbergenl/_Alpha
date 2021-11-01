// Amazon Cognito Federated Identities or Identity Pools on the other hand, is a way to authorize your users to use AWS services.

import express from 'express';

export const oAuthCognitoRouter = express.Router();

// cognito-identity.us-east-1.

oAuthCognitoRouter.post('/cognito-identity', (req, res) => {
    // res.json({"IdentityId":"us-east-1:ace22fd0-4d3f-4924-8307-ce3dea3cd3b4"});
    res.json({
        Credentials: {
            AccessKeyId: "ADDED_FOR_TEST" + process.env.ACCESS_KEY_ID,
            Expiration: 1610645987,
            SecretKey: "ADDED_FOR_TEST" + process.env.SECRET_KEY,
            SessionToken: "ADDED_FOR_TEST" + process.env.SESSION_TOKEN
        },
        IdentityId: "us-east-1:ace22fd0-4d3f-4924-8307-ce3dea3cd3b4"
    });
});

// cognito-idp.us-east-1.
oAuthCognitoRouter.post('/cognito-idp', (req, res) => {

    // for USR_PASSWORD flow
    // if (JSON.parse(req.body).AuthFlow) {
    //     return res.json({"ChallengeName":"PASSWORD_VERIFIER","ChallengeParameters":{"SALT":"394b7d0594028a1516295ae223c6e47a","SECRET_BLOCK":"Ru/zxp91IEqaQXCYej++3bP8R9SClSwR4yPVMQKQOczFGBPjSoZdbZOahgk+2R7swUFFTPflJisctCeCK+GK6/dH1QzRe5xxdzpRfv84Xwn5/+TCpSRx5D8pjDDOYq78UxGVtHieVfr4fpW46LokMPq0w61V9ISYndST9CnDo4Czf9GBWSAfdYNLObuG0q6GKEywckWypSSWqMpR53BJ7v7lt33Ul+SRQQKQIJmirwa28xfPXqhUhbaI7GpkAGPQF0fI0WzPsoHpKK1YCSYuWh1EDkQPSwMeZX8H3y0o1pmu5utpNbrb2RGla7Dol/8vliNwmrcGybyRybfor3HXwa1yuOS2dWbkKJzHSOvcCK00cP5sIoeZpUsGHfC38ubI0deHaz7Ru5xLVPH6hQDJvxyvWaqpoTgxfa7GT4lTz797IbnEOX11zQ2yB2LUStnIzyy95m7nzjohsntgSMuhW+b2aUGLS+o0ST5U17jPEZfhmWkqJEjDsFkwnfAf8eIbR6QCvA8ciPWM674898OzI6GzFqeal6Eoc3ZWtEuffbQyyxX3Tgt08gowCnX+nw+tqpjankyKBoPzsgFy2sWMw8zZMKc0am3vmgh5k0c/ZGih6adDRkMxTySLi0iB/N07jSktRUloBMotesTr0t5i5wsZ4T2+TT74vDPVbIm3IZRl0PBssy6PxNka+g0EqySTDP1fAtcudcWXNIdImeN4kIuoBdUnalWyAl7XFzgIZaDJzl65IozuXwkqZ9cRD4tZkZriaxBjThfuCp600XQqC9HpOCROuWPLMiV9LpbDFUflFtXYIjLHQvPAFNh5yMEvLou0US8yzJ+A1lZOo5GrzRVrn0/5xsg0pEG6kGCh8DS0YDlmPEKv7T5Wn88tXMNs/fc0JvKz3WZ2U1bMEo3tMANMKvnuw3oCLOXnIkjJQgXidfj6lBQbocj+LLYwEI6myFY9c78jxc8bY0XUxavjUyMdXRxaotXfRkL5o/lzfrJVy34lxN6mp+xdMgupNb+kGGRdgIXweVhWR22NP6ckY3SUxlvgCiz3as6oseUDWZTLGb2y142CHF+nb9bgJ9/xE87zXMdWsdhrQ28CaRKBGwPfZRn/a/dUWCMapyoUzGxJtGFs+XEJSYz0RT6vgf03MUnj4gTSrRFtzh9asR5iKoXlJEnMoawRhp2RhzvmS4Zny508uhVzJa/05QHOLIDKIWmskoNayLX0OJFfFFUrWIxvbLYm40mVCHDG0kRDvMtNk0/83KVZ90MNl0lnFzJtfzDkOQv5gNY/X6fFDKGgzDiP2S0nrSWtQtJ57nRqrHuD3HSY/TBYcfvO0rt6XZZUEYuSzHrHFuYcRYwto8dMnrHoi0uiFaA7Ub9o3rb5tf99fXxG1DJJmCnBx403bQW+3JFSie/kZvDS/ncMOp82NeZuiMq7RyNyvPLuQ3IYOXHpUe3PjegxsxZFOn1l66oECwhLQQnINs0yQ3yKgjgHLKf1r3qU6bUDdIfZPMamGdrmE/6gfbglhY+7KtcV5eKgZDoJwkKVrAjiNqV0Hbljug5LiCSTW1MwUbAr1KopN0FMsDQfbhEbrYLKGtaHtzRMhW4E0QYmzBkzWVjOh7fAxdGuNx+6+IVI2IhHSS0hZGLEYU1XzjfzCMkc7PTTlOSQMjSKM9+7949gZ1scUNLbmSZkW1bQOp3Hb0oBBofUZY6pOQQy+Z8iTxiE","SRP_B":"9f5cc76973e29a2b735783f5e1b9a176da11d4132bb2c75117966cf0de1954ee6b7acb6728dd5a5f0da244632f6268b3893786c39b25d0cdd7e4b9016c4aa3e487aeca0c6540880c20bffeb332e6103dd7f97a1c0b5af97d8f7f6983c9a67df43a42770ff0e10d86850d936b076ec461186d76b660f1eeb3ef87c0e428417b664a9aae8487a0148b828076480595e23f222f4369ca68d8c21c5edeb99b71f6f15ab600923ad403655bce788615bed4f1ff4502e7ab39b5eccf8823c8fa66ff707bfc82db1c8886062188aedc5b57a798ae3b5acd74b16d9d7dfeec518ec9724f64e27d3527f13c4f08386a0b53c450a3026dcc555eda6ea1d85402f4dd1ac6a90c1c4cd1883b17f595ef8845403053d8479ee8fc3daa873f92587364c0ade4eb6872371166cffa1724bfaef3f6dbd5d4b1d35539205b0cd67a76cc17bcf22a17d3ff0a1b0ff8ae919419b816ad14f75e1b7657a199891f81bd2f5f348368b64b395439f49eda151f52b7d38bfd7f50c9546ed185d308f33b31902f352da798c8","USERNAME":"2c4465de-af56-4413-9657-cb1e42c0afd2","USER_ID_FOR_SRP":"2c4465de-af56-4413-9657-cb1e42c0afd2"}});
    // }

    res.json({
        "UserAttributes": [
            {
                "Name":"sub",
                "Value":"12f8596d-8ebd-4a3e-9286-63ccae7a3535"
            },
            {
                "Name":"identities",
                "Value":"[{\"userId\":\"110129679477223851360\",\"providerName\":\"Google\",\"providerType\":\"Google\",\"issuer\":null,\"primary\":true,\"dateCreated\":1610638615180}]"
            },
            {
                "Name":"email_verified",
                "Value":"false"
            },
            {
                "Name":"email",
                "Value":"aardonyx1@gmail.com"
            }
        ],
        "Username":"google_110129679477223851360"
    });
});
