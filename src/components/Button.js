import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  margin: 1rem;
  padding: 1rem 1.5rem;
  pointer: cursor;
  color: ${(props) =>
    props.color === "primary" ? "#ffffff" : props.theme.palette.primary};
  background-color: ${(props) =>
    props.color === "primary" ? props.theme.palette.primary : "transparent"};
  border: ${(props) =>
    props.color === "primary"
      ? "none"
      : "1px solid " + props.theme.palette.primary};
  border-radius: 6px;
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

export const Button = ({ label, ...props }) => (
  <StyledButton type="button" {...props}>
    {label}
  </StyledButton>
);

Button.propTypes = {
  primary: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  onClick: undefined,
};
