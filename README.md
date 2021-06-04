## Setup Redux in ReactJS with HOOKS

### PROJECT STRUCTURE

```
src
|_reducers
| |_hobby.js
| |_...
| |_index.js(root reducer)
|
|_actions
| |_hobby.js
| |_...
| 
|_pages
| |_HomePage/index.jsx(connect to redux)
| |_...
| 
|_store.js(reducers, init state, middlewares)
|_index.js(setup Store Provider)
```

### 1. Install package react-redux, redux
#### `npm install --save redux react-redux`

### 2. Setup Action creators
```js 
// actions/hobby.js

export const addNewHobby = (payload) => {
  return {
    type: "ADD_NEW_HOBBY",
    payload: payload,
  };
};
```

### 3. Setup reducers and root reducer
- Set up reducer
```js
// reducers/hobby.js(simple reducer)

const initialState = {
  list: [],
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);
      return { ...state, list: newList };
    }
    default:
      return state;
  }
};

export default hobbyReducer;
```
- Set up root reducer

```js
// reducers/index.js(root reducer)

const rootReducer = combineReducers({
 hobby: hobbyReducer,
})
export default rootReducer;
```

### 4. Setup redux store
```
// src/store.js

const store = createStore(rootReducer);
export default store;
```

### 5. Setup Store Provider
- This step allow components on every pages of application access the store
```
// src/index.js

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
```

### 6. Connect REDUX STORE from ReactJS component

- Class component: using HOC connect()
- Functional component: using hooks useSelector() and useDispatch() (redux >= v7.1)

```js
function HomePage(props) {
  // use useSelector() to access the store
  const hobbyList = useSelector((state) => state.hobby.list);
  
  // define dispatch using useDispatch() to handle action 
  const dispatch = useDispatch();

  const handleRandomHobby = () => {
    const newHobby = randomHobby();
    dispatch(addNewHobby(newHobby));
  };

```


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

## Connect me via
[FaceBook](https://facebook.com/nth777)
