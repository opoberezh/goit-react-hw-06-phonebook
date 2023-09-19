// import { store } from "./store";
import { createSelector } from '@reduxjs/toolkit';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export const getContacts = store => store.contacts.items;

export const getFilter = store => store.filter;

export const getFilteredContacts = createSelector([getContacts, getFilter],(contacts, filter)  => {

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}
);