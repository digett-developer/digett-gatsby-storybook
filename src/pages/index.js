import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Layout from '../global/Layout';
import { Heading1, TextStyle1 } from '../components/Typography/Typography';
import { ThemeProvider } from '../components/ThemeContext';
const Page = styled.div``;

const IndexPage = () => (
  <Layout>
    <Page>
      <Heading1 tag="h1">This is Heading1 with H1 taggg</Heading1>
      <TextStyle1>This is TextStyle1 with p tag</TextStyle1>
    </Page>
  </Layout>
);

export default IndexPage;
