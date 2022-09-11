import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPotions } from '../../store/potions/potionsSlice';
import { AppDispatch, RootState } from '../../store/store';
import PotionItem from '../../components/tables/PotionItem';
import LoadingSpinner from '../../ui/LoadingSpinner';
import useTheme from '../../hooks/use-theme';
import SearchBar from '../input/SearchBar';

function PotionTable() {
  const dispatch: AppDispatch = useDispatch();
  const { spinnerColor, tHeadTheme, tableTheme } = useTheme();
  const { potions, isLoading } = useSelector(
    (state: RootState) => state.potion
  );

  useEffect(() => {
    dispatch(getPotions());
  }, []);
  const potionsList = potions.map((el) => {
    return <PotionItem key={Math.random().toFixed(10)} item={el} />;
  });
  console.log(potionsList);

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
