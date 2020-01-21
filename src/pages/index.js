import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Layout from '../global/Layout';
import { ThemeProvider } from '../components/ThemeContext';
const Page = styled.div``;

const IndexPage = () => (
  <Layout>
    <Page>
      <h1>Our Brand New Header</h1>
    </Page>
  </Layout>
);

export default IndexPage;
