import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const determineColor = (type, textColor, palette) => {
  console.log("color is", textColor);
  if (textColor && textColor.length >= 3) {
    return `${textColor}`;
  } else if (type === "primary") {
    return palette.contrastText;
  } else if (type === "secondary") {
    return palette.primary;
  }
};

const determineBackgroundColor = (type, textColor, palette) => {
  if (textColor && textColor.length >= 3) {
    return `${textColor}`;
  } else if (type === "primary") {
    return palette.primary;
  } else if (type === "secondary") {
    return palette.contrastText;
  }
};

const StyledButton = styled.button`
  margin: 16px;
  padding: 10px 24px;
  cursor: pointer;
  color: ${({ type, textColor, theme: { palette } }) =>
    determineColor(type, textColor, palette)};
  background-color: ${({ type, backgroundColor, theme: { palette } }) =>
    determineBackgroundColor(type, backgroundColor, palette)};
  border: ${({ type, theme }) =>
    type === "primary" ? "none" : "1px solid " + theme.palette.primary};
  border-radius: 6px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.26);

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  }

  &:active {
    color: #fff;
    background-color: ${({ type, theme }) =>
      type === "primary" ? "#216021" : `${theme.palette.primary}`};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${({ type }) => (type === "primary" ? "#FFFFFF" : "#8E8E8E")};
    background-color: ${({ type }) =>
      type === "primary" ? "#949494" : "#E3E3E3"};
    border: none;
    cursor: not-allowed;
  }
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  type: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "primary",
  onClick: undefined,
};

export default Button;
