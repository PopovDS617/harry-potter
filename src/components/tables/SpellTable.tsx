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
  const { spinnerColor } = useTheme();

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
      <div>
        <div>
          <div>
            <div>Name</div>
            <div>Incantation</div>
            <div>Effect</div>
            <div>Type</div>
            <div>Light</div>
          </div>
        </div>
        <div>{spellsList}</div>
      </div>
    );
  }
};
export default SpellTable;
