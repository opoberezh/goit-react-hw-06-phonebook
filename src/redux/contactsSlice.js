import { createSlice} from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

// import {rootReducer} from './reducer';
import initialContacts from '../components/contactsList.json'

// const initialState = {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
    
//   };
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        initialContacts,
        deletedContacts: [],
    },
    

    reducers: {
        addContact: {
            reducer:(state, action) => {
                state.items = [...state.items, action.payload];
            },
            prepare: data => {
                return {
                    payload: {
                       ...data,
                        id: nanoid(),
                    },
                };
            },
        },
       deleteContact: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload);
       },
       resetDeletedContacts: (state) =>{ 
        state.deletedContacts = [];
      },
    },
});
 
export const {addContact, deleteContact, resetDeletedContacts} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

