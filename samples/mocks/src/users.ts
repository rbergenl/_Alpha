
export const users: User[] = [{
  'cognito:groups': [
    'localhost-admin'
  ],
  'token_use': 'id',
  'cognito:username': 'admin',
  'email': 'admin@admin.com'
}, {
  'cognito:groups': [
    'localhost-test'
  ],
  'token_use': 'id',
  'cognito:username': 'test',
  'email': 'test@test.com'
}];

interface User {
    'cognito:groups': string[];
    'token_use': string;
    'cognito:username': string;
    'email': string;
}