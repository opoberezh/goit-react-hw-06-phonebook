import styled from 'styled-components';

export const WrapperFilter = styled.div`

width: 100%;
`;

export const TitleStyled = styled.h2`
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0 0 0;
    color: #2F4F4F;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.55);
`;

export const TextStyledFilter = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin: 10px 0 0 0;
`;

export const InputStyled = styled.input`
width: 100%;
padding: 4px; 
border: 2px solid #A9A9A9;
border-radius: 4px;
box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
background: transparent;
  &:focus,
  &:hover,
  &:active {
    border: 2px solid #4169E1;
    background: rgba(245, 245, 220, 0.75);
    outline: transparent;
  }
`;