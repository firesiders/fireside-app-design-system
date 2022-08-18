interface colorDataProps {
  [index: string]: colorProps;
}

interface colorProps {
  title?: string;
  variation: { [index: string]: colorInfoProps };
}

export interface colorInfoProps {
  hex: string;
  case?: string;
}

export const colorData: colorDataProps = {
  frsdBlue: {
    title: 'Main Color',
    variation: {
      '8': { hex: '#568DE1', case: 'pressed btn' },
      '7': { hex: '#609FFF', case: 'btn, active icon' },
      '6': { hex: '#8EBBFF', case: 'border' },
      '5': { hex: '#CADFFF' },
      '4': { hex: '#E2EEFF' },
      '3': { hex: '#EFF7FF', case: 'selected item' },
      '2': { hex: '#F6FBFF', case: 'background' },
      '1': { hex: '#FCFEFF', case: 'background' },
    },
  },
  frsdViolet: {
    variation: {
      '8': { hex: '#826CFF', case: 'pressed btn' },
      '7': { hex: '#A090FF', case: 'btn, active icon' },
      '6': { hex: '#BBB1FF', case: 'border' },
      '5': { hex: '#E1DCFF', case: 'selected item' },
      '4': { hex: '#EAE7FF', case: 'selected item' },
      '3': { hex: '#F2F0FF', case: 'selected item' },
      '2': { hex: '#F4F3FB', case: 'background' },
      '1': { hex: '#FCFAFF', case: 'background' },
    },
  },
  greyScale: {
    title: 'Grey Scale',
    variation: {
      '10': { hex: '#383852', case: 'prime text' },
      '9': { hex: '#4C4C68', case: 'right side bar' },
      '8': { hex: '#606079' },
      '7': { hex: '#87879F', case: 'icon, secondary text' },
      '6': { hex: '#B7B7CB', case: 'hint text, border' },
      '5': { hex: '#D6D9E6', case: 'table border' },
      '4': { hex: '#EDEFF3', case: 'disabled' },
      '3': { hex: '#F3F5F9', case: 'hover' },
      '2': { hex: '#F9FAFD' },
      '1': { hex: '#FFFFFF' },
      background: { hex: '#E8EDF4' },
    },
  },
  succeed: {
    title: 'Status',
    variation: {
      '3': { hex: '#00D398', case: 'succeed' },
      '2': { hex: '#67F1CA', case: 'succeed' },
      '1': { hex: '#E9FFF9', case: 'succeed' },
    },
  },
  error: {
    variation: {
      '3': { hex: '#FF5A4B', case: 'error' },
      '2': { hex: '#FF7C70', case: 'error' },
      '1': { hex: '#FFEEEC', case: 'error' },
    },
  },
};

export const originColorList = [
  'green',
  'red',
  'yellow',
  'blue',
  'pink',
  'purple',
  'skyBlue',
  'lime',
  'violet',
  'lightGreen',
];

interface originColorDataProps {
  [index: string]: string[];
}

export const originColor: originColorDataProps = {
  green: ['#009C92', 'rgba(0, 156, 146, 0.15)'],
  red: ['#BE3C30', 'rgba(207, 46, 31, 0.15)'],
  yellow: ['#EEA51C', 'rgba(238, 165, 28, 0.15)'],
  blue: ['#085bd8', 'rgba(8, 91, 216, 0.15)'],
  pink: ['#fb5888', 'rgba(251, 88, 136, 0.15)'],
  purple: ['#BD06DB', 'rgba(189, 6, 219, 0.15)'],
  skyBlue: ['#029ADC', 'rgba(2, 154, 220, 0.15)'],
  lime: ['#A2A600', 'rgba(162, 166, 0, 0.15)'],
  violet: ['#6939F3', 'rgba(105, 57, 243, 0.15)'],
  lightGreen: ['#00AE12', 'rgba(0, 174, 18, 0.15)'],
};
