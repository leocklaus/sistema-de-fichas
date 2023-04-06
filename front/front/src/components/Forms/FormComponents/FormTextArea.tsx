import styled from "styled-components";

type FormInputProps = {
    title: string,
    value: string,
    onChangeFn: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

function FormTextArea({title, value, onChangeFn}:FormInputProps) {
  return (
    <Wrapper>
        {title}
        <TextArea 
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

const TextArea = styled.textarea`
    width: 100%;
    height: 80px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: inherit;
    padding: 12px;
    resize: none;
`;

export default FormTextArea;