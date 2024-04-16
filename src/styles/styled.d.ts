import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      title: string;
      caption: string;
      label: string;
      input: string;
      cardNumber: string;
      cardExpirationDate: string;
      cardUserName: string;
    };
    color: {
      white: string;
      black: string;
      gray: string;
      red: string;
      lightGray: string;
      darkGray: string;
      magnetic: string;
      dropShadow: string;
    };
  }
}
