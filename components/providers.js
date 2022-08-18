import styled from 'styled-components';

import { media } from '../utils';

const ProvidersModule = styled.div`
  display: flex;
  background: #fafafa;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 60px 0;
  border-top: 1px solid #eaeaea;

  ${media.tablet`
    min-height: 700px;
    padding: 120px 0 120px 0;
  `}
`;

const ProvidersInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${media.largeTablet`
    max-width: 1000px;
    flex-direction: row;
  `}
`;

const ProvidersLeft = styled.div`
  padding-bottom: 60px;

  ${media.largeTablet`
    flex: 1;
    padding-bottom: 0;
    padding-right: 10px;
  `}
`;

const ProvidersRight = styled.div`
  ${media.largeTablet`
    flex: 1;
  `}
`;

const ProvidersRightInner = styled.div`
  ${media.largeTablet`
    padding-left: 100px;
  `}
`;

const ProvidersTitle = styled.div`
  margin: 0 auto;
  font-size: 30px;
  padding: 0 20px;
  max-width: 500px;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -1px;

  ${media.largeTablet`
    text-align: left;
  `}

  ${media.tablet`
    padding: 0;
  `}
`;

const ProvidersDescription = styled.div`
  color: #666666;
  font-size: 16px;
  padding: 0 30px;
  line-height: 1.4;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
  letter-spacing: -0.5px;
  margin: 20px auto 40px auto;

  ${media.largeTablet`
    text-align: left;
  `}

  ${media.tablet`
    padding: 0;
    font-size: 20px;
    line-height: 1.6;
    letter-spacing: -1px;
    margin: 20px auto 0 auto;
  `}
`;

const ProvidersDescriptionSmall = styled(ProvidersDescription)`
  ${media.tablet`
    font-size: 18px;
  `}
`;

const ProvidersEmailButton = styled.div`
  width: 65%;
  display: flex;
  cursor: pointer;
  background: #fff;
  padding: 0 1.5rem;
  margin: 15px auto 0 auto;
  border-radius: 7px;
  line-height: 2.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);

  &:hover {
    background: rgba(255,255,255,0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }

  ${media.tablet`
    width: 270px;
    margin: 15px 0 0 0;
  `}
`;

const ProvidersEmailButtonImage = styled.img`
  max-width: 60%;
  margin-left: -10px;
`;

const ProvidersEmailButtonText = styled.div`
  flex: 1;
  color: #696969;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  padding-top: 5px;
  padding-left: 10px;

  ${media.tablet`
    padding-top: 0;
    padding-left: 0;
  `}
`;

const ProviderCard = styled.div`
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

const ProviderSignUpButton = styled.a`
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
  opacity: ${({ isDisabled }) => isDisabled ? '0.5' : '1'};

  &:hover {
    background: ${({ isDisabled }) => isDisabled ? '#0070f3' : 'rgba(0,118,255,0.9)'};
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  ${media.tablet`
    min-width: 220px;
    margin: 0 15px 0 0;
  `}
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  ${media.tablet`
    padding-right: 15px;
  `}
`;

const DomainURL = styled.div`
  padding-top: 2px;
  font-size: 10px;
  letter-spacing: 0.5px;
  color: #a5a5a5;
`;

const PROVIDERS = [
  {
    name: 'ZEBEDEE',
    image: '/images/zbd.svg',
    imageStyle: { width: '130px', marginTop: '10px', marginBottom: '3px' },
    lightningAddressDomain: 'zbd.gg',
    url: 'https://zebedee.io/app',
    buttonText: 'Download App',
  },
  {
    name: 'BTCPay Server',
    image: '/images/btcpay.svg',
    imageStyle: { width: '95px' },
    lightningAddressDomain: 'yourbtcpay.server',
    url: 'https://btcpayserver.org/',
  },
  {
    name: 'Bitrefill',
    image: '/images/bitrefill.svg',
    imageStyle: { width: '125px' },
    lightningAddressDomain: 'bitrefill.me',
    url: 'https://bitrefill.com/',
  },
  {
    name: 'LNTXBot',
    image: '/images/lntxbot.png',
    imageStyle: { width: '130px', marginBottom: '-5px' },
    lightningAddressDomain: 'lntxbot.com',
    url: 'https://lntxbot.com/',
    buttonText: 'Open Telegram',
  },
  {
    name: 'LNMarkets',
    image: '/images/lnmarkets.png',
    imageStyle: { width: '125px' },
    lightningAddressDomain: 'lnmarkets.com',
    url: 'https://lnmarkets.com/',
    buttonText: 'Open LN Markets',
  },
  {
    name: 'Coincorner',
    image: '/images/coincorner.svg',
    imageStyle: { width: '130px' },
    lightningAddressDomain: 'coincorner.io',
    url: 'https://coincorner.com/',
  },
  {
    name: 'Bipa',
    image: '/images/bipa.png',
    imageStyle: { width: '45px' },
    lightningAddressDomain: 'bipa.app',
    url: 'https://bipa.app',
    buttonText: 'Download Wallet',
  },
  {
    name: 'FastBitcoins',
    image: '/images/fastbitcoins.png',
    imageStyle: { width: '125px' },
    lightningAddressDomain: 'fbtc.me',
    url: 'https://fastbitcoins.com/',
  },
  {
    name: 'Spark Wallet',
    image: '/images/sparkwallet.svg',
    imageStyle: { width: '125px' },
    lightningAddressDomain: 'sparkwallet.me',
    url: 'https://sparkwallet.io/',
  },
  {
    name: 'coinos',
    image: '/images/coinos.png',
    imageStyle: { width: '130px', marginBottom: '-8px' },
    lightningAddressDomain: 'coinos.io',
    url: 'https://coinos.io',
    buttonText: 'Open Coinos',
  },
  {
    name: '@LightningTipBot',
    image: '/images/lightningtipbot.svg',
    imageStyle: { width: '115px' },
    lightningAddressDomain: 'ln.tips',
    url: 'https://t.me/LightningTipBot',
    buttonText: 'Open Telegram',
  },
  {
    name: '@Bitcoinbeach',
    image: '/images/bitcoinbeach.png',
    imageStyle: { width: '45px' },
    lightningAddressDomain: 'ln.bitcoinbeach.com',
    url: 'https://galoy.io/bitcoin-beach-wallet/',
    buttonText: 'Download Wallet',
  },
  {
    name: 'Alby',
    image: '/images/alby.png',
    imageStyle: { width: '44px', paddingBottom: '2px', borderRadius: '5%' },
    lightningAddressDomain: 'getalby.com',
    url: 'https://getalby.com',
  },
  {
    name: 'Wallet of Satoshi',
    image: '/images/wos.svg',
    imageStyle: { width: '105px', paddingBottom: '3px' },
    lightningAddressDomain: 'walletofsatoshi.com',
    url: 'https://walletofsatoshi.com',
    buttonText: 'Download Wallet',
  },
  {
    name: 'Noah',
    image: '/images/noah.png',
    imageStyle: { width: '115px' },
    lightningAddressDomain: 'noah.com',
    url: 'https://noah.com',
    buttonText: 'Coming Soon',
    comingSoon: true,
  },
  {
    name: 'Bitnob',
    image: '/images/bitnob2.png',
    imageStyle: { width: '115px' },
    lightningAddressDomain: 'bitnob.io',
    url: 'https://bitnob.com',
    buttonText: 'Download Wallet',
  },
  {
    name: 'Bottlepay',
    image: '/images/bottlepay.png',
    imageStyle: { width: '125px' },
    lightningAddressDomain: 'bottlepay.me',
    url: 'https://bottlepay.com',
    buttonText: 'Coming Soon',
    comingSoon: true,
  },
  {
    name: 'Mash',
    image: '/images/mash.svg',
    imageStyle: { width: '125px', marginBottom: '5px' },
    lightningAddressDomain: 'getmash.cash',
    url: 'https://getmash.com',
  },
];

export const Providers = () => (
  <ProvidersModule id="providers">
    <ProvidersInner>
      <ProvidersLeft>
        <ProvidersTitle>Get a Lightning Address now!</ProvidersTitle>
        <ProvidersDescription>
          Get your own Lightning Address now by using one of the apps and services that already support it. You’ll be set up in seconds!
        </ProvidersDescription>
        {PROVIDERS.map(provider => (
          <ProviderCard key={provider.name}>
            <ImageWrapper>
              <img src={provider.image} alt={provider.name} style={provider.imageStyle || {}} />
              <DomainURL>you@{provider.lightningAddressDomain}</DomainURL>
            </ImageWrapper>
            <ProviderSignUpButton
              isDisabled={provider.comingSoon || false}
              target="_blank"
              href={provider.url}
            >
              {provider.buttonText || `Open ${provider.name}`}
            </ProviderSignUpButton>
          </ProviderCard>
        ))}
      </ProvidersLeft>
      <ProvidersRight>
        <ProvidersRightInner>
          <ProvidersTitle>Your app doesn't support Lightning Addresses yet?</ProvidersTitle>
          <ProvidersDescriptionSmall>
            If your favorite Bitcoin app doesn't support Lightning Addresses yet, get in touch with the developer company and ask them to learn about how the protocol can help their users.
            <br />
            <br />
            To make things easier, we created an email template you can send with just a click.
          </ProvidersDescriptionSmall>
          <ProvidersEmailButton onClick={() => window.open(`mailto:DEVELOPER_EMAIL_HERE?subject=Have you considered support for Lightning Address?&body=Hi there, I just learned about the Lightning Address protocol and how awesome it is for sending and receiving payments over the Bitcoin Lightning Network. I was hoping you would take a look at the lightningaddress.com website and possibly implement support for it? \n\n Lightning Addresses provide a familiar user experience with sending Lightning payments to other people online, similar to sending an email. No more QR codes or invoices / addresses. "Just pay me at satoshi@website.com"\n\n Cheers!`)}>
            <ProvidersEmailButtonImage src={'/images/email.svg'} alt='Email' />
            <ProvidersEmailButtonText>Send Email</ProvidersEmailButtonText>
          </ProvidersEmailButton>
        </ProvidersRightInner>
      </ProvidersRight>
    </ProvidersInner>
  </ProvidersModule>
);
