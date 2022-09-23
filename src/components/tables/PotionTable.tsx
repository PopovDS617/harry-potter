import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPotions } from '../../store/potions/potionsSlice';
import { AppDispatch, RootState } from '../../store/store';
import PotionItem from '../../components/tables/PotionItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';
import SearchBar from '../input/SearchBar';
import { tableSearch } from '../../utils/table-search';

function PotionTable() {
  const dispatch: AppDispatch = useDispatch();

  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();
  const { potions, isLoading } = useSelector(
    (state: RootState) => state.potion
  );

  const [itemsList, setItemsList] = useState(potions);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getPotions());
  }, [dispatch]);

  useEffect(() => {
    setItemsList(potions);
  }, [potions]);

  const searchHandler = (text: string) => {
    setSearchText(text);
    if (searchText.length >= 2) {
      const potionsKeys = ['name', 'effect', 'difficulty'];
      const filteredItems = tableSearch(searchText, potions, potionsKeys);

      setItemsList(filteredItems);
    }
  };
  const cancelSearchHandler = () => {
    setItemsList(potions);
  };

  const potionsList = itemsList?.map((el) => {
    return <PotionItem key={Math.random().toFixed(10)} item={el} />;
  });

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
            <tbody>{potionsList}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default PotionTable;
