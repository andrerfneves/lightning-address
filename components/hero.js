import TextLoop from 'react-text-loop';
import styled from 'styled-components';
import { PureComponent } from 'react';
import Fade from 'react-reveal/Fade';

import { URL_INTERNET_IDENTIFIER  } from '../constants';
import { media } from '../utils';

const Wrapper = styled.div`
  display: flex;
  padding: 30px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 8px solid ${({ theme }) => theme.colors.primary};

  ${media.tablet`
    padding: 0;
    min-height: 800px;
    height: calc(100vh - 16px);
  `}
`;

const Title = styled.h1`
  margin: 0 auto;
  font-size: 40px;
  max-width: 900px;
  font-weight: 800;
  text-align: center;
  letter-spacing: -1px;

  ${media.tablet`
    padding: 0 20px;
    font-size: 84px;
    max-width: 900px;
    font-weight: 800;
    letter-spacing: -4px;
  `}
`;

const Intro = styled.p`
  color: #0070f3;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  margin: 0 auto 20px auto;
  background: rgba(0,118,255,0.1);

  ${media.tablet`
    font-size: 18px;
    max-width: 900px;
    line-height: 1.6;
  `}
`;

const Description = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  padding: 0 30px;
  text-align: center;
  letter-spacing: -0.5px;
  margin: 20px auto 0 auto;

  ${media.tablet`
    padding: 0;
    font-size: 20px;
    padding: 0 30px;
    max-width: 800px;
    line-height: 1.6;
    letter-spacing: -1px;
  `}
`;

const LoopWrapper = styled.div`
  width: 200px;
  padding: 8px;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FixedTextPart = styled.span`
  font-size: 25px;

  ${media.tablet`
    font-size: 40px;
  `}
`;

const LoopedTextPart = styled.span`
  font-size: 25px;
  font-weight: 700;

  ${media.tablet`
    font-size: 40px;
  `}
`;

const Link = styled.a`
  color: #666666;
  font-weight: 400;
  text-decoration: none;
  letter-spacing: -0.5px;

  &:hover {
    color: #0070f3;
    border-color: transparent;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px auto 20px auto;

  ${media.tablet`
    flex-direction: row;
  `}
`;

const CTAPrimary = styled.a`
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

const CTASecondary = styled.a`
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

const LicenseWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LicenseText = styled.div`
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.4px;
`;

const LicenseLink = styled.a`
  padding: 8px;
  color: #0070f3;
  margin-left: 4px;
  font-weight: 400;
  border-radius: 7px;
  text-decoration: none;

  &:hover {
    color: #0070f3;
    background: rgba(0,118,255,0.1);
  }
`;

const Bold = styled.span`
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export class Hero extends PureComponent {
  state = {
    showCTAs: false,
    showIntro: false,
    showLightningAddr: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ showIntro: true }));
    }, 500);

    setTimeout(() => {
      this.setState(() => ({ showLightningAddr: true }));
    }, 1100);

    setTimeout(() => {
      this.setState(() => ({ showCTAs: true }));
    }, 1700);
  }

  render() {
    const { showIntro, showLightningAddr, showCTAs } = this.state;

    return (
      <Wrapper>
        <Fade bottom cascade when={showIntro}>
          <Intro>Introducing</Intro>
          <Title>The Lightning Address</Title>
        </Fade>
        <Fade bottom when={showLightningAddr}>
          <Description>
            <Bold>Like an email address, but for your money!</Bold> An <Link href={URL_INTERNET_IDENTIFIER}>Internet Identifier</Link> that lets anyone send you Bitcoin instantly over the Lightning Network. No scanning QR codes or pasting invoices.
          </Description>
          <LoopWrapper>
            <FixedTextPart>you@</FixedTextPart>
            <TextLoop interval={2000} delay={1600}>
              <LoopedTextPart>zbd.gg</LoopedTextPart>
              <LoopedTextPart>lntxbot.com</LoopedTextPart>
              <LoopedTextPart>your.domain</LoopedTextPart>
              <LoopedTextPart>zebedee.io</LoopedTextPart>
              <LoopedTextPart>lnbits.com</LoopedTextPart>
              <LoopedTextPart>coinos.io</LoopedTextPart>
            </TextLoop>
          </LoopWrapper>
        </Fade>
        <Fade bottom when={showCTAs}>
          <CTAWrapper>
            <CTAPrimary href="#providers">Get My Lightning Address</CTAPrimary>
            <CTASecondary href="https://github.com/andrerfneves/lightning-address/blob/master/README.md" target="_blank">Read Documentation</CTASecondary>
          </CTAWrapper>
          <LicenseWrapper>
            <LicenseText>License: MIT</LicenseText>
            <LicenseLink href='https://github.com/andrerfneves/lightning-address/blob/master/LICENSE.md' target='_blank'>GitHub</LicenseLink>
          </LicenseWrapper>
        </Fade>
      </Wrapper>
    )
  }
}
