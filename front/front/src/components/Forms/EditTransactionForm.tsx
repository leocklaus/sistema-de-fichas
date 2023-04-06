import {useState, useEffect} from 'react'
import FormStructure from './FormComponents/FormStructure'
import FormInput from './FormComponents/FormInput'
import FormButton from './FormComponents/FormButton'
import FormTextArea from './FormComponents/FormTextArea'
import { useTransactionEditeMutate } from '../../hooks/useTransactionEditMutate';
import { Transaction } from '../../types/client';

type EditTransactionFormProps = {
    clientId: number,
    tr: Transaction,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

type data = {
    description: string,
    value: number,
    ClientId: number,
    OperationId: number,
    CashierId: number,
    transactionId: number,
}

function EditTransactionForm({clientId, tr, setModalOpen}: EditTransactionFormProps) {

    const {mutate, isSuccess} = useTransactionEditeMutate()

    const [description, setDescription] = useState(tr.description);

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const data:data = {
        description: description,
        value: tr.value,
        ClientId: clientId,
        OperationId: tr.Operation.id,
        CashierId: tr.CashierId,
        transactionId: tr.id,
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        mutate(data);
        console.log("id:",data.ClientId)
    }

    const handleModalClose = () => {
        setModalOpen((prev)=> !prev);
    }

    useEffect(()=>{
        handleModalClose();
    }, [isSuccess])

  return (
    <FormStructure onSubmitFn={handleSubmit}>
        <FormTextArea
            title='Descrição:'
            value={description}
            onChangeFn={handleDescriptionChange}
        />
        <FormButton type='submit'>Editar Descrição</FormButton>
    </FormStructure>
  )
}

export default EditTransactionForm