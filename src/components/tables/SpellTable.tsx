import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSpells } from '../../store/spells/spellsSlice';
import { AppDispatch, RootState } from '../../store/store';
import SpellItem from './SpellItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';
import SearchBar from '../input/SearchBar';
import { Spell } from '../../models/data-models';
import { tableSearch } from '../../utils/table-search';
import NothingFound from './NothingFound';
import ErrorMessage from './ErrorMessage';

const SpellTable = () => {
  const dispatch: AppDispatch = useDispatch();
  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();

  useEffect(() => {
    dispatch(getSpells());
  }, [dispatch]);

  const { spells, isLoading, isError } = useSelector(
    (state: RootState) => state.spell
  );

  useEffect(() => {
    if (spells.length) {
      const allSpellsList = spells.map((el: Spell) => {
        return <SpellItem key={Math.random().toFixed(10)} item={el} />;
      });
      setSpellList(allSpellsList);
    }
  }, [spells]);

  const [spellList, setSpellList] = useState<React.ReactNode[] | null>([]);

  const [searchText, setSearchText] = useState('');

  const searchHandler = (text: string) => {
    setSearchText(text);
    if (searchText.length < 2) {
      const allSpellsList = spells.map((el: Spell) => {
        return <SpellItem key={Math.random().toFixed(10)} item={el} />;
      });
      setSpellList(allSpellsList);
    }
    setSearchText(text);
    if (searchText.length >= 2) {
      const spellsKeys = ['incantation', 'name', 'effct', 'type'];
      let filteredItems = tableSearch(searchText, spells, spellsKeys);
      if (filteredItems.length) {
        const filtered = filteredItems.map((el: Spell) => {
          return <SpellItem key={Math.random().toFixed(10)} item={el} />;
        });
        setSpellList(filtered);
      } else setSpellList([]);
    }
  };
  const cancelSearchHandler = () => {
    const allSpellsList = spells.map((el: Spell) => {
      return <SpellItem key={Math.random().toFixed(10)} item={el} />;
    });
    setSpellList(allSpellsList);
  };

  if (isLoading) {
    return <LoadingSpinner color={spinnerColor} />;
  } else {
    return (
      <React.Fragment>
        <div className="table-container-search">
          <SearchBar
            placeholder="find spell"
            onChangeText={searchHandler}
            onCancelSearch={cancelSearchHandler}
          />
        </div>
        <div className="table-container">
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
            <tbody>
              {isError && <ErrorMessage />}
              {!isError && !spellList ? <NothingFound /> : spellList}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
};
export default SpellTable;
