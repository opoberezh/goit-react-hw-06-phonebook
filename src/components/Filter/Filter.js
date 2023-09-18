import {WrapperFilter, TitleStyled, TextStyledFilter, InputStyled} from './Filter.styled';
import {ImSearch, ImUsers} from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import {setFilter} from '../../redux/filterSlice';


const icons = {
    list: <ImUsers/>,
    search: <ImSearch/>,
};

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilter = evt => {
dispatch(setFilter(evt.target.value.toLowerCase().trim()));
  }
    return (
      <WrapperFilter>
        <TitleStyled>{icons.list} Contacts</TitleStyled>
        <TextStyledFilter>{icons.search} Find contacts by name</TextStyledFilter>
        <InputStyled 
          type="text"
          value={filter}
          onChange={changeFilter}
        ></InputStyled>
      </WrapperFilter>
    );
  };