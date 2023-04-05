import React from 'react';
import styled from 'styled-components';

/* Components */
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ClientMainContent from '../components/ClientMainContent';

function Client() {
    return (
        <Wrapper>
            <Header />
            <ClientMainContent />
            {/* <AddButton handleClick={()=> } /> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default Client