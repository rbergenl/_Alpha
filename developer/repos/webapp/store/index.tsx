import React from 'react';
import { combineReducers } from 'redux';

type TAction = any;

interface IState {}

const initialState: IState = {};

const rootReducer = combineReducers({});

interface IContextProps {
    state: IState;
    dispatch: React.Dispatch<TAction>;
}

const StoreContext = React.createContext<IContextProps>({
    dispatch: () => {},
    state: initialState
});

export const useStore = () => React.useContext(StoreContext);

export const StoreProvider = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(rootReducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
                {children}
        </StoreContext.Provider>
    );
};
