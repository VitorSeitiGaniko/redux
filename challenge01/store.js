import reducerStudent from './student.js';
import reducerClass from './class.js';

//COMBINE REDUCERS
const reducer = Redux.combineReducers({
    reducerStudent,
    reducerClass
});

//STORE
const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;