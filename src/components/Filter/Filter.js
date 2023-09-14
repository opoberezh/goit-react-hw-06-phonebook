import {WrapperFilter, TitleStyled, TextStyledFilter, InputStyled} from './Filter.styled';
import {ImSearch, ImUsers} from "react-icons/im";

const icons = {
    list: <ImUsers/>,
    search: <ImSearch/>,
};

export const ContactsFilter = ({ value, onChange }) => {
    return (
      <WrapperFilter>
        <TitleStyled>{icons.list} Contacts</TitleStyled>
        <TextStyledFilter>{icons.search} Find contacts by name</TextStyledFilter>
        <InputStyled 
          type="text"
          value={value}
          onChange={evt => onChange(evt.target.value)}
        ></InputStyled>
      </WrapperFilter>
    );
  };