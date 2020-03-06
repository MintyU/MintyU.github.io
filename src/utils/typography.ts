import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.777,
  headerFontFamily: ['Nanum Gothic'],
  bodyFontFamily: ['Nanum Gothic'],
});

const googleFont = [
  {
    name: 'Nanum Gothic',
    bold: [400, 700],
  },
  {
    name: 'Source Code Pro',
    bold: [400, 700],
  },
  {
    name: 'Noto Sans KR',
    bold: [300, 400, 700],
  },
  { name: 'Raleway' },
]
  .map(v => {
    if (v.bold) {
      return `${v.name.replace(/ /gi, '+')}:${v.bold.toString()}`;
    } else {
      return `${v.name.replace(/ /gi, '+')}`;
    }
  })
  .join('%7C')
  .toString();

export { googleFont, typography as default };
