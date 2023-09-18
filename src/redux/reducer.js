 import { combineReducers } from "redux";
 import  {contactsReducer} from '../redux/contactsSlice';
 import {filterReducer} from '../redux/filterSlice';


 export const rootReducer = combineReducers ({
     contacts: contactsReducer,
    filter: filterReducer,
})

// // const rootReducer = (state = {contacts: [], filter: ''} );