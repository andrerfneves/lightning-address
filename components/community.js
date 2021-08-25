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

const CommunityListWrapper = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const CommunityListItem = styled.li`
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0.35rem;

  &:before {
    content: "-";
    color: #666666;
    margin-left: -25px;
    position: absolute;
    display: inline-block;
  }
`;

const CommunitySectionTitle = styled.div`
  margin: 0 auto;
  font-size: 20px;
  padding: 0 30px;
  max-width: 500px;
  font-weight: 800;
  line-height: 1.3;
  text-align: left;

  ${media.tablet`
    padding: 0;
    font-size: 24px;
    letter-spacing: -0.5px;
  `}
`;

const Link = styled.a`
  color: #222222;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #0070f3;
  }
`;

const LinkDescription = styled.span`
  padding-left: 5px;
  word-break: break-word;
`;

const CommunityDescriptionSmall = styled(CommunityDescription)`
  text-align: left;

  ${media.tablet`
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
  width: 300px;
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

const BRIDGE_SERVERS = [
  {
    urlLink: 'https://payaddress.co',
    urlText: 'PayAddress.co',
    description: 'a something something',
  },
  {
    urlLink: 'https://bitmia.com',
    urlText: 'Bitmia.com',
    description: 'a something something',
  },
  {
    urlLink: 'https://tinytip.me',
    urlText: 'TinyTip.me',
    description: 'a something something',
  },
  {
    urlLink: 'https://paymentlink.xyz',
    urlText: 'PaymentLink.xyz',
    description: 'a something something',
  },
  {
    urlLink: 'https://ln.fitti.io/',
    urlText: 'LN.Fitti.io',
    description: 'a something something',
  },
  {
    urlLink: 'https://bridgeaddr.fiatjaf.com/',
    urlText: 'BridgeAddr',
    description: 'a server that allows you to receive payments at yourname@yourdomain.com noncustodially.',
  },
];

const WALLETS = [
  {
    name: 'ZEBEDEE',
    image: '/images/zebedee.svg',
    downloadText: 'Download Wallet',
    url: 'https://zebedee.io/wallet',
  },
  {
    name: 'SBW',
    image: '/images/sbw.png',
    downloadText: 'Download Wallet',
    url: 'https://lightning-wallet.com',
  },
  {
    name: 'Blixt',
    image: '/images/blixt.png',
    downloadText: 'Download Wallet',
    url: 'https://blixtwallet.github.io/',
  },
  {
    name: 'LNBits',
    image: '/images/lnbits.png',
    downloadText: 'Open LNBits',
    url: 'https://lnbits.com/',
  },
]

export const Community = () => (
  <CommunityModule>
    <CommunityIntro>Community Bridge Servers and Wallets</CommunityIntro>
    <CommunityTitle>Integrates as fast as Lightning</CommunityTitle>
    <CommunityDescription>
      We’ve made it exceedingly straightforward to start supporting Lightning Addresses on your own domain or integrate them with the apps you’re building. Set up support for this new standard today and join the era of total Lightning interoperability!
    </CommunityDescription>
    <CommunityInner>
      <CommunityLeft>
        <CommunitySectionTitle>Get a Lightning Address now!</CommunitySectionTitle>
        <CommunityDescriptionSmall>
          Get your own Lightning Address now by using one of the apps and services that already support it. You’ll be set up in seconds!
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
          <CTASecondary href="https://github.com/andrerfneves/lightning-address/blob/master/README.md#wallets" target="_blank">
            View list of all supported Wallets
          </CTASecondary>
        </CTAWrapper>
      </CommunityLeft>
      <CommunityRight>
        <CommunityRightInner>
          <CommunitySectionTitle>Get a Lightning Address now!</CommunitySectionTitle>
          <CommunityDescriptionSmall>
            Get your own Lightning Address now by using one of the apps and services that already support it. You’ll be set up in seconds!
          </CommunityDescriptionSmall>
          <CommunityListWrapper>
            {BRIDGE_SERVERS.map(item => (
              <CommunityListItem key={item.urlText}>
                <Link href={item.urlLink} target="_blank">
                  {item.urlText}
                </Link>
                <LinkDescription>
                  - {item.description}
                </LinkDescription>
              </CommunityListItem>
            ))}
          </CommunityListWrapper>
        </CommunityRightInner>
      </CommunityRight>
    </CommunityInner>
  </CommunityModule>
)
