import React from "react";
import { storiesOf } from "@storybook/react";
import Logo from "./Logo";
import themes from "../../assets/themes";

const themeDark = {
  name: "dark"
};
const themeLight = {
  name: "light"
};

storiesOf("Logo", module)
  .add("default", () => <Logo themes={themes} theme={themeLight} />)
  .add("dark", () => <Logo themes={themes} theme={themeDark} />);
