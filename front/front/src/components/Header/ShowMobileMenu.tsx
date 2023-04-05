import React from 'react'
import styled from 'styled-components'
import { QUERIES } from '../../constants';

/* Components */
import Icons from '../Icons';

function ShowMobileMenu() {
  return (
    <Wrapper>
      <Icons id={'menu'} size={32}/>
    </Wrapper>
  )
}

const Wrapper = styled.button`
    display: none;
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media ${QUERIES.tabletAndSmaller}{
    display: block;
  }
`;

export default ShowMobileMenu