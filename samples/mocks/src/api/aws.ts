import { URL } from 'url';

export const mocks = {
    AWSDateTime: () => new Date(),
    AWSDate: () => new Date(),
    AWSURL: () => new URL('http://localhost'),
};
