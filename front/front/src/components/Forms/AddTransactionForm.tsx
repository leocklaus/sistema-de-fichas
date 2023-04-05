import {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import { SellersContext } from '../../contexts/SellersContext';
import { useParams } from 'react-router-dom';
import { useTransactionMutate } from '../../hooks/useTransactionMutate';

type AddTransactionFromProps = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const AddTransactionForm = ({setModalOpen}: AddTransactionFromProps) => {

    const [operation, setOperation] = useState(1);
    const [transactionValue, setTransactionValue] = useState(0);
    const [description, setDescription] = useState('');

    const { mutate, isSuccess  } = useTransactionMutate();

    const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(e.target.value);
        setOperation(value);
    }

    const { currentSeller } = useContext(SellersContext);

    const {id} = useParams();

    const data = {
        description: description,
        value: transactionValue,
        ClientId: Number(id),
        OperationId: operation,
        CashierId: currentSeller
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(data);
    }

    const handleModalClose = () => {
        setModalOpen((prev)=> !prev);
    }

    useEffect(()=>{
        handleModalClose();
    }, [isSuccess])

    return (
        <Wrapper onSubmit={(e) => handleSubmit(e)}>
            <Label htmlFor='operation'>Selecione a Operação:</Label>
            <SelectOption 
                name='operation' 
                onChange={(e)=> handleOperationChange(e)}
            >
                <Option value="1">Venda</Option>
                <Option value="2">Dinheiro</Option>
                <Option value="3">Pix</Option>
                <Option value="4">Crédito</Option>
                <Option value="5">Débito</Option>
                <Option value="6">Cheque</Option>
            </SelectOption>
            <Label>Valor da Operação:</Label>
            <TextInput 
                type='number' 
                value={transactionValue} 
                onChange={(e) => setTransactionValue(Number(e.target.value))}
            />
            <Label htmlFor='description'>Descrição</Label>
            <TextArea 
                name='descritpion' 
                id='description' 
                value={description} 
                onChange={(e)=> setDescription(e.target.value)} />
            <Button type="submit">Cadastrar</Button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
`;

const Label = styled.label``;

const SelectOption = styled.select``;

const Option = styled.option``;

const TextInput = styled.input``;

const TextArea = styled.textarea``;

const Button = styled.button``;

export default AddTransactionForm;