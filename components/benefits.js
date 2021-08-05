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
  color: #0070f3;
  font-size: 14px;
  line-height: 1.6;
  max-width: 900px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  margin: 0 auto 20px auto;
  background: rgba(0,118,255,0.1);

  ${media.tablet`
    font-size: 18px;
  `}
`;

const BENEFITS = [
  {
    title: 'No QR codes',
    description: () => <>Gone are the days that you needed to send your friend a Bitcoin Lightning invoice QR in order to receive a payment. Now you can just tell them to <b>pay me at user@domain.com</b> and be done with it.</>,
    image: '/images/qrcode.svg'
  },
  {
    title: 'Dynamic properties',
    description: 'With Lightning Addresses you are able enjoy payments of any kind, any amount, with or without messages. These underlying properties can change, but your Address always stays the same. A true internet payment identifier.',
    image: '/images/bitcoin1.svg'
  },
  {
    title: 'Messaging support',
    description: 'Lightning Addresses are primarily payment identifiers, but depending on your provider they also accept comments attached to those payments. Programmable money is now as simple to transfer as programmable data.',
    image: '/images/comments.svg'
  },
  {
    title: 'Cross-provider support',
    description: 'Remove the boundaries that exist between service providers. Send money from provider A to provider B to your self-hosted C without hassle. Your Lightning Address is your global boundless payment identifier.',
    image: '/images/data.svg'
  },
  {
    title: 'Interoperable',
    description: 'Lightning Address builds upon the LNURL Protocol which is widely adopted in Lightning-enabled services. The aim of LNURL is to improve user-experience around Lightning payments between apps and services.',
    image: '/images/bitcoin3.svg'
  },
  {
    title: 'User Experience',
    description: 'Everyone is used to sending emails these days. Now those same addresses can technically be used for payments. Lightning Addresses provide a familiar user experience allowing virtually anyone to join and participate.',
    image: '/images/bitcoin2.svg'
  },
];

export const Benefits = () => (
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
)
