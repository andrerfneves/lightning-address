import TextLoop from 'react-text-loop';
import styled from 'styled-components';
import QRCode from "react-qr-code";
import Head from 'next/head'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroWrapper = styled.div`
  /* flex: 1; */
  display: flex;
  height: calc(100vh - 16px);
  min-height: 800px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 8px solid ${({ theme }) => theme.colors.primary};
`;

const HeroTitle = styled.h1`
  margin: 0 auto;
  font-size: 84px;
  max-width: 900px;
  font-weight: 800;
  letter-spacing: -4px;
`;

const HeroIntro = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-weight: 500;
  border-radius: 7px;
  padding: 8px 12px;
  margin: 0 auto 20px auto;
  max-width: 900px;
  color: #0070f3;
  background: rgba(0,118,255,0.1);
`;

const HeroDescription = styled.p`
  color: #666666;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: -1px;
  max-width: 800px;
  margin: 20px auto 0 auto;
  text-align: center;
`;

const LoopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 8px;
  margin-top: 30px;
`;

const FixedTextPart = styled.span`
  font-size: 40px;
`;

const LoopedTextPart = styled.span`
  font-size: 40px;
  font-weight: 700;
`;

const Link = styled.a`
  color: #000;
  padding: 4px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.5px;

  &:hover {
    color: #0070f3;
    border-radius: 7px;
    border-color: transparent;
    background: rgba(0,118,255,0.1);
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px auto 20px auto;
`;

const CTAPrimary = styled.div`
  color: #fff;
  height: 2.81rem;
  cursor: pointer;
  padding: 0 3.5rem;
  margin: 0 15px 0 0;
  border-radius: 7px;
  line-height: 2.8rem;
  background-color: #0070f3;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);

  &:hover {
    background: rgba(0,118,255,0.9);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }
`;

const CTASecondary = styled.div`
  color: #696969;
  cursor: pointer;
  height: 2.81rem;
  background: #fff;
  padding: 0 3.5rem;
  margin: 0 0 0 15px;
  line-height: 2.8rem;
  border-radius: 7px;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);

  &:hover {
    background: rgba(255,255,255,0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }
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

const BenefitsModule = styled.div`
  display: flex;
  background: #fafafa;
  min-height: 700px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 120px 0 120px 0;
  border: 8px solid #EA5455;
`;

const BenefitsTitle = styled.div`
  margin: 0 auto;
  font-size: 44px;
  max-width: 500px;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.3;
  text-align: center;
`;

const BenefitsDescription = styled.div`
  color: #666666;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
  letter-spacing: -1px;
  margin: 20px auto 0 auto;
`;

const BenefitsCardGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

const BenefitsCard = styled.div`
  width: 250px;
  padding: 20px;
  display: flex;
  margin-top: 30px;
  min-height: 300px;
  border-radius: 7px;
  align-items: center;
  flex-direction: column;
  border: 1px solid #eaeaea;
  transition: all 0.15s ease-in-out;

  &:hover {
    border: 1px solid #ccc;
    transform: scale(1.02);
    transition: all 0.15s ease-in-out;
  }
`;

const BenefitsCardTitle = styled.div`
  color: #111;
  margin: 12px 0;
  line-height: 1.4;
  font-weight: 600;
  font-size: 1.125em;
`;

const BenefitsCardImage = styled.img``;

const BenefitsCardDescription = styled.div`
  color: #111;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
`;

const BenefitsCardLink = styled.div``;

const PathsModule = styled.div`
  display: flex;
  min-height: 700px;
  background: #fff;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 120px 0 120px 0;
  border: 8px solid #43AA8B;
`;

const PathsTitle = styled.div`
  margin: 0 auto;
  font-size: 44px;
  max-width: 500px;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -1px;
`;

const PathsDescription = styled.div`
  color: #666666;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
  letter-spacing: -1px;
  margin: 20px auto 0 auto;
`;

const PathsCardGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

const PathsCard = styled.div`
  width: 250px;
  padding: 20px;
  display: flex;
  margin-top: 30px;
  min-height: 300px;
  border-radius: 7px;
  align-items: center;
  flex-direction: column;
  background: #f3f3f3;
  border: 1px solid #eaeaea;
  transition: all 0.15s ease-in-out;

  &:hover {
    border: 1px solid #ccc;
    transform: scale(1.02);
    transition: all 0.15s ease-in-out;
  }
`;

const PathsCardTitle = styled.div`
  font-size: 1.125em;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  color: #111;
  margin: 12px 0;
`;

const PathsCardImage = styled.img``;

const PathsCardDescription = styled.div`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  color: #111;
`;

const PathsCardLink = styled.div``;

const Footer = styled.div`
  background-color: #f3f3f3;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;

const FooterInner = styled.div`
  padding: 80px 0 100px 0;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 800px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const FooterColumnTitle = styled.div`
  color: #111;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 22px;
  `;

const FooterColumnItem = styled.a`
  color: #8c8c8c;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 14px;
  text-decoration: none;

  &:hover {
    color: #111;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterBottomInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FooterBottomLogo = styled.div`
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.75px;
`;

const FooterBottomMadeBy = styled.div`
  color: #8c8c8c;
  font-weight: 400;
  font-size: 11px;
  margin-top: 6px;
  text-align: right;
`;

const FooterBottomDonationQR = styled.div`
  padding: 8px;
  background: #fff;
  border-radius: 7px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
`;

const DONATION_QR_CODE = 'lnurl1dp68gurn8ghj7ctsdyh85etzv4jx2efwd9hj7a3s9aex2ut4v4ehgttnw3shg6tr943ksctjvajhxtmyxpnrycenv3sj6efcxvmz6dpcxpsj6cnx8p3j6e34vs6kyvfkxajrve3c3svx0h';

const URL_INTERNET_IDENTIFIER = 'https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1';

const FOOTER = [
  {
    title: 'Resources',
    items: [
      {
        link: URL_INTERNET_IDENTIFIER,
        title: 'Internet Identifiers'
      },
      {
        link: 'https://github.com/andrerfneves/lightning-address',
        title: 'Code Repository'
      },
      {
        link: 'https://github.com/andrerfneves/lightning-address/blob/master/DOCUMENTATION.md',
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
    title: 'Others',
    items: [
      {
        link: 'https://google.com',
        title: 'Name here'
      },
    ]
  },
]


const BENEFITS = [
  {
    title: 'So cool',
    description: 'Oh boy',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'So cool',
    description: 'Oh boy',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'So cool',
    description: 'Oh boy',
    image: 'https://via.placeholder.com/150'
  },
];

const IMPLEMENTATIONS = [
  {
    title: 'Service Provider',
    description: 'Like your preferred email service, let a service provider handle all of the behind-the-scenes for your Lightning Address.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Bridge',
    description: 'Oh boy',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Self-Hosted',
    description: 'Oh boy',
    image: 'https://via.placeholder.com/150'
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>The Lightning Address</title>
      </Head>
      <Wrapper>
        <HeroWrapper>
          <HeroIntro>Introducing</HeroIntro>
          <HeroTitle>The Lightning Address</HeroTitle>
          <HeroDescription>An <Link href={URL_INTERNET_IDENTIFIER}>Internet Identifier</Link> that allows anyone to send you Bitcoin over the Lightning Network. No scanning QR codes or pasting invoices. Like an email address, but for money.</HeroDescription>
          <LoopWrapper>
            <FixedTextPart>satoshi@</FixedTextPart>
            <TextLoop interval={2000}>
              <LoopedTextPart>zbd.gg</LoopedTextPart>
              <LoopedTextPart>lntxbot.com</LoopedTextPart>
              <LoopedTextPart>coinos.io</LoopedTextPart>
              <LoopedTextPart>your.domain</LoopedTextPart>
            </TextLoop>
          </LoopWrapper>
          <CTAWrapper>
            <CTAPrimary>Start Exploring</CTAPrimary>
            <CTASecondary>Documentation</CTASecondary>
          </CTAWrapper>
          <LicenseWrapper>
            <LicenseText>License: MIT</LicenseText>
            <LicenseLink href='https://github.com/andrerfneves/lightning-address' target='_blank'>GitHub</LicenseLink>
          </LicenseWrapper>
        </HeroWrapper>
        <BenefitsModule>
          <BenefitsTitle>Why do I need a Lightning Address?</BenefitsTitle>
          <BenefitsDescription>Lightning Addresses are nothing more than a set of properties to allow for Lightning Network invoices to be shared behind the scenes, invisible to the end user. There are many ways to get started, with varying degree of complexity depending on your persona type.</BenefitsDescription>
          <BenefitsCardGrid>
            {(BENEFITS || []).map((benefit) => (
              <BenefitsCard>
                <BenefitsCardImage src={benefit.image} alt={benefit.title} />
                <BenefitsCardTitle>
                  {benefit.title}
                </BenefitsCardTitle>
                <BenefitsCardDescription>
                  {benefit.description}
                </BenefitsCardDescription>
              </BenefitsCard>
            ))}
          </BenefitsCardGrid>
        </BenefitsModule>
        <PathsModule>
          <PathsTitle>Choose your preferred path</PathsTitle>
          <PathsDescription>Lightning Addresses are nothing more than a set of properties to allow for Lightning Network invoices to be shared behind the scenes, invisible to the end user. There are many ways to get started, with varying degree of complexity depending on your persona type.</PathsDescription>
          <PathsCardGrid>
            {(IMPLEMENTATIONS || []).map((benefit) => (
              <PathsCard>
                <PathsCardImage src={benefit.image} alt={benefit.title} />
                <PathsCardTitle>
                  {benefit.title}
                </PathsCardTitle>
                <PathsCardDescription>
                  {benefit.description}
                </PathsCardDescription>
              </PathsCard>
            ))}
          </PathsCardGrid>
        </PathsModule>
        <Footer>
          <FooterInner>
            {(FOOTER || []).map(col => (
              <FooterColumn>
                <FooterColumnTitle>
                  {col.title}
                </FooterColumnTitle>
                {(col.items || []).map(item => (
                  <FooterColumnItem href={item.link} target="_blank">
                    {item.title}
                  </FooterColumnItem>
                ))}
              </FooterColumn>
            ))}
            <FooterBottom>
              <FooterBottomInner>
                <FooterBottomDonationQR>
                  <QRCode
                    size={100}
                    value={DONATION_QR_CODE}
                  />
                </FooterBottomDonationQR>
                <FooterBottomLogo>The Lightning Address</FooterBottomLogo>
                <FooterBottomMadeBy>Made with ♥ by Bitcoiners</FooterBottomMadeBy>
              </FooterBottomInner>
            </FooterBottom>
          </FooterInner>
        </Footer>
      </Wrapper>
    </>
  );
}
