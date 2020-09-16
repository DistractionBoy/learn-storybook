import React from "react";

import Avatar from "../components/Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/9PJuE2x6fPQp0FGerp5Vtt/Sample-Component-Library?node-id=100%3A1",
    },
    zeplinLink: [
      {
        name: "Large",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f511482565b214d608410a2",
      },
      {
        name: "Medium",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f51148222c2517fc9fa7507",
      },
      {
        name: "Small",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f511483b0dae18006820bab",
      },
      {
        name: "All",
        link:
          "zpl://screen?pid=5f510fb08630ff7cf0fa7a61&sid=5f5a0ca9d02e30536eda3040",
      },
    ],
  },
};

const Template = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

Large.parameters = {
  docs: {
    storyDescription: "The large size: 60px with a 16px margin",
  },
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

Large.parameters = {
  docs: {
    storyDescription: "The medium size: 45px with a 12px margin",
  },
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

Large.parameters = {
  docs: {
    storyDescription: "The small size: 32px with an 8px margin",
  },
};

export const All = () => (
  <div>
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="medium"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
    <Avatar
      size="small"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

export const Loading = () => (
  <div>
    <Avatar size="large" loading />
    <Avatar size="medium" loading />
    <Avatar size="small" loading />
  </div>
);
