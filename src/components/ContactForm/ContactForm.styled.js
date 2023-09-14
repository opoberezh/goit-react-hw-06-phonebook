import styled from 'styled-components';
import {Form, Field, } from 'formik';

export const Styleform = styled(Form)`

width: 100%

`;

export const HeroTitleStyled = styled.h1`
margin: auto;
text-align: center;
font-size: 30px;
font-weight: 500;
color: #2F4F4F;
text-shadow: 3px 3px 3px rgba(0,0,0,0.55);
`;

export const StyledField = styled(Field)`
margin: auto;
padding: 4px; 
width: 100%;
border: 2px solid #A9A9A9;
border-radius: 4px;
box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
background: transparent;
&:focus,
&:hover,
&:active {
  border: 2px solid #2F4F4F;
  background: rgba(245, 245, 220, 0.75);
  outline: transparent;
}
`;

export const StyledLabel = styled.p`
font-size: 14px;
font-weight: 400;
margin: 15px 0 0 5px;

`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 400;

  min-width: 100px;
  height: 30px;
  margin: 15px 0 0 0;
 
  padding: 5px;
  
  border-radius: 5px;
  
  border: 2px solid #A9A9A9;
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
  cursor: pointer;
  background: transparent;

  &:focus,
  &:hover {
    border: 2px solid #2F4F4F;
    background: #2F4F4F;
    color: black;

  }

  svg {
    height: 1.1em;
    width: 1.1em;
    margin-right: 5px;
  }
`;