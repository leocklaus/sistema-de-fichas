import React from 'react'
import styled from 'styled-components'

/* Constants */
import { QUERIES } from '../../constants';

/* Components */
import DateDisplay from './Date';
import CashierSelection from './CashierSelection';
import ShowMobileMenu from './ShowMobileMenu';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Wrapper>
      <Title><TitleLink to={'/'}>Loja Klaus</TitleLink></Title>
      <ShowMobileMenu />
      <HeaderInfo>
        <DateDisplay />
        <CashierSelection />
      </HeaderInfo>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: var(--main-bg);
  height: 235px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 150px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${QUERIES.tabletAndSmaller}{
    padding: 80px 87px;
  }

  @media ${QUERIES.cellphoneOnly}{
    flex-direction: column;
    padding: 0;
    justify-content: center;
    gap: 15px;
  }
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.h1`
  color: var(--logo-color);
  font-size: 64px;

  @media ${QUERIES.laptopAndSmaller}{
    width: min-content;
  }

  @media ${QUERIES.tabletAndSmaller}{
    font-size: 48px;
  }

  @media ${QUERIES.cellphoneOnly}{
    width:fit-content;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export default Header