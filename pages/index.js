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

const PathsIntro = styled.p`
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

const BenefitsIntro = styled.p`
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

const CTASecondary = styled.a`
  color: #696969;
  cursor: pointer;
  height: 2.81rem;
  background: #fff;
  padding: 0 3.5rem;
  text-decoration: none;
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
  min-height: 700px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 120px 0 120px 0;
  background: #fafafa;
  border-bottom: 1px solid #eaeaea;
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
  grid-template-rows: 2fr;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 0 0 0;
`;

const BenefitsCard = styled.div`
  width: 250px;
  padding: 20px;
  display: flex;
  margin-top: 0;
  margin-bottom: 20px;
  min-height: 300px;
  border-radius: 7px;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border: 1px solid #eaeaea;
  transition: box-shadow .2s ease;

  &:hover {
    border: 1px solid #ccc;
    transition: box-shadow .2s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }
`;

const BenefitsCardTitle = styled.div`
  color: #111;
  margin: 12px 0;
  line-height: 1.4;
  font-weight: 600;
  font-size: 1.125em;
`;

const BenefitsCardImage = styled.img`
  max-width: 100%;
`;

const BenefitsCardDescription = styled.div`
  color: #111;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  padding: 0 10px;
`;

const PathsModule = styled.div`
  display: flex;
  min-height: 700px;
  background: #fff;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 120px 0 120px 0;
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
  transition: box-shadow .2s ease;
  margin-top: 50px;

  &:hover {
    border: 1px solid #ccc;
    transition: box-shadow .2s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
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

const PathsCardImage = styled.img`
  max-width: 100%;
`;

const PathsCardDescription = styled.div`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  color: #111;
`;

const PathsCardButton = styled.a`
  color: ${({ isSecondary }) => isSecondary ? '#696969' : '#fff' };
  background-color: ${({ isSecondary }) => isSecondary ? '#fff' : '#0070f3' };
  height: 2.81rem;
  cursor: pointer;
  text-decoration: none;
  padding: 0 3.5rem;
  margin: 25px 0 0 0;
  border-radius: 7px;
  line-height: 2.8rem;
  box-shadow: ${({ isSecondary }) => isSecondary ? '0 4px 14px 0 rgb(0 0 0 / 10%)' : '0 4px 14px 0 rgb(0 118 255 / 39%)' };
  ;

  &:hover {
    background-color: ${({ isSecondary }) => isSecondary ? 'rgba(255,255,255,0.9)' : 'rgba(0,118,255,0.9)' };
    box-shadow: ${({ isSecondary }) => isSecondary ? '0 6px 20px rgb(93 93 93 / 23%)' : '0 6px 20px rgb(0 118 255 / 23%)' };
  }
`;

const ProvidersModule = styled.div`
  display: flex;
  min-height: 700px;
  background: #fafafa;
  border-top: 1px solid #eaeaea;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 120px 0 120px 0;
`;

const ProvidersInner = styled.div`
  display: flex;
  max-width: 1000px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const ProvidersLeft = styled.div`
  flex: 1;
  padding-right: 10px;
`;

const ProvidersRight = styled.div`
  flex: 1;
`;

const ProvidersRightInner = styled.div`
  padding-left: 100px;
`;

const ProvidersTitle = styled.div`
  margin: 0 auto;
  font-size: 30px;
  max-width: 500px;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -1px;
  text-align: left;
`;

const ProvidersDescription = styled.div`
  color: #666666;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  max-width: 800px;
  text-align: left;
  letter-spacing: -1px;
  margin: 20px auto 0 auto;
`;

const ProvidersDescriptionSmall = styled(ProvidersDescription)`
  font-size: 18px;
`;

const ProvidersEmailButton = styled.div`
  cursor: pointer;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 270px;
  padding: 0 1.5rem;
  margin: 15px 0 0 0;
  line-height: 2.8rem;
  border-radius: 7px;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);

  &:hover {
    background: rgba(255,255,255,0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }
`;

const ProvidersEmailButtonImage = styled.img`
  max-width: 60%;
  margin-left: -10px;
`;

const ProvidersEmailButtonText = styled.div`
  flex: 1;
  color: #696969;
  font-weight: 600;
  font-size: 20px;
`;

const ProvidersCardGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

const ProvidersCard = styled.div`
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
  transition: box-shadow .2s ease;
  margin-top: 50px;

  &:hover {
    border: 1px solid #ccc;
    /* border: 1px solid transparent; */
    transition: box-shadow .2s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }
`;

const ProvidersCardTitle = styled.div`
  font-size: 1.125em;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  color: #111;
  margin: 12px 0;
`;

const ProvidersCardImage = styled.img`
  max-width: 100%;
`;

const ProvidersCardDescription = styled.div`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
  color: #111;
`;

const ProvidersCardLink = styled.div``;

const ProviderCardZBD = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 30px 60px rgb(0 0 0 / 12%);
  border-radius: 6px;
  width: 425px;
  height: 42px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const ProviderSignUpButton = styled.div`
  color: #fff;
  height: 2.81rem;
  width: 120px;
  text-align: center;
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

const ZEBEDEEImage = styled.img`
  width: 120px;
`;

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
    title: 'Skip the QR codes',
    description: () => <>Gone are the days that you needed to send your friend a Lightning Network invoice in order to receive a payment. Tell them to <b>pay me at user@domain.com</b> and be done with it.</>,
    image: '/images/qrcode.svg'
  },
  {
    title: 'Dynamic properties',
    description: 'Remove the boundaries that exist between service providers. Send money from provider A to provider B to your self-hosted C without hassle. Your Lightning Address is your global boundless payment identifier.',
    image: '/images/bitcoin1.svg'
  },
  {
    title: 'Messaging support',
    description: 'Lightning Addresses are primarily payment identifiers, but they also accept comments. Gone are the days that you needed to send your friend a Lightning Network invoice in order to receive a payment. Tell them to `pay me at user@domain.com` and be done with it.',
    image: '/images/comments.svg'
  },
  {
    title: 'Cross-provider support',
    description: 'Remove the boundaries that exist between service providers. Send money from provider A to provider B to your self-hosted C without hassle. Your Lightning Address is your global boundless payment identifier.',
    image: '/images/data.svg'
  },
  {
    title: 'Interoperable',
    description: 'Lightning Address builds upon the LNURL Protocol which is widely adopted in Lightning-enabled services. The aim of LNURL is to improve user-experience around sending of Lightning invoices between apps and services.',
    image: '/images/bitcoin3.svg'
  },
  {
    title: 'Familiar',
    description: 'Lightning Address builds upon the LNURL Protocol which is widely adopted in Lightning-enabled services. The aim of LNURL is to improve user-experience around sending of Lightning invoices between apps and services.',
    image: '/images/bitcoin2.svg'
  },
];

const IMPLEMENTATIONS = [
  {
    title: 'Service Provider',
    description: 'Create an account with one of the supported providers to get started immediately. Like your preferred email service, the provider handles all of the nuts-and-bolts behinds the scenes and is the easiest way to get started with your Lightning Address.',
    image: '/images/data4.svg',
    linkText: 'Get Started',
    link: 'https://google.com',
    isSecondary: false
  },
  {
    title: 'Bridge Server',
    description: 'If you already run a Lightning Network node and want a quick plug-n-play solution to getting your Lightning Address, this option is for you. Simply point some DNS settings to the Bridge Server, and you will be setup in minutes.',
    image: '/images/data3.svg',
    linkText: 'Quick Setup',
    link: 'https://github.com/andrerfneves/lightning-address/blob/master/BRIDGE.md',
    isSecondary: true
  },
  {
    title: 'Do-It-Yourself',
    description: 'You can do everything on your own. This is just a set of simple protocol instructions. Whether you are a service provider looking to support Lightning Addresses or a user that wants to host your own setup, Lightning Addresses for you.',
    description: 'You can do everything on your own. This is just a set of simple protocol instructions. Whether you are a service provider looking to support Lightning Addresses or a user that wants to host your own setup, Lightning Addresses for you.',
    image: '/images/data2.svg',
    linkText: 'Read More',
    link: 'https://google.com',
    isSecondary: true
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>The Lightning Address</title>
        <meta property="og:title" content="The Lightning Address" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lightningaddress.com" />
        <meta property="og:description" content="An Internet Identifier that allows anyone to send you Bitcoin over the Lightning Network. No scanning QR codes or pasting invoices. Like an email address, but for money." />
        <meta property="og:image" content="https://i.imgur.com/uwHlWPC.png" />
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
              <LoopedTextPart>example.com</LoopedTextPart>
              <LoopedTextPart>lntxbot.com</LoopedTextPart>
              <LoopedTextPart>your.domain</LoopedTextPart>
              <LoopedTextPart>zebedee.io</LoopedTextPart>
              <LoopedTextPart>coinos.io</LoopedTextPart>
            </TextLoop>
          </LoopWrapper>
          <CTAWrapper>
            <CTAPrimary>Start Exploring</CTAPrimary>
            <CTASecondary href="https://github.com/andrerfneves/lightning-address/blob/master/README.md" target="_blank">Documentation</CTASecondary>
          </CTAWrapper>
          <LicenseWrapper>
            <LicenseText>License: MIT</LicenseText>
            <LicenseLink href='https://github.com/andrerfneves/lightning-address/blob/master/LICENSE.md' target='_blank'>GitHub</LicenseLink>
          </LicenseWrapper>
        </HeroWrapper>
        <BenefitsModule>
          <BenefitsIntro>Features</BenefitsIntro>
          <BenefitsTitle>Why do I need a Lightning Address?</BenefitsTitle>
          <BenefitsDescription>Lightning Addresses dramatically simplify the experience of sending and receiving money over the Lightning Network. No more QR codes scanning. No more sharing of invoices. It even allows for payments to be easily performed across different service providers.</BenefitsDescription>
          <BenefitsCardGrid>
            {(BENEFITS || []).map((benefit) => (
              <BenefitsCard key={benefit.title}>
                <BenefitsCardImage src={benefit.image} alt={benefit.title} />
                <BenefitsCardTitle>
                  {benefit.title}
                </BenefitsCardTitle>
                <BenefitsCardDescription>
                  {(typeof benefit.description === 'string') ? (
                    benefit.description
                  ) : (
                    benefit.description()
                  )}
                </BenefitsCardDescription>
              </BenefitsCard>
            ))}
          </BenefitsCardGrid>
        </BenefitsModule>
        <PathsModule>
          <PathsIntro>Getting Started</PathsIntro>
          <PathsTitle>How do I get my Lightning Address?</PathsTitle>
          <PathsDescription>You have a few options in order to obtain your Lightning Address. You can choose to sign up for a service provider (just like an email server e.g. Gmail or Outlook) that will take care of all the complexities for you. You can roll your own setup/server that handles requests to/from your Lightning Network node (DIY). Or you can rely on a `Bridge` server that provides an easy plug-n-play solution if you already have a Lightning node.</PathsDescription>
          <PathsCardGrid>
            {(IMPLEMENTATIONS || []).map((benefit) => (
              <PathsCard key={benefit.title}>
                <PathsCardImage src={benefit.image} alt={benefit.title} />
                <PathsCardTitle>
                  {benefit.title}
                </PathsCardTitle>
                <PathsCardDescription>
                  {benefit.description}
                </PathsCardDescription>
                <PathsCardButton target="_blank" href={benefit.link} isSecondary={benefit.isSecondary}>
                  {benefit.linkText}
                </PathsCardButton>
              </PathsCard>
            ))}
          </PathsCardGrid>
        </PathsModule>
        <ProvidersModule>
          <ProvidersInner>
            <ProvidersLeft>
              <ProvidersTitle>Supporting Providers</ProvidersTitle>
              <ProvidersDescription>
                Below is a list of the Bitcoin Lightning Network providers supporting Lightning Addresses. To get started and claim your Lightning Address now, create an account in on of the options below.
              </ProvidersDescription>
              <ProviderCardZBD>
                <ZEBEDEEImage src={'/images/zebedee.svg'} alt="ZEBEDEE" style={{ marginLeft: '10px' }} />
                <ProviderSignUpButton href="https://zebedee.io/wallet">Download App</ProviderSignUpButton>
              </ProviderCardZBD>
              <ProviderCardZBD>
                <ZEBEDEEImage src={'/images/coinos.png'} alt="LNTXBot" />
                <ProviderSignUpButton href="http://lntxbot.fiatjaf.com/">Open Telegram</ProviderSignUpButton>
              </ProviderCardZBD>
              <ProviderCardZBD>
                <ZEBEDEEImage src={'/images/lnbits.png'} alt="LNBits" />
                <ProviderSignUpButton href="https://lnbits.com">Create Account</ProviderSignUpButton>
              </ProviderCardZBD>
              <ProviderCardZBD>
                <ZEBEDEEImage src={'/images/coinos.png'} alt="coinos" />
                <ProviderSignUpButton href="https://coinos.io">Sign Up</ProviderSignUpButton>
              </ProviderCardZBD>
            </ProvidersLeft>
            <ProvidersRight>
              <ProvidersRightInner>
                <ProvidersTitle>My favorite app doesn't support Lightning Address yet. What can I do?</ProvidersTitle>
                <ProvidersDescriptionSmall>
                  The best thing to do is to get in touch with the developer company and ask them to learn about Lightning Addresses and implement support for it. To make it easier, we created an email template you can send to your favorite provider.
                </ProvidersDescriptionSmall>
                <ProvidersEmailButton onClick={() => window.open(`mailto:provider@example.com?subject=Support Lightning Address&body=Hey, why don't you support Lightning Address yet? Check it at lightningaddress.com`)}>
                  <ProvidersEmailButtonImage src={'/images/email.svg'} alt='Email' />
                  <ProvidersEmailButtonText>Send Email</ProvidersEmailButtonText>
                </ProvidersEmailButton>
              </ProvidersRightInner>
            </ProvidersRight>
          </ProvidersInner>
        </ProvidersModule>
        <Footer>
          <FooterInner>
            {(FOOTER || []).map(col => (
              <FooterColumn key={col.title}>
                <FooterColumnTitle>
                  {col.title}
                </FooterColumnTitle>
                {(col.items || []).map(item => (
                  <FooterColumnItem key={item.link} href={item.link} target="_blank">
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
