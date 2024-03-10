export const layoutArgTypes = [
  'margin',
  'marginX',
  'marginY',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'padding',
  'paddingX',
  'paddingY',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'aspectRatio',
].reduce((acc, prop) => {
  return {
    ...acc,
    [prop]: {
      table: {
        category: 'Layout Props',
      },
    },
  }
}, {})
