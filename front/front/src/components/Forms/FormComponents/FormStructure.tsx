import styled from "styled-components";
import { ReactNode } from 'react';

type FormStructureProps = {
    onSubmitFn: (e: React.FormEvent<HTMLFormElement>) => void,
    children: ReactNode,
}

function FormStructure({onSubmitFn, children}:FormStructureProps) {
  return (
    <Wrapper onSubmit={onSubmitFn}>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    width: 100%;
    font-weight: 400;
`;

export default FormStructure;