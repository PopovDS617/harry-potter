import React from 'react';
import { IPotion } from '../../models/data-models';

interface Props {
  item: IPotion;
}

const PotionItem = (props: Props) => {
  const {
    effect,
    sideEffects,
    characteristics,
    difficulty,
    ingredients,
    inventors,
  } = props.item;

  const ingredientsTransformed = ingredients.map((el) => el.name).join(', ');

  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{effect}</td>

      <td>{characteristics} </td>
      <td>{difficulty} </td>
      <td>{ingredientsTransformed}</td>
    </tr>
  );
};

export default PotionItem;
