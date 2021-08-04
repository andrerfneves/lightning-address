import styled from 'styled-components'
import TextLoop from "react-text-loop";

const Wrapper = styled.div`
  height: 100vh;
  min-height: 800px;
  display: flex;
`;

const InnerWrapper = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 8px solid ${({ theme }) => theme.colors.primary};
`;

const HeroTitle = styled.h1`
  font-size: 84px;
  font-weight: 800;
  letter-spacing: -4px;
  margin: 0 auto;
  max-width: 900px;
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
  font-size: 30px;
`;

const LoopedTextPart = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const Link = styled.a`
  padding: 4px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  letter-spacing: -0.5px;

  &:hover {
    color: #0070f3;
    border-radius: 7px;
    background: rgba(0,118,255,0.1);
    border-color: transparent;
  }
`;

const URL_INTERNET_IDENTIFIER = 'https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1';

export default function Home() {
  return (
    <Wrapper>
      <InnerWrapper>
        <HeroIntro>Introducing</HeroIntro>
        <HeroTitle>The Lightning Address</HeroTitle>
        <HeroDescription>An <Link href={URL_INTERNET_IDENTIFIER}>Internet Identifier</Link> that allows anyone to send you money over the Bitcoin Lightning Network. No scanning QR codes, or pasting invoices. Like an email address, but for money.</HeroDescription>
        <LoopWrapper>
          <FixedTextPart>satoshi@</FixedTextPart>
          <TextLoop interval={2000}>
            <LoopedTextPart>zbd.gg</LoopedTextPart>
            <LoopedTextPart>lntxbot.com</LoopedTextPart>
            <LoopedTextPart>your.domain</LoopedTextPart>
          </TextLoop>
        </LoopWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
