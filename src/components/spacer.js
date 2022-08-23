import React from "react";
import styled, { useTheme } from "styled-components/native";
import { View } from "react-native";

const sizeObject = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionObject = {
  top: "marginTop",
  right: "marginRight",
  left: "marginLeft",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const index = sizeObject[size];
  const property = positionObject[position];
  const value = theme.space[index];
  return `${property}: ${value}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
