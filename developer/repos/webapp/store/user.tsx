import { Reducer } from "redux";

interface CognitoUser {
    username: string;
}

// user model
export interface UserState {
    isLoading: boolean;
    isError: boolean;
    user: CognitoUser;
    id: string;
    name: string;
    isSignedIn: boolean;
}

export const userInitialState: UserState = {
    isLoading: false,
    isError: false,
    user: { username: '' },
    id: 'john',
    name: 'John',
    isSignedIn: false
}

// action types
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const RESET_USER_DATA = 'RESET_USER_DATA';
export const FETCH_USER_DATA_INIT = 'FETCH_USER_DATA_INIT';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';

// action interfaces
export type UserActions = IUserLoginSuccess | IResetUserDataAction | IFetchUserDataInitAction | IFetchUserDataSuccessAction | IFetcgUserDataFailureAction;

export interface IUserLoginSuccess { type: typeof USER_LOGIN_SUCCESS; }
export interface IResetUserDataAction { type: typeof RESET_USER_DATA; }
export interface IFetchUserDataInitAction { type: typeof FETCH_USER_DATA_INIT; }
export interface IFetchUserDataSuccessAction { type: typeof FETCH_USER_DATA_SUCCESS; payload: CognitoUser }
export interface IFetcgUserDataFailureAction { type: typeof FETCH_USER_DATA_FAILURE; }

// action functions
export const userLoginSuccessAction = (): IUserLoginSuccess => ({ type: USER_LOGIN_SUCCESS });
export const resetUserDataAction = (): IResetUserDataAction => ({ type: RESET_USER_DATA });
export const fetchUserDataInitAction = (): IFetchUserDataInitAction => ({ type: FETCH_USER_DATA_INIT });
export const fetchUserDataSuccessAction = (payload: CognitoUser): IFetchUserDataSuccessAction => ({ type: FETCH_USER_DATA_SUCCESS, payload });
export const fetchUserDataIFailureAction = (): IFetcgUserDataFailureAction => ({ type: FETCH_USER_DATA_FAILURE });

// user reducer
export const userReducer: Reducer<UserState, UserActions> = (user, action): UserState => {
    if (!user) return userInitialState;
    console.log(action)
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return Object.assign<{}, UserState, Partial<UserState>>({}, user, { 
                isSignedIn: true,
                isLoading: false,
                isError: false,
            });
        case FETCH_USER_DATA_INIT:
            return Object.assign<{}, UserState, Partial<UserState>>({}, user, { 
                isLoading: true,
                isError: false,
            });
        case FETCH_USER_DATA_SUCCESS:
            return Object.assign<{}, UserState, Partial<UserState>>({}, user, { 
                isLoading: false,
                isError: false,
                id: action.payload.username,
                name: action.payload.username.toLocaleUpperCase()
            });
        case FETCH_USER_DATA_FAILURE:
            return Object.assign<{}, UserState, Partial<UserState>>({}, user, { 
                isLoading: false,
                isError: true
            });
        case RESET_USER_DATA:
            return Object.assign<{}, UserState, Partial<UserState>>({}, userInitialState, { 
                isSignedIn: true
            });
        default:
            return user;
    }
};
