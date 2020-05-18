# Add State Management

- Copy/paste from *Alpha Project* the folder `store`.
- Add to `App.tsx` the line `import { StoreProvider } from './store';` and wrap the app with `<StoreProvider></StoreProvider>`.

## Enable User

- Initial State:
    - Add in `index.tsx` to `interface IState` the line `user: User;` and to `initialState` the line `user: userInitialState` and also import appropriately.
- User Reducer:
    - In `index.tsx` extend the `rootReducer` with `user: userReducer(state.user, action)`. And import the `userReducer` appropriately.
    - Change the line to `type TAction = UserActions;` and also import appropriately.
- User Actions:
    - To make changing state from components easy add to `index.tsx` the line `export { userLogin } from './user';`.
- Read and Write to State:
    - In a component import the self created Store Hook and an User Action `import { useStore, userLogin } from 'store';`.
    - Call the Hook in the component with `const { state, dispatch } = useStore();`.
    - Read the State by printing `<h1>{ state.user.name }</h1>`.
    - Write to the State by calling `<button onClick={() => dispatch(userLogin('Doe'))}>Click</button>`.
