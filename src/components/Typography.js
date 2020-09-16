import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeadingLevelOne = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;

const StyledHeadingLevelTwo = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

const StyledHeadingLevelThree = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const StyledHeadingLevelFour = styled.h4`
  font-size: 14px;
  font-weight: 500;
`;

const StyledHeadingLevelFive = styled.h5`
  font-size: 13px;
  font-weight: 500;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
`;

const StyledMessageSenderName = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

const StyledMessageContent = styled.span`
  font-size: 14px;
`;

const StyledButtonText = styled.span`
  font-size: 16px;
  text-transform: uppercase;
`;

const Typography = ({ variant, ...props }) => {
  switch (variant) {
    case "h1":
      return <StyledHeadingLevelOne>{props.children}</StyledHeadingLevelOne>;
    case "h2":
      return <StyledHeadingLevelTwo>{props.children}</StyledHeadingLevelTwo>;
    case "h3":
      return (
        <StyledHeadingLevelThree>{props.children}</StyledHeadingLevelThree>
      );
    case "h4":
      return <StyledHeadingLevelFour>{props.children}</StyledHeadingLevelFour>;
    case "h5":
      return <StyledHeadingLevelFive>{props.children}</StyledHeadingLevelFive>;
    case "p":
      return <StyledParagraph>{props.children}</StyledParagraph>;
    case "message-sender":
      return (
        <StyledMessageSenderName>{props.children}</StyledMessageSenderName>
      );
    case "message-content":
      return <StyledMessageContent>{props.children}</StyledMessageContent>;
    case "button":
      return <StyledButtonText>{props.children}</StyledButtonText>;
    default:
      return <StyledParagraph>{props.children}</StyledParagraph>;
  }
};

export default Typography;

Typography.propTypes = {
  /**
   * The type of text element to be used
   */
  variant: PropTypes.string,
};

Typography.defaultProps = {
  variant: "p",
};
