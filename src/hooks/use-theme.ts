import { useSelector } from 'react-redux';
// interface Styles {
//   [key: string]: string;
// }

const gryffindorStyles = {
  layoutTheme: 'layout-gryffindor',
  spinnerColor: '#D3A625',
};
const hufflepuffStyles = {
  layoutTheme: 'layout-hufflepuff',
  spinnerColor: '#372E29',
};
const ravenclawStyles = {
  layoutTheme: 'layout-ravenclaw',
  spinnerColor: '#D89735',
};
const slytherinStyles = {
  layoutTheme: 'layout-slytherin',
  spinnerColor: '#AAAAAA',
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
