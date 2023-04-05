import React from 'react';
import styled from 'styled-components';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function SideNav() {
  return (
    <Wrapper>
        <List>
            {letters.map((letter)=>(
                <Item key={letter}>
                    <Link>
                        {letter}
                    </Link>
                </Item>
            ))}
        </List>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    top: 300px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background-color: var(--main-bg);
`;

const List = styled.ul``;

const Item = styled.li`
    list-style: none;
    margin: 5px 0px;
    padding: 0;
    text-align: center;
`;

const Link = styled.a`
    cursor: pointer;
    transition: all 400ms;
    position: relative;

    &:hover{
        transition: all 400ms;
        &::before{
            content: "->";
            position: absolute;
            left: -20px;
        }
    }
`;

export default SideNav
