import React from 'react';
import styled from 'styled-components';
import GridCard from './GridCard';

type ContentGridParams = {
    Title: string,
    Content: {
      id: number,
      name: string,
      amount: number,
      updatedAt: Date,
    }[],
}

function ContentGrid({Title, Content}:ContentGridParams) {
  return (
    <Wrapper>
        <TitleBar>
            <TitleComp>{Title}</TitleComp>
        </TitleBar>
        <Grid>
          {Content.map(card=>(
            <GridCard key={card.id} id={card.id} name={card.name} value={card.amount} updatedAt={card.updatedAt} />
          ))}
        </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
  background-color: var(--box-bg);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const TitleBar = styled.div`
  width: 73vw;
  height: 50px;
  margin-left: -30px;
  border-radius: 4px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  background-color: var(--titles-bg);
`;
const TitleComp = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
`;
const Grid = styled.section`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 25px;
`;

export default ContentGrid