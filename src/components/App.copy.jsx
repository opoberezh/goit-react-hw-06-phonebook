import { Component } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import initialContacts from "./contactsList.json";
import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyled";
import { WrapperContainer } from "./App.styled";

export class App extends Component {
  state ={
    contacts: initialContacts,
    initialContacts: initialContacts,
    contactFilter: '',
  };

componentDidMount(){
console.log('componentDidMount');
const savedContacts = localStorage.getItem('contacts');
if(savedContacts !== null){
 this.setState({
  contacts: JSON.parse(savedContacts)
 });
 
}
  
};

componentDidUpdate(prevProps, prevState){
  console.log('this.state:', this.state);
  console.log('prevState:', prevState)
  if (this.state.contacts !== prevState.contacts){
  console.log(`the contacts are updated`);
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
};

resetChanges = () =>{

  this.setState({
    contacts: this.state.initialContacts,
  });
}




  addContact = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      toast.info(`${newContact.name} is already in contacts.`, {
        position: "top-right",
        autoClose: 2000,});
      return;
    }
    const newItem = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newItem],
      initialContacts: [...prevState.initialContacts, newItem],
    }));
  };

  changeContactFilter = newFilter => {
    this.setState({
      contactFilter: newFilter,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, contactFilter } = this.state;
    const visibleContactItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
    return (
      <Layout>
        <WrapperContainer>
        <ContactForm onAdd={this.addContact} />
        <ContactList
          contacts={visibleContactItems}
          contactFilter={contactFilter}
          onChangeFilter={this.changeContactFilter}
          onDeleteContact={this.deleteContact}
          onReset={this.resetChanges}
        />
        <ToastContainer />
        </WrapperContainer>
        <GlobalStyle/>
      </Layout>
    );
  };
};

