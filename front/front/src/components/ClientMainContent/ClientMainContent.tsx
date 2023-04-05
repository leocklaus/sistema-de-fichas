import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { useClientData } from '../../hooks/useClientData';

/* Components */
import Transactions from './Transactions';

function ClientMainContent() {
    const {id} = useParams();
    const {data} = useClientData({id: id?.toString()});
    return (
        <Wrapper>
            <ClientContent>
                <TitleBar>
                    <ClientName>{data?.data.client.name}</ClientName>
                    <ClientAmount>R${data?.data.client.amount}</ClientAmount>
                </TitleBar>
                <Transactions transactions={data?.data.client.Transactions} />
            </ClientContent>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

const ClientContent = styled.section`
    width: 70%;
    background-color: var(--box-bg);
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TitleBar = styled.div`
    width: 73vw;
    height: 50px;
    margin-left: -30px;
    border-radius: 4px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--titles-bg);
`;

const ClientName = styled.span``;

const ClientAmount = styled.span``;

export default ClientMainContent