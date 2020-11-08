import {createStore,applyMiddleware} from 'redux';


let store;
export function configureStore(){
         store=createStore(reducer,applyMiddleware(thunk));
         return store;
}