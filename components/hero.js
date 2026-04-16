import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

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
    max-width: 500px;
    line-height: 1.4;
    letter-spacing: -1px;
  `}
`;

const LoopWrapper = styled.div`
  width: fit-content;
  max-width: calc(100vw - 32px);
  padding: 8px;
  display: flex;
  margin: 30px auto 0 auto;
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
  margin: 0;
  padding: 0;
  display: block;
  font-weight: 600;
  padding-bottom: 5px;
  letter-spacing: -0.5px;
`;

const DOMAINS = [
  'your.domain',
  'zbd.gg',
  'zebedee.io',
  'coinos.io',
  'ln.tips',
  'coincorner.io',
  'bitrefill.me',
  'fbtc.me',
  'lnmarkets.com',
  'getalby.com',
  'walletofsatoshi.com',
  'sparkwallet.me',
  'getmash.cash',
  '8333.mobi',
  'starbackr.me',
  'lifpay.me',
  'vipsats.app',
  'lawallet.ar',
  'numeraire.tech',
  'pig.gy',
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const [showIntro, setShowIntro] = useState(false);
  const [showLightningAddr, setShowLightningAddr] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);
  const [domainIndex, setDomainIndex] = useState(0);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(true), 500);
    const addrTimer = setTimeout(() => setShowLightningAddr(true), 1100);
    const ctaTimer = setTimeout(() => setShowCTAs(true), 1700);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(addrTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  useEffect(() => {
    if (!showLightningAddr) return;
    const interval = setInterval(() => {
      setDomainIndex((prev) => (prev + 1) % DOMAINS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [showLightningAddr]);

  return (
    <Wrapper>
      {showIntro && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          <Intro>Introducing</Intro>
          <Title>The Lightning Address</Title>
        </motion.div>
      )}
      {showLightningAddr && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          <Description>
            <Bold>Like an email address, but for your Bitcoin!</Bold> A massively simpler way for anyone to send you Bitcoin instantly on the Lightning Network.
          </Description>
          <LoopWrapper>
            <FixedTextPart>you@</FixedTextPart>
            <AnimatePresence mode="wait">
              <motion.span
                key={domainIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <LoopedTextPart>{DOMAINS[domainIndex]}</LoopedTextPart>
              </motion.span>
            </AnimatePresence>
          </LoopWrapper>
        </motion.div>
      )}
      {showCTAs && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          <CTAWrapper>
            <CTAPrimary href="#providers">Get a Lightning Address</CTAPrimary>
            <CTASecondary href="https://github.com/andrerfneves/lightning-address/blob/master/README.md" target="_blank">Read Documentation</CTASecondary>
          </CTAWrapper>
          <LicenseWrapper>
            <LicenseText>License: MIT</LicenseText>
            <LicenseLink href='https://github.com/andrerfneves/lightning-address/blob/master/LICENSE.md' target='_blank'>GitHub</LicenseLink>
          </LicenseWrapper>
        </motion.div>
      )}
    </Wrapper>
  );
}
