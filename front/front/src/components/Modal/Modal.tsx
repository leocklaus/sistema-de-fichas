import React from 'react';
import {Root, Portal, Overlay, Content, Close} from '@radix-ui/react-dialog';
import styled from 'styled-components';

/* Components */
import Icons from '../Icons';

type modalProps = {
    isOpen: boolean,
    handleModal: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
    children: JSX.Element,
}

function Modal({isOpen, handleModal, title, children}: modalProps) {
  return (
    <Root open={isOpen} onOpenChange={handleModal}>
      <Portal>
        <DialogOverlay>
          <DialogContent>
            <IconWrapper>
              <Icons
                id='close'
                size={20}
               />
            </IconWrapper>
            <FormTitle>{title}</FormTitle>
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
  background-color: var(--main-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  gap: 38px;
  position: relative;
`;

const FormTitle = styled.span`
  font-size: 20px;
`;

const IconWrapper = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: inherit;
  border: none;
  text-decoration: none;
  cursor: pointer;
  will-change: transform;
  transition: 100ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;


export default Modal