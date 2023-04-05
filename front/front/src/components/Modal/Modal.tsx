import React from 'react';
import {Root, Portal, Overlay, Content} from '@radix-ui/react-dialog';
import styled from 'styled-components';

type modalProps = {
    isOpen: boolean,
    handleModal: React.Dispatch<React.SetStateAction<boolean>>,
    children: JSX.Element,
}

function Modal({isOpen, handleModal, children}: modalProps) {
  return (
    <Root open={isOpen} onOpenChange={handleModal}>
      <Portal>
        <DialogOverlay>
          <DialogContent>
            <FormTitle>ADICIONAR CLIENTE</FormTitle>
            {children}
          </DialogContent>
        </DialogOverlay>
      </Portal>
    </Root>
  )
}

const DialogOverlay = styled(Overlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled(Content)`
  width: 490px;
  height: 290px;
  background-color: var(--main-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  gap: 38px;
`;

const FormTitle = styled.span``;


export default Modal