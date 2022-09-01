import React from 'react';
import { Potion } from '../../models/data-models';

interface Props {
  item: Potion;
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
  const inventorsTransformed = inventors
    .map((el) => {
      if (!el.firstName && !el.lastName) {
        return;
      } else if (el.firstName === null) {
        return el.lastName;
      } else {
        return el.firstName + ' ' + el.lastName;
      }
    })
    .join(', ');

  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{effect}</td>
      <td>{sideEffects}</td>
      <td>{characteristics} </td>
      <td>{difficulty} </td>
      <td>{ingredientsTransformed}</td>
      <td>{inventorsTransformed}</td>
    </tr>
  );
};

export default PotionItem;
