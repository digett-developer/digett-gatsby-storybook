import React from 'react';
import Components from './components.js';
import Layout from '../global/Layout';

const Page = props => (
  <Layout>
    {props.blok.body &&
      props.blok.body.map(blok => React.createElement(Components(blok.component), { key: blok._uid, blok: blok }))}
  </Layout>
);

export default Page;
