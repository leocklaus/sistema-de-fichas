import {useState, useContext, useEffect} from 'react';
import { SellersContext } from '../../contexts/SellersContext';
import { useParams } from 'react-router-dom';
import { useTransactionMutate } from '../../hooks/useTransactionMutate';

/* Components */
import FormButton from './FormComponents/FormButton';
import FormInput from './FormComponents/FormInput';
import FormTextArea from './FormComponents/FormTextArea';
import FormSelect from './FormComponents/FormSelect';
import FormStructure from './FormComponents/FormStructure';

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

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionValue(Number(e.target.value))
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const handleModalClose = () => {
        setModalOpen((prev)=> !prev);
    }

    const operations = [
        {value: 1, name: "Venda"}, 
        {value: 2, name: "Dinheiro"},
        {value: 3, name: "Pix"}, 
        {value: 4, name: "Crédito"},
        {value: 5, name: "Débito"}, 
        {value: 6, name: "Cheque"},
    ]

    useEffect(()=>{
        handleModalClose();
    }, [isSuccess])

    return (
        <FormStructure onSubmitFn={handleSubmit}>

            <FormSelect 
                title='Selecione a Operação:'
                options={operations}
                onChangeFn={handleOperationChange}
            />
         
            <FormInput 
                title='Valor da Operação:'
                type='number'
                value={transactionValue}
                onChangeFn={handleValueChange}
            />

            <FormTextArea 
                title='Descrição'
                value={description}
                onChangeFn={handleDescriptionChange}
            />

            <FormButton type='submit'>Cadastrar</FormButton>

        </FormStructure>
    )
}

export default AddTransactionForm;