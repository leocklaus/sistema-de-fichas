import { ReactNode } from "react";
import styled from "styled-components";

type FormButtonProps = {
    type?: "button" | "submit" | "reset" | undefined,
    children: ReactNode
}

function FormButton({type, children}: FormButtonProps) {
  return (
    <Wrapper type={type}>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.button`
    width: 100%;
    background-color: var(--button-bg);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    color: #fff;
    height: 36px;
    cursor: pointer;
    transition: all 300ms ease-out;

    &:hover {
        background-color: var(--button-hover-bg);
        transition: all 300 ms ease-in;
    }
`;

export default FormButton;