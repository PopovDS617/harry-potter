import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/characters/charactersSlice';
import { AppDispatch, RootState } from '../../store/store';
import CharacterItem from '../../components/tables/CharacterItem';

function CharacterTable() {
  const dispatch: AppDispatch = useDispatch();

  const { characters, isLoading } = useSelector(
    (state: RootState) => state.character
  );
  const loadingText = (
    <tr>
      <td colSpan={6}>Loading ...</td>
    </tr>
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  const charactersList = characters.map((el) => {
    return <CharacterItem key={Math.random().toFixed(10)} item={el} />;
  });

  return (
    <table>
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
      <tbody>{isLoading ? loadingText : charactersList}</tbody>
    </table>
  );
}

export default CharacterTable;
