export const removePlus = (s: string) => s.replace(/^\+/, '');

export const addPlus = (s: string) => `+${s}`;

export const removeFirstZeros = (value: string) => value.replace(/^(-)?0+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber = (value: object, separator = ' ') =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2) => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

export const getTransformFromCss = (transformCssString: string) => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

export const getColorContrastValue = (rgb: RGB) =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((rgb.red * 299 + rgb.green * 587 + rgb.blue * 114) / 1000);

interface RGB {
  red: number;
  green: number;
  blue: number;
}

export const getContrastType = (contrastValue: number) => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[\da-f]{3}$/i;
export const longColorRegExp = /^#[\da-f]{6}$/i;

export const checkColor = (color: string) => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string) => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export const getNumberedArray = (arr: number[]) => arr.map((value, number) => ({ value, number }));
export const toStringArray = (arr: Foo[]) => arr.map(({ value, number }) => `${value}_${number}`);

interface Foo {
  value: object;
  number: number;
}

export const transformCustomers = (customers: Customer[]) => {
  return customers.reduce((acc, customer) => {
    acc = { ...acc, [customer.id]: { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed } };
    return acc;
  }, {});
};

interface Customer {
  id: number;
  name: string;
  age: number;
  isSubscribed: boolean;
}
