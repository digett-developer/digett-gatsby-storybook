import React from "react";
import styled from "styled-components";
import { fontSize, color, fontWeight, lineHeight } from "styled-system";

const tag = "";

const StyledDynamicComponent = styled(tag)`
  ${fontSize}
  ${color}
  ${fontWeight}
  ${lineHeight}
`;

const DynamicComponent = ({ tag = "p", children, ...props }) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag);
  return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
  tag: "p"
};

export default DynamicComponent;
