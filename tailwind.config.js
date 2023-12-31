/** @type {import('tailwindcss').Config} */
export const content = [
  './layout/*.liquid',
  './sections/*.liquid',
  './snippets/*.liquid',
  './templates/*.liquid',
  './templates/customers/*.liquid',
];
export const theme = {
  extend: {
    "height": {
      "94": "22rem"
    }
  },
};
export const plugins = [];

