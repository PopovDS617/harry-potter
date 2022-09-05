import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPotions } from '../../store/potions/potionsSlice';
import { AppDispatch, RootState } from '../../store/store';

import PotionItem from '../../components/tables/PotionItem';

function PotionTable() {
  const dispatch: AppDispatch = useDispatch();

  const { potions, isLoading } = useSelector(
    (state: RootState) => state.potion
  );
  const loadingText = (
    <tr>
      <td colSpan={7}>Loading ...</td>
    </tr>
  );

  useEffect(() => {
    dispatch(getPotions());
  }, []);
  const potionsList = potions.map((el) => {
    return <PotionItem key={Math.random().toFixed(10)} item={el} />;
  });
  console.log(potionsList);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Effect</th>
          <th>Side Effects</th>
          <th>Characteristics </th>
          <th>Difficulty </th>
          <th>Ingredients </th>
          <th>Inventors </th>
        </tr>
      </thead>
      <tbody>{isLoading ? loadingText : potionsList}</tbody>
    </table>
  );
}

export default PotionTable;
