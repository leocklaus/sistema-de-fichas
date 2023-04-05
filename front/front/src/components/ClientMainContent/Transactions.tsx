import React from 'react';
import styled from 'styled-components';
import { Transaction } from '../../types/client';

/* Components */
import TransactionItem from './TransactionItem';

type TransactionsProps = {
    transactions: Transaction[] | [] | undefined,
}

function Transactions({transactions}: TransactionsProps) {
    return (
        <Wrapper>
            <Header>
                <Operation>Operação</Operation>
                <Value>Valor</Value>
                <Description>Descrição</Description>
                <Date>Data</Date>
                <Prev>Prev.</Prev>
                <Balance>Saldo</Balance>
            </Header>
            {transactions && transactions?.length > 0 ? (
                transactions.map((transaction)=>(
                    <TransactionItem tr={transaction} />
                ))
            ): "O Cliente ainda não possui nenhuma transação cadastrada."}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Header = styled.div`
    display: flex;
    background-color: var(--main-bg);
    padding: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-bottom: 10px;
`;

const HeaderItem = styled.div`
    &:not(:last-child){
        border-right: 1px solid var(--header-border);
        margin-right: 10px;
    }

    font-weight: bold;
`;

const Operation = styled(HeaderItem)`
    width: 10%;
`;
const Value = styled(HeaderItem)`
    width: 10%;
`;
const Description = styled(HeaderItem)`
    flex: 1;
`;
const Date = styled(HeaderItem)`
    width: 15%;
`;
const Prev = styled(HeaderItem)`
    width: 10%;
`;
const Balance = styled(HeaderItem)`
    width: 10%;
`;

export default Transactions;