import QRCode from 'react-qr-code';
import styled from 'styled-components';

import { URL_INTERNET_IDENTIFIER  } from '../constants';
import { media } from '../utils';

const DONATION_QR_CODE = 'lnurl1dp68gurn8ghj7ctsdyh85etzv4jx2efwd9hj7a3s9aex2ut4v4ehgttnw3shg6tr943ksctjvajhxteevy6rgd3jx9jz6vpkxc6j6dp5v43z6wfkv9nz6efsxc6nxdpnxyckyef4xl00sk';

const FOOTER = [
  {
    title: 'Resources',
    items: [
      {
        link: URL_INTERNET_IDENTIFIER,
        title: 'Internet Identifier RFC'
      },
      {
        link: 'https://github.com/andrerfneves/lightning-address',
        title: 'Code Repository'
      },
      {
        link: 'https://github.com/andrerfneves/lightning-address/blob/master/README.md',
        title: 'Documentation'
      },
      {
        link: 'https://github.com/andrerfneves/lightning-address/blob/master/LICENSE.md',
        title: 'License'
      },
    ]
  },
  {
    title: 'LNURL Protocol',
    items: [
      {
        link: 'https://github.com/fiatjaf/lnurl-rfc',
        title: 'Specification'
      },
      {
        link: 'https://github.com/fiatjaf/lnurl-rfc/blob/master/lnurl-pay.md',
        title: 'LNURL Pay Specification'
      },
      {
        link: 'https://github.com/fiatjaf/awesome-lnurl#wallets',
        title: 'Wallets Supported'
      },
      {
        link: 'https://github.com/fiatjaf/awesome-lnurl',
        title: 'Awesome LNURL'
      },
    ]
  },
  {
    title: 'Providers',
    items: [
      {
        link: 'https://zebedee.io/wallet',
        title: 'ZEBEDEE Wallet'
      },
      {
        link: 'https://lntxbot.fiatjaf.com/',
        title: 'LNTXBOT Telegram'
      },
      {
        link: 'https://lnbits.com',
        title: 'LNBits'
      },
      {
        link: 'https://coinos.io',
        title: 'CoinOS'
      },
    ]
  },
];

const Wrapper = styled.div`
  background-color: #f3f3f3;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;

const InnerWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px 30px 30px 30px;
  flex-direction: column;

  ${media.tablet`
    max-width: 900px;
    flex-direction: row;
    padding: 80px 0 100px 0;
  `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    width: 200px;
  `}
`;

const ColumnTitle = styled.div`
  color: #111;
  font-size: 14px;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 22px;

  ${media.tablet`
    margin-top: 0;
  `}
`;

const ColumnItem = styled.a`
  color: #8c8c8c;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 14px;
  text-decoration: none;

  &:hover {
    color: #111;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomInner = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const BottomLogo = styled.div`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.75px;
`;

const BottomMadeBy = styled.div`
  color: #8c8c8c;
  font-size: 11px;
  margin-top: 6px;
  font-weight: 400;
  text-align: right;
`;

const BottomQR = styled.div`
  padding: 8px;
  background: #fff;
  border-radius: 7px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
`;

export const Footer = () => (
  <Wrapper>
    <InnerWrapper>
      {(FOOTER || []).map(col => (
        <Column key={col.title}>
          <ColumnTitle>
            {col.title}
          </ColumnTitle>
          {(col.items || []).map(item => (
            <ColumnItem key={item.link} href={item.link} target="_blank">
              {item.title}
            </ColumnItem>
          ))}
        </Column>
      ))}
      <Bottom>
        <BottomInner>
          <BottomQR>
            <a href={`lightning:${DONATION_QR_CODE}`}>
              <QRCode
                size={100}
                value={DONATION_QR_CODE}
              />
            </a>
          </BottomQR>
          <BottomLogo>The Lightning Address</BottomLogo>
          <BottomMadeBy>Made with ♥ by Bitcoiners</BottomMadeBy>
        </BottomInner>
      </Bottom>
    </InnerWrapper>
  </Wrapper>
)
