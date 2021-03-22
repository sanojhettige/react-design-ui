import { transparentize } from 'polished';

const colors = {
  primary: {
    one: '#FF2335',
  },
  secondary: {
    one: '#FF2335',
    two: '#A26C3B',
    three: '#5C6DFF',
    four: '#3BA282',
    five: '#F8F5F3',
  },
  white: '#ffffff',
  black: '#000000',
  text: {
    headings: '#010A1E',
    subHeadings: '#00091E',
    paragraph: '#6C6C6C',
  },
  gray: {
    one: '#DDDDDD',
    two: '#899EA3',
    three: '#EAE9E9',
  },
  actions: {
    primary: '#F9574B',
    secondary: '#A26C3B',
    success: '#3BA282',
    error: '#FF2335',
    warning: '#ff0',
    info: '#F9574B',
  },
  blue: {
    light: '#F0F8FC'
  },
  yellow: {
    one: '#FEC60D'
  }
};

const fonts = {
  size: {
    md: 15,
    h3: 25,
  },
};

const modal = {
  containerPadding: '44px 110px 44px 110px',
  bodyDropShadow: `0 4px 44px ${transparentize(0.75, colors.black)}`,
};

const icon = {
  size: {
    xl: 32,
  },
};

export default {
  // global properties
  colors,
  fonts,

  // component specific overrides
  modal,
  icon,
};
