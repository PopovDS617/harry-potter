import React from 'react';
import { Character } from '../../models/data-models';

interface Props {
  item: Character;
}

const CharacterItem = (props: Props) => {
  const { name, house, role } = props.item;

  return (
    <tr>
      <td>{name}</td>
      <td>{role}</td>
      <td>{house}</td>
    </tr>
  );
};

export default CharacterItem;
