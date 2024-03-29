import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPotions } from '../../store/potions/potionsSlice';
import { AppDispatch, RootState } from '../../store/store';
import PotionItem from '../../components/tables/PotionItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';
import SearchBar from '../input/SearchBar';
import { tableSearch } from '../../utils/table-search';
import { Potion } from '../../models/data-models';
import NothingFound from './NothingFound';
import ErrorMessage from './ErrorMessage';

function PotionTable() {
  const dispatch: AppDispatch = useDispatch();
  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();

  useEffect(() => {
    dispatch(getPotions());
  }, [dispatch]);

  const { potions, isLoading, isError } = useSelector(
    (state: RootState) => state.potion
  );

  useEffect(() => {
    if (potions.length) {
      const allPotionsList = potions.map((el: Potion) => {
        return <PotionItem key={Math.random().toFixed(10)} item={el} />;
      });
      setPotionList(allPotionsList);
    }
  }, [potions]);

  const [potionList, setPotionList] = useState<React.ReactNode[] | null>([]);

  const [searchText, setSearchText] = useState('');

  const searchHandler = (text: string) => {
    setSearchText(text);
    if (searchText.length < 2) {
      const allPotionsList = potions.map((el: Potion) => {
        return <PotionItem key={Math.random().toFixed(10)} item={el} />;
      });
      setPotionList(allPotionsList);
    }
    setSearchText(text);
    if (searchText.length >= 2) {
      const potionKeys = ['effect', 'name', 'difficulty'];
      let filteredItems = tableSearch(searchText, potions, potionKeys);
      if (filteredItems.length > 0) {
        const filtered = filteredItems.map((el: Potion) => {
          return <PotionItem key={Math.random().toFixed(10)} item={el} />;
        });
        setPotionList(filtered);
      } else setPotionList([]);
    }
  };
  const cancelSearchHandler = () => {
    const allPotionsList = potions.map((el: Potion) => {
      return <PotionItem key={Math.random().toFixed(10)} item={el} />;
    });
    setPotionList(allPotionsList);
  };

  if (isLoading) {
    return <LoadingSpinner color={spinnerColor} />;
  } else {
    return (
      <React.Fragment>
        <div className="table-container-search">
          <SearchBar
            placeholder="find potion"
            onChangeText={searchHandler}
            onCancelSearch={cancelSearchHandler}
          />
        </div>
        <div className="table-container">
          <table className={tableTheme}>
            <thead className={tHeadTheme}>
              <tr>
                <th>Name</th>
                <th>Effect</th>

                <th>Characteristics </th>
                <th>Difficulty </th>
                <th>Ingredients </th>
              </tr>
            </thead>
            <tbody>
              {isError && <ErrorMessage />}
              {!isError && !potionList ? <NothingFound /> : potionList}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default PotionTable;
