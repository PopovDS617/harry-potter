import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/characters/charactersSlice';
import { AppDispatch, RootState } from '../../store/store';
import CharacterItem from '../../components/tables/CharacterItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';

function CharacterTable() {
  const dispatch: AppDispatch = useDispatch();
  const { spinnerColor } = useTheme();
  const { characters, isLoading } = useSelector(
    (state: RootState) => state.character
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  const charactersList = characters.map((el) => {
    return <CharacterItem key={Math.random().toFixed(10)} item={el} />;
  });

  if (isLoading) {
    return <LoadingSpinner color={spinnerColor} />;
  } else {
    return (
      <table className="table-model">
        <thead>
          <tr>
            <th>Name</th>
            <th>House</th>
            <th>Date of birth</th>
            <th>House </th>
            <th>Patronus </th>
            <th>Status </th>
          </tr>
        </thead>
        <tbody>{charactersList}</tbody>
      </table>
    );
  }
}

export default CharacterTable;
