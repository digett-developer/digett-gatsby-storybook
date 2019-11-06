import { Heading1, TextStyle1 } from "../Typography/Typography";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Typography", module).add("default", () => (
  <div>
    <Heading1>Heading1</Heading1>
    <TextStyle1>TextStyle1</TextStyle1>
  </div>
));
