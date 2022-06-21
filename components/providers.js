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

const ZEBEDEEImage = styled.img`
  width: 130px;
  align-self: center;
`;

const BTCPayImage = styled.img`
  width: 100px;
  align-self: center;
`;

const AlbyImage = styled.img`
  width: 44px;
  padding-bottom: 2px;
  border-radius: 5%;
`;

const WoSImage = styled.img`
  width: 105px;
  padding-bottom: 3px;
`;

const Bold = styled.span`
  font-weight: 600;
  letter-spacing: -0.5px;
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

export const Providers = () => (
  <ProvidersModule id="providers">
    <ProvidersInner>
      <ProvidersLeft>
        <ProvidersTitle>Get a Lightning Address now!</ProvidersTitle>
        <ProvidersDescription>
          Get your own Lightning Address now by using one of the apps and services that already support it. You’ll be set up in seconds!
        </ProvidersDescription>
        <ProviderCard>
          <ImageWrapper>
            <ZEBEDEEImage src={'/images/zbd.svg'} alt="ZEBEDEE" style={{ marginTop: '10px', marginBottom: '3px' }} />
            <DomainURL>you@zbd.gg</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://zebedee.io/app">Download App</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/btcpay.svg'} alt="BTCPay Server" style={{ width: '95px' }} />
            <DomainURL>you@yourbtcpay.server</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://btcpayserver.org/">Open BTCPay Server</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/bitrefill.svg'} alt="Bitrefill" style={{ width: '125px' }} />
            <DomainURL>you@bitrefill.me</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://bitrefill.com/">Open Bitrefill</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <ZEBEDEEImage src={'/images/lntxbot.png'} alt="LNTXBot" style={{ marginBottom: '-5px' }} />
            <DomainURL>you@lntxbot.com</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="http://lntxbot.fiatjaf.com/">Open Telegram</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/lnmarkets.svg'} alt="LNMarkets" style={{ width: '70px' }} />
            <DomainURL>you@lnmarkets.com</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://lnmarkets.com/">Open LNMarkets</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/coincorner.svg'} alt="Coincorner" style={{ width: '130px' }} />
            <DomainURL>you@coincorner.io</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://coincorner.com/">Open Coincorner</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/bipa.png'} alt="Bipa" style={{ width: '45px' }} />
            <DomainURL>you@bipa.app</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://bipa.app">Download Wallet</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/fastbitcoins.png'} alt="FastBitcoins" style={{ width: '125px' }} />
            <DomainURL>you@fbtc.me</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://fastbitcoins.com/">Open FastBitcoins</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/sparkwallet.svg'} alt="Spark Wallet" style={{ width: '125px' }} />
            <DomainURL>you@sparkwallet.me</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://sparkwallet.io/">Open Spark Wallet</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <ZEBEDEEImage src={'/images/coinos.png'} alt="coinos" style={{ marginBottom: '-8px' }} />
            <DomainURL>you@coinos.io</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://coinos.io">Open Coinos</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <ZEBEDEEImage src={'/images/lightningtipbot.svg'} alt="@LightningTipBot" style={{ width: '115px' }} />
            <DomainURL>you@ln.tips</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://t.me/LightningTipBot">Open Telegram</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <ZEBEDEEImage src={'/images/bitcoinbeach.png'} alt="@Bitcoinbeach" style={{ width: '45px' }} />
            <DomainURL>you@ln.bitcoinbeach.com</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://galoy.io/bitcoin-beach-wallet/">Download Wallet</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <AlbyImage src={'/images/alby.png'} alt="Alby" />
            <DomainURL>you@getalby.com</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://getalby.com">Open Alby</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <WoSImage src={'/images/wos.svg'} alt="Wallet of Satoshi" />
            <DomainURL>you@walletofsatoshi.com</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton target="_blank" href="https://walletofsatoshi.com">Download Wallet</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/noah.png'} alt="Noah" style={{ width: '115px' }} />
            <DomainURL>you@noah.com</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton isDisabled target="_blank" href="https://noah.com">Coming Soon</ProviderSignUpButton>
        </ProviderCard>
        <ProviderCard>
          <ImageWrapper>
            <BTCPayImage src={'/images/bitnob2.png'} alt="Bitnob" style={{ width: '115px' }} />
            <DomainURL>you@bitnob.io</DomainURL>
          </ImageWrapper>
          <ProviderSignUpButton  target="_blank" href="https://bitnob.com">Download Wallet</ProviderSignUpButton>
        </ProviderCard>
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
