import { combineReducers } from "redux";
import Sign_in_reducer from "./Sign_in_reducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist' ;
import {Jwt_reducer} from './Jwt_reducer';


const All_My_Reducres = combineReducers({
    Sign_in_reducer,
    Jwt_reducer,
    
})


const persistConfig = {
    key: 'counter',
    storage,
};


const PersistReducer = persistReducer(persistConfig, All_My_Reducres);
export default PersistReducer ;
