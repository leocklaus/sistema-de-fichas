import React, { useEffect, useState } from 'react';
import { useClientsMutate } from '../../hooks/useClientsMutate';

/* Components */
import FormButton from './FormComponents/FormButton';
import FormInput from './FormComponents/FormInput';
import FormStructure from './FormComponents/FormStructure';

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

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleModalClose = ()=>{
        setModalOpen((prev)=> !prev)
    }

    useEffect(()=>{
        handleModalClose()
    }, [isSuccess]);

    return (
    <FormStructure onSubmitFn={handleSubmit}>
        <FormInput 
            title="Nome do Cliente"
            type="text"
            value={name}
            onChangeFn={handleName}
        />
        <FormButton type='submit'>Cadastrar</FormButton>
    </FormStructure>
    )
}

export default AddClientForm