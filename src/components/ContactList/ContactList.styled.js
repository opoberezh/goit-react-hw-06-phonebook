import styled from 'styled-components';

export const Wrapper = styled.div`
    
   width: 100%;
`;


export const ListStyled = styled.ul`
 
  // align-items: center;
  // justify-content: space-between;
  // flex-direction: column;
  // margin: 0;
  // padding: 0;
  // gap: 15px;
  
`;

export const ItemStyled = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    // margin-left: 20px;
    padding: 10px;  
    // gap: 15px;
`;

export const DeleteButton = styled.button`

  min-width: 75px;

  padding: 5px;
  border-radius: 5px;
  border: 2px solid #A9A9A9;
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.55);
  cursor: pointer;
  background: transparent;

  &:focus,
  &:hover {
    border: 2px solid #8B0000;
    background: #8B0000;
    color: black;

  }
`;

export const ResetBtn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 400;

    min-width: 100px;
    height: 30px;
    margin: 10px 0 0 0;

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
        margin-right: 20px;
    }
`;