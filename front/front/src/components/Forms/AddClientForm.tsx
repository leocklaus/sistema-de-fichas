import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useClientsMutate } from '../../hooks/useClientsMutate';

type AddClientFromProps = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function AddClientForm({setModalOpen}: AddClientFromProps) {

    const [name, setName] = useState('');

    const { mutate, isSuccess } = useClientsMutate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const data = {name: name}
        mutate(data);
    }

    const handleModalClose = ()=>{
        setModalOpen((prev)=> !prev)
    }

    useEffect(()=>{
        handleModalClose()
    }, [isSuccess]);

    return (
    <Wrapper onSubmit={(e)=> handleSubmit(e)}>
        <Label htmlFor='name'>Nome do Cliente</Label>
        <TextInput 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e)=> setName(e.target.value)} 
        />
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

const TextInput = styled.input``;

const Button = styled.button``;

export default AddClientForm