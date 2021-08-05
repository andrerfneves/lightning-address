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

  ${media.tablet`
    max-width: 1000px;
    flex-direction: row;
  `}
`;

const ProvidersLeft = styled.div`
  padding-bottom: 60px;

  ${media.tablet`
    flex: 1;
    padding-bottom: 0;
    padding-right: 10px;
  `}
`;

const ProvidersRight = styled.div`
  ${media.tablet`
    flex: 1;
  `}
`;

const ProvidersRightInner = styled.div`
  ${media.tablet`
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

  ${media.tablet`
    padding: 0;
    text-align: left;
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

  ${media.tablet`
    padding: 0;
    font-size: 20px;
    text-align: left;
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
`;

const ProviderCard = styled.div`
  margin: 20px;
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

const ProviderSignUpButton = styled.div`
  color: #fff;
  width: 140px;
  height: 2.81rem;
  cursor: pointer;
  padding: 0 3.5rem;
  text-align: center;
  border-radius: 7px;
  margin: 15px 0 0 0;
  line-height: 2.8rem;
  background-color: #0070f3;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);

  &:hover {
    background: rgba(0,118,255,0.9);
    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }

  ${media.tablet`
    width: 120px;
    margin: 0 15px 0 0;
  `}
`;

const ZEBEDEEImage = styled.img`
  width: 130px;
  align-self: center;
`;

export const Providers = () => (
  <ProvidersModule id="providers">
    <ProvidersInner>
      <ProvidersLeft>
        <ProvidersTitle>Supporting Providers</ProvidersTitle>
        <ProvidersDescription>
          Below is a list of the Bitcoin Lightning Network providers supporting Lightning Addresses. To get started and claim your Lightning Address now, create an account in on of the options below.
        </ProvidersDescription>
        <ProviderCard>
          <ZEBEDEEImage src={'/images/zebedee.svg'} alt="ZEBEDEE" style={{ marginLeft: '10px' }} />
          <ProviderSignUpButton href="https://zebedee.io/wallet">Download App</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ZEBEDEEImage src={'/images/lntxbot.png'} alt="LNTXBot" style={{ marginLeft: '15px' }}  />
          <ProviderSignUpButton href="http://lntxbot.fiatjaf.com/">Open Telegram</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ZEBEDEEImage src={'/images/lnbits.png'} alt="LNBits" />
          <ProviderSignUpButton href="https://lnbits.com">Create Account</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ZEBEDEEImage src={'/images/coinos.png'} alt="coinos" />
          <ProviderSignUpButton href="https://coinos.io">Sign Up</ProviderSignUpButton>
        </ProviderCard>
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
)
