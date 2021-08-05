import { css } from 'styled-components';

// Media Queries
// Leverage the `media` function inside the theme
// to target specific screen sizes.

export const sizes = {
  mobile: 320,
  tablet: 768,
  largeTablet: 920,
  desktop: 1024,
  largeDesktop: 1280,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
