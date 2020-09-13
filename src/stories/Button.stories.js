import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/9PJuE2x6fPQp0FGerp5Vtt/Sample-Component-Library?node-id=5%3A56",
    },
    zeplinLink: [
      {
        name: "Primary",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f511109c6d7c47bf1a384a4",
      },
      {
        name: "Secondary",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f511109d7b59e49f196ee56",
      },
      {
        name: "Primary/Disabled",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f5111091d98b388004b5e57",
      },
      {
        name: "Secondary/Disabled",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f511109e303ee88f6bb4b2f",
      },
      {
        name: "All",
        link:
          "zpl://screen?pid=5f510fb08630ff7cf0fa7a61&sid=5f5a0ced28e9d873afe1d3a1",
      },
    ],
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "BUTTON",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "BUTTON",
  disabled: false,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: "primary",
  children: "BUTTON",
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: "secondary",
  children: "BUTTON",
  disabled: true,
};

export const All = () => (
  <div>
    <Button type="primary">PRIMARY</Button>
    <Button type="secondary">SECONDARY</Button>
    <Button type="primary" disabled>
      PRIMARY DISABLED
    </Button>
    <Button type="secondary" disabled>
      SECONDARY DISABLED
    </Button>
  </div>
);
