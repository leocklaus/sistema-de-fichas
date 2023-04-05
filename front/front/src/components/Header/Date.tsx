import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {getDate} from '../../helpers/formatDate';

function DateDisplay() {

    const [day, setDay] = useState<string>(getDate().day);
    const [hour, setHour] = useState<string>(getDate().hour);

    const fetchDate = ()=>{
      const {hour, day} = getDate();
      setDay(day);
      setHour(hour);
    }

    useEffect(()=>{
      const timeInterval = setInterval(()=>{fetchDate()}, 1000);
      return () => clearInterval(timeInterval);
    }, [])

    return (
        <Wrapper>
            <Text>{day}</Text>
            <Text>{hour}</Text>
        </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
`;

export default DateDisplay;