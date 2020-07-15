# Add Store

Store is the place where application State is being managed. It consists of:
- Initial State.
- Reducers.
- Actions.

## Getting Started
- Copy/paste from *Alpha Project* the folder `store`.
- Add to `App.tsx` the line `import { StoreProvider } from 'store';` and wrap the app with `<StoreProvider></StoreProvider>`.

## Enable User

- Initial State:
    - Add in `index.tsx` to `interface IState` the line `user: User;` and to `initialState` the line `user: userInitialState` and also import appropriately.
- User Reducer:
    - In `index.tsx` extend the `rootReducer` with `user: userReducer(state.user, action)`. And import the `userReducer` appropriately.
    - Change the line to `type TAction = UserActions;` and also import appropriately.
- Read and Write to State:
    - In the component `Dummy.tsx` import the self created Store Hook `import { useStore } from 'store';` and an User Action `import { userLoginAction } from 'store/user';`.
    - Call the Hook in the component with `const { state, dispatch } = useStore();`.
    - Read the State by printing `<h1>{ state.user.name }</h1>`.
    - Write to the State by calling `<button onClick={() => dispatch(userLoginAction())}>Click</button>`.
