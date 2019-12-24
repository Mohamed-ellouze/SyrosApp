import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import SideBarReducer from '../redux/reducers/SideBar'
import thunkMiddlewar from 'redux-thunk';


const middleware = [thunkMiddlewar];
    const composeEnhancers = 
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

            }):compose;
    const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
    );
const myStore = createStore(
    combineReducers({
        SideBarTitles : SideBarReducer
    }),
    enhancer
)
export default myStore;