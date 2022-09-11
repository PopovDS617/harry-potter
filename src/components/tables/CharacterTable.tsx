import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/characters/charactersSlice';
import { AppDispatch, RootState } from '../../store/store';
import CharacterItem from '../../components/tables/CharacterItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';
import SearchBar from '../input/SearchBar';
import { ICharacter } from '../../models/data-models';

function CharacterTable() {
  const dispatch: AppDispatch = useDispatch();
  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();
  const { characters, isLoading } = useSelector(
    (state: RootState) => state.character
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  const charactersList = characters.map((el: ICharacter) => {
    return <CharacterItem key={Math.random().toFixed(10)} item={el} />;
  });

  if (isLoading) {
    return <LoadingSpinner color={spinnerColor} />;
  } else {
    return (
      <React.Fragment>
        <div className="table-container-search">
          <SearchBar />
        </div>
        <div className="table-container">
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
        </div>
      </React.Fragment>
    );
  }
}

export default CharacterTable;
