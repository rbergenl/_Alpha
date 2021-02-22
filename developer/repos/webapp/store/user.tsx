import { Reducer } from 'redux'
import { RootState } from '../../useStore'

// state
export interface UserState {
    isLoading: boolean
    isError: boolean
    cognitoUser: CognitoUser
    id: string
    name: string
    isSignedIn: boolean
}

interface CognitoUser {
    username: string
}

export const userInitialState: UserState = {
    isLoading: false,
    isError: false,
    cognitoUser: { username: '' },
    id: 'john',
    name: 'John',
    isSignedIn: false,
}

// action types
export const USER_LOGIN_SUCCESS = 'User/Login/Success'
export const USER_LOGOUT_SUCCESS = 'User/Logout/Success'
export const RESET_USER_DATA = 'User/ResetData'
export const FETCH_USER_DATA_INIT = 'User/FetchData/Init'
export const FETCH_USER_DATA_SUCCESS = 'User/FetchData/Success'
export const FETCH_USER_DATA_FAILURE = 'User/FetchData/Error'

// action interfaces
export type UserActions =
    | UserLoginSuccess
    | ResetUserDataAction
    | FetchUserDataInitAction
    | FetchUserDataSuccessAction
    | FetchUserDataFailureAction

export interface UserLoginSuccess {
    type: typeof USER_LOGIN_SUCCESS
}
export interface ResetUserDataAction {
    type: typeof RESET_USER_DATA
}
export interface FetchUserDataInitAction {
    type: typeof FETCH_USER_DATA_INIT
}
export interface FetchUserDataSuccessAction {
    type: typeof FETCH_USER_DATA_SUCCESS
    payload: CognitoUser
}
export interface FetchUserDataFailureAction {
    type: typeof FETCH_USER_DATA_FAILURE
}

// action functions
export const userLoginSuccessAction = (): UserLoginSuccess => ({
    type: USER_LOGIN_SUCCESS,
})
export const resetUserDataAction = (): ResetUserDataAction => ({
    type: RESET_USER_DATA,
})
export const fetchUserDataInitAction = (): FetchUserDataInitAction => ({
    type: FETCH_USER_DATA_INIT,
})
export const fetchUserDataSuccessAction = (payload: CognitoUser): FetchUserDataSuccessAction => ({
    type: FETCH_USER_DATA_SUCCESS,
    payload,
})
export const fetchUserDataIFailureAction = (): FetchUserDataFailureAction => ({
    type: FETCH_USER_DATA_FAILURE,
})

// reducer
export const userReducer: Reducer<UserState, UserActions> = (user, action): UserState => {
    console.log(action)
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return Object.assign({}, user, {
                isSignedIn: true,
                isLoading: false,
                isError: false,
            })
        case FETCH_USER_DATA_INIT:
            return Object.assign({}, user, {
                isLoading: true,
                isError: false,
            })
        case FETCH_USER_DATA_SUCCESS:
            return Object.assign({}, user, {
                isLoading: false,
                isError: false,
                id: action.payload.username,
                name: action.payload.username.toLocaleUpperCase(),
            })
        case FETCH_USER_DATA_FAILURE:
            return Object.assign({}, user, {
                isLoading: false,
                isError: true,
            })
        case RESET_USER_DATA:
            return Object.assign({}, user, {
                isSignedIn: true,
            })
        default:
            return user || userInitialState
    }
}

// selector
export const selectUser = (state: RootState): UserState => state.user
