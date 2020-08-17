import React from 'react';
import { combineReducers, createStore, CombinedState } from 'redux';

type TAction = any;

type IState = CombinedState<{}>

const initialState: IState = {};

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    initialState
);
