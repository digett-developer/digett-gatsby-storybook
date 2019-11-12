import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
import themes from "../../assets/themes";

const themeDark = {
  name: "dark"
};
const themeLight = {
  name: "light"
};
storiesOf("Header", module)
  .add("default", () => <Header themes={themes} theme={themeLight} />)
  .add("dark", () => <Header themes={themes} theme={themeDark} />);
