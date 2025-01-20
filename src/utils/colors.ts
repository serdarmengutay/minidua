import {Platform} from 'react-native';

export type ThemeType = {
  dark: boolean;
  colors: Theme;
  fonts: any;
};

export type Theme = {
  primary: string;
  background: string;
  text: string;
  border: string;
  notification: string;
  card: string;
  subText: string;
};

export const LightTheme: ThemeType = {
  dark: false,
  colors: {
    primary: '#000',
    background: '#0E1F1F',
    text: '#000',
    border: '#000',
    notification: '#000',
    card: '#1E4445',
    subText: '#C9C9C9',
  },
  fonts: Platform.select({
    web: {
      regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
      },
    },
    ios: {
      regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
      },
    },
    default: {
      regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
      },
    },
  }),
};

export const DarkTheme: ThemeType = {
  dark: true,
  colors: {
    primary: '#fff',
    background: '#0E1F1F',
    text: '#fff',
    border: '#fff',
    notification: '#fff',
    card: '#1E4445',
    subText: '#C9C9C9',
  },
  fonts: Platform.select({
    web: {
      regular: {
        fontFamily: 'Poppins-',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Poppins-',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'Poppins-',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'Poppins-',
        fontWeight: '700',
      },
    },
    ios: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '700',
      },
    },
    default: {
      regular: {
        fontFamily: 'Poppins-',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Poppins--medium',
        fontWeight: 'normal',
      },
      bold: {
        fontFamily: 'Poppins-',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'Poppins-',
        fontWeight: '700',
      },
    },
  }),
};
