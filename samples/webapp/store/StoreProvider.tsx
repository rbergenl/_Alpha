import React from 'react';
import { initialState, IState } from './initialState';

type TAction = any;

interface IContextProps {
    state: IState;
    dispatch: React.Dispatch<TAction>;
}

const rootReducer: React.Reducer<IState, TAction> = (state, action) => ({});

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
