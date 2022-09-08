import {createStore,combineReducers,applyMiddleware} from 'redux'
import catagories from './action'
import products from './action2'
import cartReducer from './cartAction'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
let reducers = combineReducers({ 
    catagories:catagories , 
    products :products ,
    cartReducer:cartReducer 
})

const store = () =>{
// return createStore(counter)
return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
}

export default store()