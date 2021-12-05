import styled from 'styled-components';

import { media } from '../utils';

const CommunityModule = styled.div`
  display: flex;
  background: #fff;
  align-items: center;
  flex-direction: column;
  padding: 60px 0 60px 0;
  justify-content: center;
  border-top: 1px solid #eaeaea;

  ${media.tablet`
    min-height: 700px;
    padding: 120px 0 120px 0;
  `}
`;

const CommunityTitle = styled.div`
  margin: 0 auto;
  font-size: 30px;
  padding: 0 30px;
  max-width: 500px;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.5px;

  ${media.tablet`
    padding: 0;
    font-size: 44px;
    letter-spacing: -1px;
  `}
`;

const CommunityDescription = styled.div`
  color: #666666;
  font-size: 16px;
  line-height: 1.4;
  padding: 0 30px;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
  letter-spacing: -1px;
  margin: 20px auto 0 auto;

  ${media.tablet`
    padding: 0;
    font-size: 20px;
    line-height: 1.6;
  `}
`;

const CommunityIntro = styled.p`
  color: #f38800;
  font-size: 14px;
  line-height: 1.6;
  max-width: 900px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  margin: 0 auto 20px auto;
  background: rgba(255,97,0,0.1);

  ${media.tablet`
    font-size: 18px;
  `}
`;

const CommunityInner = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${media.largeTablet`
    margin-top: 80px;
    max-width: 1000px;
    flex-direction: row;
  `}
`;

const CommunityLeft = styled.div`
  padding-bottom: 60px;

  ${media.largeTablet`
    flex: 1;
    padding-bottom: 0;
    padding-right: 10px;
  `}
`;

const CommunityRight = styled.div`
  ${media.largeTablet`
    flex: 1;
  `}
`;

const CommunityRightInner = styled.div`
  ${media.largeTablet`
    padding-left: 100px;
  `}
`;

const CommunityCard = styled.div`
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

const CommunitySignUpButton = styled.a`
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

const Image = styled.img`
  width: 130px;
  align-self: center;
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

const CommunityListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  ${media.tablet`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
  `}
`;

const CommunitySectionTitle = styled.div`
  margin: 0 auto;
  font-size: 20px;
  padding: 0 30px;
  max-width: 500px;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;

  ${media.tablet`
    padding: 0;
    text-align: left;
    font-size: 24px;
    letter-spacing: -0.5px;
  `}
`;

const Link = styled.a`
  color: #0070f3;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  text-decoration: none;
  margin: 10px 10px 0 0;
  background: rgba(0,118,255,0.1);

  ${media.tablet`
    font-size: 14px;
    max-width: 900px;
    line-height: 1.6;
  `}

  &:hover {
    background: rgba(0,118,255,0.2);
  }
`;

const VerticalLink = styled.a`
  color: #0070f3;
  display: block;
  font-size: 14px;
  line-height: 1.6;
  max-height: 22px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  text-decoration: none;
  margin: 10px 10px 0 0;
  background: rgba(0,118,255,0.1);

  ${media.tablet`
    font-size: 14px;
    line-height: 1.6;
  `}

  &:hover {
    background: rgba(0,118,255,0.2);
  }
`;

const CommunityDescriptionSmall = styled(CommunityDescription)`
  text-align: center;

  ${media.tablet`
    text-align: left;
    font-size: 18px;
  `}
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px auto 20px auto;

  ${media.tablet`
    margin: 40px auto 20px -40px;
  `}
`;

const CTASecondary = styled.a`
  color: #696969;
  cursor: pointer;
  height: 2.81rem;
  background: #fff;
  width: 280px;
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

const CommunityVerticalListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VerticalLinkWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  padding-top: 10px;
  align-items: center;
  flex-direction: column;

  ${media.tablet`
    padding: 0;
    flex-direction: row;
    align-items: flex-start;
  `}
`;

const VerticalLinkDescription = styled(CommunityDescriptionSmall)`
  margin-top: 0;
  font-size: 12px;
  line-height: 1.4;
  padding-top: 10px;
  letter-spacing: 0;
  padding-left: 10px;

  ${media.tablet`
    font-size: 14px;
  `}
`;

const SATDRESS_SERVERS = [
  {
    urlLink: 'https://payaddress.co',
    urlText: '@payaddress.co',
  },
  {
    urlLink: 'https://btcadresse.de',
    urlText: '@btcadresse.de',
  },
  {
    urlLink: 'https://ln.fitti.io/',
    urlText: '@ln.fitti.io',
  },
  {
    urlLink: 'https://bitmia.com',
    urlText: '@bitmia.com',
  },
  {
    urlLink: 'https://paymentlink.xyz',
    urlText: '@paymentlink.xyz',
  },
  {
    urlLink: 'https://tinytip.me',
    urlText: '@tinytip.me',
  },

];

const BRIDGE_SERVERS = [
  {
    urlLink: 'https://github.com/fiatjaf/satdress/',
    urlText: 'Satdress',
    description: 'Federated Lightning Address server anyone can self-host to receive Lightning payments at you@yourdomain.com noncustodially.',
  },
  {
    urlLink: 'https://bridgeaddr.fiatjaf.com/',
    urlText: 'BridgeAddr',
    description: 'Bridge Server that allows setting domain DNS configuration and receive payments at you@yourdomain.com noncustodially.',
  },
  {
    urlLink: 'https://github.com/Dolu89/ligess/',
    urlText: 'Ligess',
    description: 'Personal Lightning Address server to self-host payments to you@yourdomain.com.',
  },
  {
    urlLink: 'https://github.com/bumi/lnme',
    urlText: 'LnMe',
    description: 'Self-hosted Lightning Address server and personal payment page.',
  },
];

const WALLETS = [
  {
    name: 'ZEBEDEE',
    image: '/images/zbd.svg',
    downloadText: 'Download Wallet',
    url: 'https://zebedee.io/wallet',
  },
  {
    name: 'Breez',
    image: '/images/breez.png',
    downloadText: 'Download Wallet',
    url: 'https://breez.technology',
    imageStyle: {
      width: '95px',
    }
  },
  {
    name: 'SBW',
    image: '/images/sbw.png',
    downloadText: 'Download Wallet',
    url: 'https://lightning-wallet.com',
  },
  {
    name: 'Wallet of Satoshi',
    image: '/images/wos.svg',
    downloadText: 'Download Wallet',
    url: 'https://walletofsatoshi.com',
    imageStyle: {
      width: '115px',
    }
  },
  {
    name: 'Blixt',
    image: '/images/blixt.png',
    downloadText: 'Download Wallet',
    url: 'https://blixtwallet.github.io/',
  },
  {
    name: 'BlueWallet',
    image: '/images/bluewallet.svg',
    downloadText: 'Download Wallet',
    url: 'https://bluewallet.io',
    imageStyle: {
      width: '88px',
      marginTop: '3px',
    }
  },
  {
    name: 'Phoenix',
    image: '/images/phoenix.png',
    downloadText: 'Download Wallet',
    url: 'https://phoenix.acinq.co/',
  },
  {
    name: 'LNTXBot',
    image: '/images/lntxbot.png',
    downloadText: 'Open LNTXBot',
    url: 'https://t.me/lntxbot/',
  },
  {
    name: 'LNBits',
    image: '/images/lnbits.png',
    downloadText: 'Open LNBits',
    url: 'https://lnbits.com/',
  },
  {
    name: '@LightningTipBot',
    image: '/images/lightningtipbot.svg',
    downloadText: 'Open @LightningTipBot',
    url: 'https://t.me/LightningTipBot',
  },
];

export const Community = () => (
  <CommunityModule id="community">
    <CommunityIntro>Community Efforts & Tools</CommunityIntro>
    <CommunityTitle>Noncustodial Bridge Servers</CommunityTitle>
    <CommunityDescription>
      The Lightning Address standard continues to be adopted by community participants and companies in the industry. From mobile and desktop wallet support, to federated Lightning Address bridge servers anyone can self-host, it's never been easier to transact Bitcoin.
    </CommunityDescription>
    <CommunityInner>
      <CommunityLeft>
        <CommunitySectionTitle>Transact with a Lightning Address today!</CommunitySectionTitle>
        <CommunityDescriptionSmall>
          The wallets listed below already have support for transacting with Lightning Addresses. Download them to get started sending Bitcoin as easily as you send emails.
        </CommunityDescriptionSmall>
        {WALLETS.map(wallet => (
          <CommunityCard key={wallet.name}>
            <ImageWrapper>
              <Image src={wallet.image} alt={wallet.name} style={wallet.imageStyle || {}} />
            </ImageWrapper>
            <CommunitySignUpButton target="_blank" href={wallet.url}>{wallet.downloadText}</CommunitySignUpButton>
          </CommunityCard>
        ))}
        <CTAWrapper>
          <CTASecondary href="https://github.com/andrerfneves/lightning-address/blob/master/README.md#wallets-supported" target="_blank">
            View list of supported Wallets
          </CTASecondary>
        </CTAWrapper>
      </CommunityLeft>
      <CommunityRight>
        <CommunityRightInner>
          <CommunitySectionTitle>Want a different domain for your Lightning Address?</CommunitySectionTitle>
          <CommunityDescriptionSmall>
            Use one of the community-supported Lightning Address servers below to connect your Lightning backend to a Lightning Address noncustodially!
          </CommunityDescriptionSmall>
          <CommunityListWrapper>
            {SATDRESS_SERVERS.map(item => (
              <Link key={item.urlText} href={item.urlLink} target="_blank">
                {item.urlText}
              </Link>
            ))}
          </CommunityListWrapper>
          <br />
          <CommunityDescriptionSmall>
            Additional resources for using and supporting Lightning Addresses:
          </CommunityDescriptionSmall>
          <CommunityVerticalListWrapper>
            {BRIDGE_SERVERS.map(item => (
              <VerticalLinkWrapper key={item.urlText}>
                <VerticalLink href={item.urlLink} target="_blank">
                  {item.urlText}
                </VerticalLink>
                <VerticalLinkDescription>
                  {item.description}
                </VerticalLinkDescription>
              </VerticalLinkWrapper>
            ))}
          </CommunityVerticalListWrapper>
        </CommunityRightInner>
      </CommunityRight>
    </CommunityInner>
  </CommunityModule>
)
