import styled from "styled-components";

type value = string | number;

type FormInputProps = {
    title: string,
    type: "text"|"number"|"password"|"email",
    value: value,
    onChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function FormInput({title, type, value, onChangeFn}:FormInputProps) {
  return (
    <Wrapper>
        {title}
        <Input 
            type={type}
            value={value}
            onChange={(e) => onChangeFn(e)}
        />
    </Wrapper>
  )
}

const Wrapper = styled.label`
    width: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const Input = styled.input`
    width: 100%;
    height: 36px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: inherit;
    padding-left: 12px;
`;

export default FormInput