import { Text } from "react-native";
import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
font-family: ${theme.font.body};
font-weight: ${theme.fontWeight.regular};
color: ${theme.color.text.primary};
flex-wrap: wrap;
margin-top: 0px;
margin-bottom: 0px;
`;

const body = (theme) => `font-size: ${theme.fontSize.body}`;

const hint = (theme) => `font-size: ${theme.fontSize.body}`;

const error = (theme) => `color: ${theme.color.text.error}`;

const caption = (theme) =>
  `font-size: ${theme.fontSize.caption}; font-weight: ${theme.fontWeight.bold};`;

const label = (theme) =>
  `font-family: ${theme.font.heading}; font-size: ${theme.fontSize.body}; font-weight: ${theme.fontWeight.medium}`;

const title = (theme) =>
  `font-family: ${theme.font.heading}; font-size: ${theme.fontSize.title}; color: ${theme.color.ui.primary}`;

const subtitle = (theme) =>
  `font-family: ${theme.font.body}; font-size: ${theme.fontSize.body}; color: ${theme.color.ui.secondary}`;

const variants = { body, label, caption, error, hint, title, subtitle };

export const Typography = styled(Text)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Typography.defaultProps = {
  variant: "body",
};
