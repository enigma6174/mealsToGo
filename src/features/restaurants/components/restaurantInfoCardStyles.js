import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";

export const StyledIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const StyledImage = styled(Image)`
  width: 35px;
  height: 35px;
`;

export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.color.bg.primary};
`;

export const CardCover = styled(CardContainer.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.color.bg.primary};
`;

export const CardTitle = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;

export const HeaderSection = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const FooterSection = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
`;
