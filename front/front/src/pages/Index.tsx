import React, { useState } from 'react'
import styled from 'styled-components';

/* Components */
import Header from '../components/Header';
import HomeMainContent from '../components/HomeMainContent';
import SideNav from '../components/SideNav';
import AddButton from '../components/AddButton';
import Modal from '../components/Modal';
import AddClientForm from '../components/Forms/AddClientForm';

function Index() {

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Wrapper>
        <Header />
        <SideNav />
        <HomeMainContent />
        <AddButton handleClick={() => setModalOpen(true)} />
        <Modal 
          isOpen={isModalOpen} 
          handleModal={setModalOpen} 
        >
          <AddClientForm setModalOpen={setModalOpen} />
        </Modal>

    </Wrapper>
  )
}

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default Index