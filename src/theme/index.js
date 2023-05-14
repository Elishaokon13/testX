import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#02050C', '#fff')(props),
      color: mode('#fff', '#fff')(props)
    },
  }),
};

const colors = {
  brand: {
    100: '#02050C',
    200: '#FFA500',
    300: '#5BB0FF',
    400: '#3AB5FF',
    500: '#2164F3',
    600: '#482E87',
    700: '#1E5BDD',
    800: '#0E2A66',
    900: '#FFFFFF',
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors });
export default theme;
