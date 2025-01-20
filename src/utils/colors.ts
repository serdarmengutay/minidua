export type ThemeType = {
  dark: boolean;
  colors: Theme;
};

export type Theme = {
  primary: string;
  background: string;
  text: string;
  border: string;
  notification: string;
};

export const LightTheme: ThemeType = {
  dark: false,
  colors: {
    primary: '#000',
    background: '#fff',
    text: '#000',
    border: '#000',
    notification: '#000',
  },
};

export const DarkTheme: ThemeType = {
  dark: true,
  colors: {
    primary: '#fff',
    background: '#000',
    text: '#fff',
    border: '#fff',
    notification: '#fff',
  },
};
