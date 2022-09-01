import React from 'react';
import { Character } from '../../models/data-models';

interface Props {
  item: Character;
}

const CharacterItem = (props: Props) => {
  const { name, ancestry, house, dateOfBirth, patronus, alive } = props.item;

  return (
    <tr>
      <td>{name}</td>
      <td>{house}</td>
      <td>{dateOfBirth}</td>
      <td>{ancestry} </td>
      <td>{patronus} </td>
      <td>{alive ? '' : 'dead'}</td>
    </tr>
  );
};

export default CharacterItem;
