import React from 'react';
import styled from 'styled-components';

/* Components */
import Icons from './Icons';

type AddButtonProps = {
  handleClick: () => void,
}

function AddButton({handleClick}: AddButtonProps) {
  return (
    <Wrapper onClick={handleClick}>
        <Icons id={'plus'} color="#A3A0A0" size={32}/>
    </Wrapper>
  )
}

const Wrapper = styled.button`
    border: none;
    text-decoration: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: var(--main-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 200ms ease-out;

    &:hover{
        transition: all 300ms ease-in;
        transform: scale(1.2);
    }
`;

export default AddButton