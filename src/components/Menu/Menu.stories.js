import React from "react";
import { storiesOf } from "@storybook/react";
import Menu from "./Menu";
import themes from "../../assets/themes";

const themeDark = {
  name: "dark"
};
const themeLight = {
  name: "light"
};
storiesOf("Menu", module)
  .add("default", () => <Menu themes={themes} theme={themeLight} />)
  .add("dark", () => <Menu themes={themes} theme={themeDark} />);
