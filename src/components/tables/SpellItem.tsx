import React from 'react';
import { ISpell } from '../../models/data-models';

type Props = {
  item: ISpell;
};

const SpellItem = (props: Props) => {
  const { name, incantation, effect, type, light } = props.item;

  return (
    <div>
      <div>{name}</div>
      <div>{incantation}</div>
      <div>{effect}</div>
      <div>{type} </div>
      <div>{light} </div>
    </div>
  );
};

export default SpellItem;
