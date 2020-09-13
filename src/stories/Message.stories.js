import React from "react";
import styled from "styled-components";
import Message from "../components/Message";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Typography from "../components/Typography";

export default {
  title: "Components/Messages",
  component: Message,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/9PJuE2x6fPQp0FGerp5Vtt/Sample-Component-Library?node-id=18%3A0",
    },
    zeplinLink: [
      {
        name: "Unread Message",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f51a250c92e988732585288",
      },
      {
        name: "Read Message",
        link:
          "zpl://components?stid=5f4e4a60a5122011cf8cfd5f&coid=5f51a250ddb7dc87fadd60d1",
      },
      {
        name: "Message Template",
        link:
          "zpl://screen?pid=5f510fb08630ff7cf0fa7a61&sid=5f51a0914eb6904cd53131a6",
      },
    ],
  },
};

const Template = (args) => <Message {...args} />;

export const UnreadMessage = Template.bind({});
UnreadMessage.args = {
  sentFrom: "Sally Jenkins",
  message: "Hey, are you going to make it to dinner?",
  seenAt: null,
  avatarSize: "medium",
  avatarUsername: "Sally Jenkins",
  avatarSrc: "https://avatars2.githubusercontent.com/u/132554",
};

export const ReadMessage = Template.bind({});
ReadMessage.args = {
  sentFrom: "Jimmy Flimflams",
  message: "I told him to bring the wings",
  seenAt: new Date(),
  avatarSize: "medium",
  avatarUsername: "Jimmy Flimflams",
  avatarSrc: "https://avatars2.githubusercontent.com/u/132554",
};

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
  //   background-color: #efefef;
`;

const RecentConversationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -0.83em;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -0.83em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -0.83em;
`;

const TitleContainer = styled.span`
  padding-left: 16px;
`;

export const MessageTemplate = () => (
  <MobileContainer>
    <TitleContainer>
      <Typography variant="h1">Messenger</Typography>
    </TitleContainer>
    <RecentConversationsContainer>
      <Avatar
        size="large"
        username="Joe Schmoe"
        src="https://avatars2.githubusercontent.com/u/132554"
      />
      <Avatar
        size="large"
        username="Joe Schmoe"
        src="https://avatars2.githubusercontent.com/u/132554"
      />
      <Avatar
        size="large"
        username="Joe Schmoe"
        src="https://avatars2.githubusercontent.com/u/132554"
      />
      <Avatar
        size="large"
        username="Joe Schmoe"
        src="https://avatars2.githubusercontent.com/u/132554"
      />
    </RecentConversationsContainer>
    <TitleContainer>
      <Typography variant="h2">Messages</Typography>
    </TitleContainer>
    <MessagesContainer>
      <Message
        sentFrom="Sally Jenkins"
        message="Hey, are you going to make it to dinner?"
        seenAt={null}
        avatarSize="medium"
        avatarUsername="Sally Jenkins"
        avatarSrc="https://avatars2.githubusercontent.com/u/132554"
      />
      <Message
        sentFrom="Jimmy Flimflams"
        message="I told him to bring the wings"
        seenAt={new Date()}
        avatarSize="medium"
        avatarUsername="Jimmy Flimflams"
        avatarSrc="https://avatars2.githubusercontent.com/u/132554"
      />
      <Message
        sentFrom="Sally Jenkins"
        message="Could you NOT encourage Jimmy's friend"
        seenAt={new Date()}
        avatarSize="medium"
        avatarUsername="Sally Jenkins"
        avatarSrc="https://avatars2.githubusercontent.com/u/132554"
      />
      <Message
        sentFrom="Rob Perry"
        message="That's funny. i love spicy jalapeno wings"
        seenAt={new Date()}
        avatarSize="medium"
        avatarUsername="Rob Perry"
        avatarSrc="https://avatars2.githubusercontent.com/u/132554"
      />
      <Message
        sentFrom="Jimmy Flimflams"
        message="I said that last time too!"
        seenAt={new Date()}
        avatarSize="medium"
        avatarUsername="Jimmy Flimflams"
        avatarSrc="https://avatars2.githubusercontent.com/u/132554"
      />
    </MessagesContainer>
    <TitleContainer>
      <Typography variant="h2">What would you like to do?</Typography>
    </TitleContainer>
    <ButtonContainer>
      <Button type="secondary">Delete</Button>
      <Button type="primary">Reply</Button>
    </ButtonContainer>
  </MobileContainer>
);
