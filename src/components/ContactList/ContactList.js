import { Filter } from '../Filter/Filter';
import {ListStyled,  ItemStyled,   DeleteButton, ResetBtn, Wrapper} from './ContactList.styled';
import {ImUserMinus, ImLoop2} from "react-icons/im";

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact,resetDeletedContacts} from 'redux/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';


const icon = {
    minusUser: <ImUserMinus/>,
    reset: <ImLoop2/>
};


export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  console.log(filteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

const resetChanges = () => {
  dispatch(resetDeletedContacts());
}

if (!Array.isArray(filteredContacts) || filteredContacts.length === 0) {
  console.log(filteredContacts);
  return null;
}
  return (
    <Wrapper>
      
      <Filter />
      
      <ListStyled>
        {filteredContacts.map(({ name, number, id }) => (
          <ItemStyled key={id}>
             <span>{name}:</span>
            <span>{number}</span>
            <DeleteButton onClick={() => onDeleteContact(id)}>{icon.minusUser} Delete</DeleteButton>
          </ItemStyled>
         
        ))}
      </ListStyled>
      <ResetBtn onClick={resetChanges}>{icon.reset}Reset</ResetBtn>
    </Wrapper>
  );
};