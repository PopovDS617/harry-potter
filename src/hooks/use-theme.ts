import { useSelector } from 'react-redux';

const useTheme = () => {
  let currentTheme: string | null;
  currentTheme = useSelector((state) => state.ui.theme);

  let layoutTheme;
  switch (currentTheme) {
    case '':
      layoutTheme = 'layout-gryffindor';
      break;
    case 'gryffindor':
      layoutTheme = 'layout-gryffindor';
      break;
    case 'hufflepuff':
      layoutTheme = 'layout-hufflepuff';
      break;
    case 'ravenclaw':
      layoutTheme = 'layout-ravenclaw';
      break;
    case 'slytherin':
      layoutTheme = 'layout-slytherin';
      break;
  }

  return layoutTheme;
};

export default useTheme;
