import {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Transaction } from '../../types/client';
import {format} from 'fecha';


/* Components */
import Icons from '../Icons';
import Modal from '../Modal';
import EditTransactionForm from '../Forms/EditTransactionForm';
import { useParams } from 'react-router-dom';

type TransactionItemProps = {
  tr: Transaction
}

interface ExtraContent {
    isOpen: boolean,
}

function TransactionItem({tr}: TransactionItemProps) {

    const [isExtraContentOpen, setExtraContentOpen] = useState(false);

    const [isModalOpen, setModalOpen] = useState(false);

    const date = new Date(tr.createdAt);

    const {id} = useParams();

  return (
    <Wrapper>
        <MainContent isOpen={isExtraContentOpen} onClick={()=> setExtraContentOpen((prev)=> !prev) }>
            <Operation>{tr.Operation.name}</Operation>
            <Value>R${tr.value}</Value>
            <Description>{tr.description}</Description>
            <DateDiv>{format(date, 'DD/MM/YYYY')}</DateDiv>
            <Prev>R${tr.prevAmount}</Prev>
            <Balance>R${tr.partialBallance}</Balance>
            </MainContent>
        <ExtraContent isOpen={isExtraContentOpen}>
            <IconWrapper onClick={()=> setModalOpen(true)}>
                <Icons
                    id='edit'
                    size={20}
                />
            </IconWrapper>
            <ExtraDescription>
                Descrição: {tr.description}
            </ExtraDescription>
            <ExtraCashier>
                Caixa: {tr.Cashier.name}
            </ExtraCashier>
            <ExtraPrev>
                Prev: {tr.prevAmount}
            </ExtraPrev>
            <ExtraPartial>
                Saldo: {tr.partialBallance}
            </ExtraPartial>
        </ExtraContent>
        <Modal
                isOpen={isModalOpen}
                handleModal={setModalOpen}
                title="EDITAR TRANSAÇÃO"
            >
                <EditTransactionForm
                    clientId={Number(id)} 
                    tr={tr}
                    setModalOpen={setModalOpen}
                />
        </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;

const MainContent = styled.div<ExtraContent>`
    display: flex;
    background-color: var(--transaction-item-bg);
    padding: 10px;
    border-radius: 4px;
    border-bottom-left-radius: ${props => !props.isOpen && '0px'};
    border-bottom-right-radius: ${props => !props.isOpen && '0px'};
    cursor: pointer;
`;

const ExtraContent = styled.div<ExtraContent>`
    display: ${props => !props.isOpen? "none": "flex"};
    position: relative;
    flex-direction: column;
    gap: 6px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid var(--transaction-item-bg);
    background-color: #f3f2f2;
    padding: 10px;
    font-size: 14px;
`;

const TransItem = styled.div`
    &:not(:last-child){
        border-right: 1px solid var(--header-border);
        margin-right: 10px;
    }

    font-weight: 100;
    font-size: 14px;
`;

const Operation = styled(TransItem)`
    width: 10%;
`;
const Value = styled(TransItem)`
    width: 10%;
`;
const Description = styled(TransItem)`
    flex: 1;
`;
const DateDiv = styled(TransItem)`
    width: 15%;
`;
const Prev = styled(TransItem)`
    width: 10%;
`;
const Balance = styled(TransItem)`
    width: 10%;
`;

const ExtraItems = styled.div``;

const ExtraDescription = styled(ExtraItems)``;

const ExtraCashier = styled(ExtraItems)``;

const ExtraPrev = styled(ExtraItems)``;

const ExtraPartial = styled(ExtraItems)``;

const IconWrapper = styled.button`
    background-color: transparent;
    border: none;
    text-decoration: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transform: scale(1.1);
`;

export default TransactionItem;