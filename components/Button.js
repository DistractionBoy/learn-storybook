import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const determineBorder = ({ color, disabled, theme }) => {
  // if (disabled && color === "primary") {
  //   // disabled primary
  // } else if (disabled && color === "secondary") {
  //   // disabled secondary
  // } else if (!disabled) {
  switch (color) {
    case "primary": // enabled button, primary color
      return "none;";
    case "secondary": // enabled button, secondary color
      return `1px solid ${theme ? theme.palette.primary : "#000000"};`;
    default:
      // enabled, but color prop has something different
      return "none;";
  }
  // }
};

const determineBackgroundColor = ({ color, disabled, theme }) => {
  // if (disabled && color === "primary") {
  //   // disabled primary
  // } else if (disabled && color === "secondary") {
  //   // disabled secondary
  // } else if (!disabled) {
  switch (color) {
    case "primary": // enabled button, primary color
      return `${theme ? theme.palette.primary : "none"};`;
    case "secondary": // enabled button, secondary color
      return `1px solid ${theme ? theme.palette.primary : "none"};`;
    default:
      // enabled, but color prop has something different
      return "none;";
  }
  // }
};

const determineColor = ({ color, disabled, theme }) => {
  // if (disabled && color === "primary") {
  //   return "#ffffff";
  // } else if (disabled && color === "secondary") {
  //   return "#8E8E8E";
  // } else if (!disabled) {
  switch (color) {
    case "primary": // enabled button, primary color
      return "none;";
    case "secondary": // enabled button, secondary color
      return `1px solid ${theme ? theme.palette.primary : "none"};`;
    default:
      // enabled, but color prop has something different
      return "none;";
  }
  // }
};

const StyledButton = styled.button`
  margin: 1rem;
  padding: 1rem 1.5rem;
  color: ${(props) => determineColor(props)};
  background-color: ${(props) => determineBackgroundColor(props)};
  border: ${(props) => determineBorder(props)};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.21);

  &:hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.38);
  }

  &:active {
    color: #fff;
    background-color: ${({ color, theme }) =>
      color === "primary" ? "#216021" : `${theme.palette.primary}`};
  }

  &:disabled {
    color: ${({ color }) => (color === "primary" ? "#FFFFFF" : "#8E8E8E")};
    backgroundcolor: ${({ color }) =>
      color === "primary" ? "#939393" : "#E3E3E3"};
    border: none;
  }
`;

const Button = ({ label, children, ...props }) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  onClick: undefined,
};

export default Button;
