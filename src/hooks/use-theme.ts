import { useSelector } from 'react-redux';
// interface Styles {
//   [key: string]: string;
// }

const gryffindorStyles = {
  layoutTheme: 'layout-gryffindor',
  spinnerColor: '#D3A625',
  tHeadTheme: 'thead-gryffindor',
  tableTheme: 'table-gryffindor',
  cardImageSrc: '/images/gry_char.jpg',
  cardTheme: 'card-gryffindor',
};
const hufflepuffStyles = {
  layoutTheme: 'layout-hufflepuff',
  spinnerColor: '#372E29',
  tHeadTheme: 'thead-hufflepuff',
  tableTheme: 'table-hufflepuff',
  cardImageSrc: '/images/huf_char.jpg',
  cardTheme: 'card-hufflepuff',
};
const ravenclawStyles = {
  layoutTheme: 'layout-ravenclaw',
  spinnerColor: '#D89735',
  tHeadTheme: 'thead-ravenclaw',
  tableTheme: 'table-ravenclaw',
  cardImageSrc: '/images/rav_char.jpg',
  cardTheme: 'card-ravenclaw',
};
const slytherinStyles = {
  layoutTheme: 'layout-slytherin',
  spinnerColor: '#AAAAAA',
  tHeadTheme: 'thead-slytherin',
  tableTheme: 'table-slytherin',
  cardImageSrc: '/images/sly_char.jpg',
  cardTheme: 'card-slytherin',
};

const useTheme = () => {
  let currentTheme: string | null;
  currentTheme = useSelector((state) => state.ui.theme);
  let themeStyles;

  switch (currentTheme) {
    case '':
      themeStyles = gryffindorStyles;
      break;
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
