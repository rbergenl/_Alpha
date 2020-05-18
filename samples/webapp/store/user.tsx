import React from 'react';

// user model
export interface User {
    name: string;
    userLoggedIn: boolean;
}

// user login action
export const USER_LOGIN = 'USER_LOGIN';

export interface IUserLogin {
    type: typeof USER_LOGIN;
    payload: string;
}

export const userLogin = (payload: string): IUserLogin => ({
    type: USER_LOGIN,
    payload
});

// user actions
export type UserActions = IUserLogin;

// user reducer
export const userReducer: React.Reducer<User, UserActions> = (user, action) => {
    switch (action.type) {

        case USER_LOGIN:
            return { ...user, name: action.payload, userLoggedIn: true };

        default:
            return user;
    }
};
