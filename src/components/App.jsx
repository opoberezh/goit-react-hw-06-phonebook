
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyled";
import { WrapperContainer } from "./App.styled";
// import { useSelector } from 'react-redux';
// import { getContacts } from '../redux/selectors';
import { Filter } from './Filter/Filter';



export const App = () => {
  // const contacts = useSelector(getContacts);
  
  return (
    <Layout>
      <WrapperContainer>
      <ContactForm />
        <Filter/>
        <ContactList/>
      <ToastContainer />
      </WrapperContainer>
      <GlobalStyle/>
    </Layout>
  );
};
