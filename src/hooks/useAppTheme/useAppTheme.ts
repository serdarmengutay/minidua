import {useTheme} from '@react-navigation/native';
import {Theme} from '../../utils/colors';

export const useAppTheme = (useStyle?: any) => {
  const {colors} = useTheme();

  const styles = useStyle && useStyle(colors);

  const theme: {colors: Theme; styles: any} = {colors, styles};
  return theme;
};
