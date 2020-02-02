import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
const IndexStyle = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Montserrat-Regular';
  }
`;

const Index = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <IndexStyle>
      <h1>Hola Mundo!</h1>
    </IndexStyle>
  </div>
);

export default Index;
