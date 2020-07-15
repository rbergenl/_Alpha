
export enum USERS {
  admin1 = 'admin1',
  user1 = 'user1',
  user2 = 'user2'
};

const admin: User = {
  'cognito:groups': [
    'localhost-admins'
  ],
  'token_use': 'id',
  'cognito:username': USERS.admin1,
  'email': `${USERS.admin1}@admins.com`
};

const user1: User = {
  'cognito:groups': [
    'localhost-users'
  ],
  'token_use': 'id',
  'cognito:username': USERS.user1,
  'email': `${USERS.user1}@users.com`
};

const user2: User = {
  'cognito:groups': [
    'localhost-users'
  ],
  'token_use': 'id',
  'cognito:username': USERS.user2,
  'email': `${USERS.user2}@users.com`
};

export const users = [admin, user1, user2];

interface User {
    'cognito:groups': string[];
    'token_use': string;
    'cognito:username': string;
    'email': string;
}