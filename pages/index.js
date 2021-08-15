import styled from 'styled-components';
import Head from 'next/head';

import { Providers } from '../components/providers';
import { Benefits } from '../components/benefits';
import { Footer } from '../components/footer';
import { Paths } from '../components/paths';
import { Hero } from '../components/hero';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>The Lightning Address</title>
        <link rel="icon" type="image/png" href="https://i.imgur.com/4yaPtA2.png" />
        <meta
          property="og:title"
          content="The Lightning Address"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://lightningaddress.com"
        />
        <meta
          property="og:description"
          content="Like an email address, but for your money. An Internet Identifier that allows anyone to send you Bitcoin instantly over the Lightning Network. No scanning QR codes or pasting invoices."
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/Plc0Dam.png"
        />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@andreneves">
        <meta name="twitter:creator" content="@andreneves">
        <meta name="twitter:title" content="The Lightning Address">
        <meta name="twitter:description" content="Like an email address, but for your money. An Internet Identifier that allows anyone to send you Bitcoin instantly over the Lightning Network. No scanning QR codes or pasting invoices.">
        <meta name="twitter:image" content="https://i.imgur.com/Plc0Dam.png">

        {/* Plausible */}
        <script defer data-domain="lightningaddress.com" src="https://plausible.io/js/plausible.js" />
      </Head>
      <Wrapper>
        <Hero />
        <Benefits />
        <Paths />
        <Providers />
        <Footer />
      </Wrapper>
    </>
  );
}
