import React from 'react';
import { ICharacter } from '../../models/data-models';
import { dateConverter } from '../../utils/date-converter';

interface Props {
  item: ICharacter;
}

const CharacterItem = (props: Props) => {
  const { name, ancestry, house, dateOfBirth, patronus, alive } = props.item;

  return (
    <tr>
      <td>{name}</td>
      <td>{house}</td>
      <td>{dateOfBirth ? dateConverter(dateOfBirth) : ''}</td>
      <td>{ancestry} </td>
      <td>{patronus} </td>
      <td>{alive ? '' : 'dead'}</td>
    </tr>
  );
};

export default CharacterItem;
