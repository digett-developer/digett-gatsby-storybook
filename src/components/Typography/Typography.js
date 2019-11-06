import React from "react";
import DynamicComponent from "../DynamicComponent";
import theme from "../../assets/theme";

const { heading1, textStyle1 } = theme.textStyles;

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
