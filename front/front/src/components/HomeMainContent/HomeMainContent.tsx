import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useClientsData } from '../../hooks/useClientsData';
import ContentGrid from './ContentGrid';

function HomeMainContent() {

  const { data, isLoading } = useClientsData();
  
  return (
    <Wrapper>
      {data && data.data.clients.map(letter=>{
        if(letter.content.length > 0){
          return <ContentGrid key={letter.slug} Title={letter.slug} Content={letter.content}/>
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap: 20px;
`;

export default HomeMainContent