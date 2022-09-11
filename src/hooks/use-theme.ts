import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IStyle } from '../models/ui-models';

const gryffindorStyles = {
  layoutTheme: 'layout-gryffindor',
  spinnerColor: '#D3A625',
  tHeadTheme: 'thead-gryffindor',
  tableTheme: 'table-gryffindor',
  cardImageSrc: '/images/gry_char.jpg',
  cardTheme: 'card-gryffindor',
  linkTheme: 'link-gryffindor',
  inputTheme: 'input-gryffindor',
};
const hufflepuffStyles = {
  layoutTheme: 'layout-hufflepuff',
  spinnerColor: '#372E29',
  tHeadTheme: 'thead-hufflepuff',
  tableTheme: 'table-hufflepuff',
  cardImageSrc: '/images/huf_char.jpg',
  cardTheme: 'card-hufflepuff',
  linkTheme: 'link-hufflepuff',
  inputTheme: 'input-hufflepuff',
};
const ravenclawStyles = {
  layoutTheme: 'layout-ravenclaw',
  spinnerColor: '#D89735',
  tHeadTheme: 'thead-ravenclaw',
  tableTheme: 'table-ravenclaw',
  cardImageSrc: '/images/rav_char.jpg',
  cardTheme: 'card-ravenclaw',
  linkTheme: 'link-ravenclaw',
  inputTheme: 'input-ravenclaw',
};
const slytherinStyles = {
  layoutTheme: 'layout-slytherin',
  spinnerColor: '#AAAAAA',
  tHeadTheme: 'thead-slytherin',
  tableTheme: 'table-slytherin',
  cardImageSrc: '/images/sly_char.jpg',
  cardTheme: 'card-slytherin',
  linkTheme: 'link-slytherin',
  inputTheme: 'input-slytherin',
};

const useTheme = () => {
  let currentTheme: string | null;
  currentTheme = useSelector((state: RootState) => state.ui.theme);
  let themeStyles: IStyle = gryffindorStyles;

  switch (currentTheme) {
    // case '':
    //   themeStyles = gryffindorStyles;
    //   break;
    case 'gryffindor':
      themeStyles = gryffindorStyles;
      break;
    case 'hufflepuff':
      themeStyles = hufflepuffStyles;
      break;
    case 'ravenclaw':
      themeStyles = ravenclawStyles;
      break;
    case 'slytherin':
      themeStyles = slytherinStyles;
      break;
  }

  return themeStyles;
};

export default useTheme;
