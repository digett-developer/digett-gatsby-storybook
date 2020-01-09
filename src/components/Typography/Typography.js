import React from 'react';
import DynamicComponent from '../DynamicComponent';
import theme from '../../assets/themes';

const { heading1, textStyle1, blogExcerpt } = theme.textStyles;

export const Heading1 = props => (
  <DynamicComponent {...heading1} {...props}>
    {props.children}
  </DynamicComponent>
);

export const TextStyle1 = props => (
  <DynamicComponent {...textStyle1} {...props}>
    {props.children}
  </DynamicComponent>
);

export const BlogExcerpt = props => (
  <DynamicComponent {...blogExcerpt} {...props}>
    {props.children}
  </DynamicComponent>
);
