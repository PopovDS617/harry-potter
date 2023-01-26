import React from 'react';
import { ICharacter } from '../../models/data-models';
import { dateConverter } from '../../utils/date-converter';

interface Props {
  item: ICharacter;
}

const CharacterItem = (props: Props) => {
  const { name, house, role } = props.item;
  console.log(name);

  return (
    <tr>
      <td>{name}</td>
      <td>{role}</td>
      <td>{house}</td>
    </tr>
  );
};

export default CharacterItem;
