import {createStore,combineReducers} from 'redux'
import catagories from './action'
import products from './action2'
import {composeWithDevTools} from 'redux-devtools-extension'

let reducers = combineReducers({ catagories , products})

const store = () =>{
// return createStore(counter)
return createStore(reducers,composeWithDevTools())
}

export default store()