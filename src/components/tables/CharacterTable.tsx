import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/characters/charactersSlice';
import { AppDispatch, RootState } from '../../store/store';
import CharacterItem from '../../components/tables/CharacterItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';

function CharacterTable() {
  const dispatch: AppDispatch = useDispatch();
  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();
  const { characters, isLoading } = useSelector(
    (state: RootState) => state.character
  );
  console.log(characters);

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
      <table className={tableTheme}>
        <thead className={tHeadTheme}>
          <tr>
            <th>Name</th>
            <th className="tr-character-house">House</th>
            <th className="tr-character-dob">Date of birth</th>
            <th className="tr-character-ancestry">Ancestry </th>
            <th className="tr-character-patronus">Patronus </th>
            <th className="tr-character-status">Status </th>
          </tr>
        </thead>
        <tbody>{charactersList}</tbody>
      </table>
    );
  }
}

export default CharacterTable;
