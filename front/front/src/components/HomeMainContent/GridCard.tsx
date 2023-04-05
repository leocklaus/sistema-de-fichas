import React from 'react';
import styled from 'styled-components';
import {format} from 'fecha';
import { Link } from 'react-router-dom';

type GridCardProps = {
    id: number,
    name: string,
    value: number,
    updatedAt: Date,
}

function GridCard({id, name, value, updatedAt}: GridCardProps) {

  const date = new Date(updatedAt);

  return (
    <CardLink to={`/clientes/${id}`}>
      <Wrapper>
          <Item>{name}</Item>
          <Item>R${value}</Item>
          <Item>{format(date, 'DD/MM/YYYY')}</Item>
      </Wrapper>
    </CardLink>
  )
}

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
    height: 130px;
    background-color: var(--main-bg);
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: 200ms ease-in;
    will-change: transform;

    &:hover{
      transform: scale(1.05);
      transition: 200ms ease-out;
    }
`;

const Item = styled.span``;

export default GridCard;