import styled from "styled-components";

type option = {
    value: number,
    name: string,
}

type FormSelectProps = {
    title: string,
    options: option[],
    onChangeFn: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

function FormSelect({title, options, onChangeFn}:FormSelectProps) {
  return (
    <Wrapper>
        {title}
        <Select onChange={onChangeFn}>
            {options.map((option)=>(
                <Option 
                    value={option.value}
                >
                    {option.name}
                </Option>
            ))}
        </Select>
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

const Select = styled.select`
    width: 100%;
    height: 34px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: inherit;
    padding: 0 12px;
`;

const Option = styled.option``;

export default FormSelect