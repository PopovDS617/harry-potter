import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/characters/charactersSlice';
import { AppDispatch, RootState } from '../../store/store';
import CharacterItem from '../../components/tables/CharacterItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';
import SearchBar from '../input/SearchBar';
import { ICharacter } from '../../models/data-models';
import { tableSearch } from '../../utils/table-search';
import NothingFound from './NothingFound';

function CharacterTable() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();
  const { characters, isLoading } = useSelector(
    (state: RootState) => state.character
  );
  const [itemsList, setItemsList] = useState(characters);
  const [searchText, setSearchText] = useState('');

  const searchHandler = (text: string) => {
    setSearchText(text);
    if (searchText.length >= 2) {
      const characterKeys = ['name', 'house', 'ancestry'];
      let filteredItems = tableSearch(searchText, characters, characterKeys);

      setItemsList(filteredItems);
    }
  };
  const cancelSearchHandler = () => {
    setItemsList(characters);
  };

  let charactersList = itemsList.map((el: ICharacter) => {
    return <CharacterItem key={Math.random().toFixed(10)} item={el} />;
  });

  if (isLoading && characters.length === 0) {
    return <LoadingSpinner color={spinnerColor} />;
  } else {
    return (
      <React.Fragment>
        <div className="table-container-search">
          <SearchBar
            placeholder="find character"
            onChangeText={searchHandler}
            onCancelSearch={cancelSearchHandler}
          />
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
