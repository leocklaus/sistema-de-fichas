import React from 'react'
import styled from 'styled-components';
import { Transaction } from '../../types/client';
import {format} from 'fecha';

type TransactionItemProps = {
  tr: Transaction
}

function TransactionItem({tr}: TransactionItemProps) {

  const date = new Date(tr.createdAt);

  return (
    <Wrapper>
      <Operation>{tr.Operation.name}</Operation>
      <Value>R${tr.value}</Value>
      <Description>{tr.description}</Description>
      <DateDiv>{format(date, 'DD/MM/YYYY')}</DateDiv>
      <Prev>R${tr.prevAmount}</Prev>
      <Balance>R${tr.partialBallance}</Balance>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    background-color: var(--transaction-item-bg);
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`;

const TransItem = styled.div`
    &:not(:last-child){
        border-right: 1px solid var(--header-border);
        margin-right: 10px;
    }

    font-weight: 100;
    font-size: 14px;
`;

const Operation = styled(TransItem)`
    width: 10%;
`;
const Value = styled(TransItem)`
    width: 10%;
`;
const Description = styled(TransItem)`
    flex: 1;
`;
const DateDiv = styled(TransItem)`
    width: 15%;
`;
const Prev = styled(TransItem)`
    width: 10%;
`;
const Balance = styled(TransItem)`
    width: 10%;
`;

export default TransactionItem;