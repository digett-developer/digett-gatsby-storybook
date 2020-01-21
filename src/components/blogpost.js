import React from 'react';
import Components from './components.js';
import Layout from '../global/Layout';
import styled from 'styled-components';

const BlogPostStyle = styled.div`
  h1 {
    margin-top: 20px;
  }
  .blog-excerpt {
    margin: 10px 0px;
  }
  ul {
    padding-left: 40px;
    li {
      list-style: disc;
      margin-bottom: 5px;
    }
  }
`;

const StoryblokClient = require('storyblok-js-client');
let Storyblok = new StoryblokClient({
  accessToken: 'iWJ8FY7unOE7sPVb8ySNJQtt',
});
Storyblok.setComponentResolver((component, blok) => {
  switch (component) {
    case 'my_button':
      return `<button>${blok.button_text}</button>`;
      break;
    case 'contact_form':
      return `<a href="mailto:${blok.mail}">Mail me at: ${blok.mail}</a>`;
      break;
  }
});
const BlogPost = props => (
  <Layout>
    <BlogPostStyle>
      {props.blok.Image && <img className="blog-image" src={props.blok.Image} />}
      {props.blok.title && <h1>{props.blok.title}</h1>}
      {props.blok.excerpt && <div className="blog-excerpt">{props.blok.excerpt}</div>}
      {props.blok.body && (
        <TextStyle1
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: Storyblok.richTextResolver.render(props.blok.body) }}
        />
      )}
    </BlogPostStyle>
  </Layout>
);

export default BlogPost;
