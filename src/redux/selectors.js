// import { store } from "./store";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const getContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = store => {
    const { filter, contacts } = store;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.items.filter(contact =>
        contact.name.toLowerCase().trim().includes((normalizedFilter)) || contact.number.trim().includes((normalizedFilter))
    );
  
    if (normalizedFilter && !filteredContacts.length) {
      toast.info(`No contacts matching your request`);
    }
    return filteredContacts;
}


