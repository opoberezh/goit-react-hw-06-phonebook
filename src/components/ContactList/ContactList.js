import { ContactsFilter } from '../Filter/Filter';
import {ListStyled,  ItemStyled,   DeleteButton, ResetBtn, Wrapper} from './ContactList.styled';
import {ImUserMinus, ImLoop2} from "react-icons/im";

const icon = {
    minusUser: <ImUserMinus/>,
    reset: <ImLoop2/>
};

export const ContactList = ({
  contacts,
  contactFilter,
  onChangeFilter,
  onDeleteContact,
  onReset,
}) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return (
    <Wrapper>
      
      <ContactsFilter value={contactFilter} onChange={onChangeFilter} />
      
      <ListStyled>
        {filteredContacts.map(contact => (
          <ItemStyled key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>{icon.minusUser} Delete</DeleteButton>
          </ItemStyled>
         
        ))}
      </ListStyled>
      <ResetBtn onClick={onReset}>{icon.reset}Reset</ResetBtn>
    </Wrapper>
  );
};