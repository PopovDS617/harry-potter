import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpells } from '../../store/spells/spellsSlice';
import { AppDispatch, RootState } from '../../store/store';
import SpellItem from './SpellItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';

const SpellTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, spells } = useSelector((state: RootState) => state.spell);
  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();

  useEffect(() => {
    dispatch(getSpells());
  }, []);
  const spellsList = spells.map((el) => {
    return <SpellItem key={Math.random().toFixed(10)} item={el} />;
  });

  if (isLoading) {
    return <LoadingSpinner color={spinnerColor} />;
  } else {
    return (
      <table className={tableTheme}>
        <thead className={tHeadTheme}>
          <tr>
            <th>Name</th>
            <th>Incantation</th>
            <th>Effect</th>
            <th>Type</th>
            <th>Light</th>
          </tr>
        </thead>
        <tbody>{spellsList}</tbody>
      </table>
    );
  }
};
export default SpellTable;
