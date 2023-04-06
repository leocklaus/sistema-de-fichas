import React, { useState } from 'react';
import styled from 'styled-components';

/* Components */
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ClientMainContent from '../components/ClientMainContent';
import Modal from '../components/Modal';
import AddTransactionForm from '../components/Forms/AddTransactionForm';

function Client() {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <Wrapper>
            <Header />
            <ClientMainContent />
            <AddButton handleClick={()=> setModalOpen(true) } />
            <Modal
                isOpen={isModalOpen}
                handleModal={setModalOpen}
                title="ADICIONAR TRANSAÇÃO"
            >
                <AddTransactionForm setModalOpen={setModalOpen} />
            </Modal>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default Client