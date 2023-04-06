import { List, XCircle, Plus, PencilSimple } from '@phosphor-icons/react';
import styled from 'styled-components';

type iconsIds = 'menu' | 'close' | 'plus' | 'edit';

type iconsProps = {
  id: iconsIds,
  color?: string,
  size?: number
}

function Icons({id, color, size}:iconsProps) {

  const iconsList = {
    menu: List,
    close: XCircle,
    plus: Plus,
    edit: PencilSimple,
  }

  const Component = iconsList[id];

  if (!Component) {
    throw new Error(`Nenhum icone encontrado com a ID: ${id}`);
  }

  return (
    <Wrapper>
      <Component size={size} color={color} />
    </Wrapper>
  )
}

const Wrapper = styled.span`
  & > svg{
    display: block;
  }
`;

export default Icons