import React from 'react';
import { ISpell } from '../../models/data-models';

type Props = {
  item: ISpell;
};

const SpellItem = (props: Props) => {
  const { name, incantation, effect, type, light } = props.item;

  return (
    <tr>
      <td>{name}</td>
      <td>{incantation}</td>
      <td>{effect}</td>
      <td>{type} </td>
      <td>{light} </td>
    </tr>
  );
};

export default SpellItem;
