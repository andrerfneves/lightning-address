import styled from 'styled-components';

import { media } from '../utils';

const BenefitsModule = styled.div`
  display: flex;
  background: #fafafa;
  align-items: center;
  padding: 60px 0 60px 0;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;

  ${media.tablet`
    min-height: 700px;
    padding: 120px 0 120px 0;
  `}
`;

const BenefitsTitle = styled.div`
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

const BenefitsDescription = styled.div`
  color: #666666;
  padding: 0 30px;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
  letter-spacing: -1px;
  margin: 20px auto 0 auto;

  ${media.tablet`
    font-size: 20px;
    line-height: 1.6;
  `}

  ${media.largeTablet`
    padding: 0;
  `}
`;

const BenefitsCardGrid = styled.div`
  display: flex;
  padding: 40px 0;
  flex-direction: column;

  ${media.largeTablet`
    display: grid;
    grid-row-gap: 10px;
    padding: 50px 0 0 0;
    grid-column-gap: 20px;
    grid-template-rows: 2fr;
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const BenefitsCard = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  margin: 0 auto;
  background: #fff;
  min-height: 300px;
  border-radius: 7px;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  border: 1px solid #eaeaea;
  transition: box-shadow .2s ease;

  ${media.largeTablet`
    width: 250px;
  `}

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

  ${media.largeTablet`
    width: 250px;
    text-align: center;
  `}
`;

const BenefitsCardImage = styled.img`
  max-width: 100%;

  ${media.tablet`
    max-width: 50%;
  `}

  ${media.largeTablet`
    max-width: 100%;
  `}
`;

const BenefitsCardDescription = styled.div`
  color: #111;
  font-size: 14px;
  padding: 0 10px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
`;

const BenefitsIntro = styled.p`
  color: #26a717;
  font-size: 14px;
  line-height: 1.6;
  max-width: 900px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  margin: 0 auto 20px auto;
  background: rgba(10,117,14,0.12);

  ${media.tablet`
    font-size: 18px;
  `}
`;


const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 10px auto;

  ${media.tablet`
    margin: 40px auto 0 auto;
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

const BENEFITS = [
  {
    title: 'Skip QR codes',
    description: () => <>Gone are the days that you needed to send your friend a Lightning invoice QR code in order to receive a payment. Now you can just text them to <b>"pay me at user@domain.com"</b> and go about your day.</>,
    image: '/images/qrcode.svg'
  },
  {
    title: 'Attach Comments',
    description: 'Payments to your Lightning Address can also contain attached messages. Whether it is a donation message, a comment from a fan, or a friend\'s joke, messages always improve the experience.',
    image: '/images/comments.svg'
  },
  {
    title: 'Open All Networks',
    description: 'You can finally send money to that friend who uses that other app. From Service A to App B to User C to Platform D, Lightning Addresses set your money free -- a global boundless payment identifier for anyone and everyone.',
    image: '/images/data.svg'
  },
  {
    title: 'Set Custom Properties',
    description: 'Enjoy payments from anyone anywhere, for any amount, with or without attached comments. Set minimums-&-maximums, images, and descriptions. Properties can change, but your Lightning Address stays the same.',
    image: '/images/bitcoin1.svg'
  },
  {
    title: 'Familiar Experience',
    description: 'Like an email address but for your money! You can now have the exact same flow to send money as you have when sending an email message to a friend. A familiar user experience allowing everyone to participate.',
    image: '/images/bitcoin2.svg'
  },
  {
    title: 'Be Interoperable',
    description: 'Lightning Address builds upon the LNURL Protocol which is widely adopted in Bitcoin Lightning-enabled services. The aim of LNURL is to improve user-experience around payments between apps and services.',
    image: '/images/bitcoin3.svg'
  },
];

export const Benefits = () => (
  <BenefitsModule>
    <BenefitsIntro>Users & Enthusiasts</BenefitsIntro>
    <BenefitsTitle>Why do I need a Lightning Address?</BenefitsTitle>
    <BenefitsDescription>The Lightning Address makes it simple to send and receive money over the Bitcoin Lightning Network. No more scanning of QR codes, no more sharing of payment requests. <br />Send money like you send emails -- instantly and abundantly.</BenefitsDescription>
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
    <CTAWrapper>
      <CTAPrimary href="#providers">Get My Lightning Address</CTAPrimary>
    </CTAWrapper>
  </BenefitsModule>
)
