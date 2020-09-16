import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Avatar from "./Avatar";
import Typography from "./Typography";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 16px;
  padding: 0 12px;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px 0;
`;

const SeenMessage = styled.span`
  font-size: 14px;
  color: #959595;
`;

const Message = ({
  sentFrom,
  message,
  seenAt,
  avatarSize,
  avatarUsername,
  avatarSrc,
}) => (
  <Card>
    <Avatar src={avatarSrc} username={avatarUsername} size={avatarSize} />
    <MessageText>
      <Typography variant="message-sender">{sentFrom}</Typography>
      {seenAt === null ? (
        <Typography variant="message-content">{message}</Typography>
      ) : (
        <SeenMessage>{message}</SeenMessage>
      )}
    </MessageText>
  </Card>
);

Message.propTypes = {
  /**
   * The name of the sender of the message
   */
  sentFrom: PropTypes.string.isRequired,
  /**
   * The message content
   */
  message: PropTypes.string.isRequired,
  /**
   * If the message has been read, this will be the date object for when it was
   */
  seenAt: PropTypes.object.isRequired,
  /**
   * The size of the avatar in the message
   */
  avatarSize: PropTypes.string.isRequired,
  /**
   * If the avatar photo is not supplied, the initials of the username is used
   */
  avatarUsername: PropTypes.string.isRequired,
};

export default Message;
