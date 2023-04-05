import React, { useContext } from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';
import { SellersContext } from '../../contexts/SellersContext';

function CashierSelection() {

    const { changeSeller } = useContext(SellersContext);

    function handleCashierChange(e: React.ChangeEvent<HTMLSelectElement>){
      (e.target.value == "leonardo" || e.target.value == "marina") && changeSeller(e.target.value);
    }

    return (
        <Wrapper>
            <Label htmlFor="name">Caixa:</Label>
            <Select name="name" onChange={(e) => handleCashierChange(e)}>
                <option value="marina">Marina</option>
                <option value="leonardo">Leonardo</option>
            </Select>
        </Wrapper>
    )
}

const Wrapper = styled.form`
  font-size: 20px;
  display: flex;
  gap: 10px;

  @media ${QUERIES.cellphoneOnly}{
    display: none;
  }
`;

const Label = styled.label``;

const Select = styled.select``;

export default CashierSelection