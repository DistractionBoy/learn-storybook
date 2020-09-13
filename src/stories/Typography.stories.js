import React from "react";

import Typography from "../components/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/9PJuE2x6fPQp0FGerp5Vtt/Sample-Component-Library?node-id=2%3A2",
    },
    zeplinLink: [
      {
        name: "Typography",
        link:
          "zpl://screen?pid=5f510fb08630ff7cf0fa7a61&sid=5f5a0ae3260d4077dee7a7a5",
      },
    ],
  },
};

export const TypeSheet = () => (
  <>
    <Typography variant="h1">Heading Level 1</Typography>
    <Typography variant="h2">Heading Level 2</Typography>
    <Typography variant="h3">Heading Level 3</Typography>
    <Typography variant="h4">Heading Level 4</Typography>
    <Typography variant="h5">Heading Level 5</Typography>
    <Typography variant="p">
      This is a paragraph that can be used throughout the document and will have
      multiple lines and spacing in between the paragraphs
    </Typography>
    <div>
      <Typography variant="message-sender">Messages/Name</Typography>
      <br />
      <br />
    </div>
    <div>
      <Typography variant="message-content">Messages/MessageText</Typography>
      <br />
      <br />
    </div>
    <div>
      <Typography variant="button">button</Typography>
    </div>
  </>
);
