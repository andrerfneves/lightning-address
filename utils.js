import styled, { css } from 'styled-components';

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

export const CTAPrimary = styled.a`
  color: #fff;
  height: 2.81rem;
  cursor: pointer;
  padding: 0;
  width: 260px;
  text-align: center;
  margin: 0 0 10px 0;
  border-radius: 7px;
  line-height: 2.8rem;
  text-decoration: none;
  background-color: #0070f3;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);

  &:hover {
    background: rgba(0,118,255,0.9);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  ${media.tablet`
    margin: 0 15px 0 0;
  `}
`;

export const CTASecondary = styled.a`
  color: #696969;
  cursor: pointer;
  height: 2.81rem;
  background: #fff;
  width: 260px;
  text-align: center;
  padding: 0;
  margin: 10px 0 0 0;
  text-decoration: none;
  line-height: 2.8rem;
  border-radius: 7px;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);

  &:hover {
    background: rgba(255,255,255,0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }

  ${media.tablet`
    margin: 0 0 0 15px;
  `}
`;

export const SectionIntro = styled.p`
  color: #f38800;
  font-size: 14px;
  line-height: 1.6;
  max-width: 900px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  margin: 0 auto 20px auto;
  background: rgba(255, 97, 0, 0.1);

  ${media.tablet`
    font-size: 18px;
  `}
`;
