import styled from "styled-components";
import { media } from "../utils";

export const Card = styled.div`
  margin: 20px auto 20px auto;
  display: flex;
  padding: 16px;
  min-height: 100px;
  border-radius: 6px;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  box-shadow: 0px 30px 60px rgb(0 0 0 / 12%);

  ${media.tablet`
    width: 425px;
    height: 42px;
    margin: 20px 0;
    min-height: auto;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const SignUpButton = styled.a`
  color: #fff;
  width: 140px;
  height: 2.81rem;
  cursor: pointer;
  min-width: 220px;
  padding: 0 0.5rem;
  text-align: center;
  border-radius: 7px;
  margin: 15px 0 0 0;
  line-height: 2.8rem;
  text-decoration: none;
  background-color: #0070f3;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};

  &:hover {
    background: ${({ isDisabled }) =>
      isDisabled ? "#0070f3" : "rgba(0,118,255,0.9)"};
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  ${media.tablet`
    min-width: 220px;
    margin: 0 15px 0 0;
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  ${media.tablet`
    padding-right: 15px;
  `}
`;

export const LeftColumn = styled.div`
  padding-bottom: 60px;

  ${media.largeTablet`
    flex: 1;
    padding-bottom: 0;
    padding-right: 10px;
  `}
`;

export const RightColumn = styled.div`
  ${media.largeTablet`
    flex: 1;
  `}
`;

export const RightColumnInner = styled.div`
  ${media.largeTablet`
    padding-left: 100px;
  `}
`;
