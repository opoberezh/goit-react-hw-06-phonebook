import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

// import {rootReducer} from './reducer';
import initialContacts from '../components/contactsList.json'


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
       items: initialContacts,
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

