# Add Store

Store is the place where application State is being managed. It consists of:
- Initial State.
- Reducers.
- Actions.

It is recommended to make yourself familiar with the [Redux best practices](https://redux.js.org/style-guide/style-guide)

## Getting Started

- Copy/paste from *Alpha Project* the folder `store`.
- Run `npm install redux react-redux && npm install --save-dev @types/react-redux`.
- Add this code to `App.tsx`:
```javascript
import { store } from './store'
<StoreProvider store={store}></StoreProvider>
```

## Enable User

- Add in `index.tsx` to `interface IState` the line `user: User;` and to `initialState` the line `user: userInitialState` and also import appropriately.
- In `index.tsx` extend the `rootReducer` with `user: userReducer`. And import the `userReducer` appropriately.

## Using Store

Read and Write to State:
- To read state use the hook `const state = useSelector((state: RootState) => state);`.
- To update state use the hook `const dispatch = useDispatch();`.
- Print the state with `<h1>{ state.user.name }</h1>`.
- Update the State by adding the line `import { userLoginAction } from 'store/user';` and calling `<button onClick={() => dispatch(userLoginAction())}>Click</button>`.

## Enable Persistence

- Use `redux-persist` as promoted by Redux [here](https://redux.js.org/introduction/ecosystem#persistence). >> TODO: or better `redux-offline` since redux-persist are difficult to use in unit tests.
