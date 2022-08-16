import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text, View } from "react-native";

const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.color.bg.primary};
`;

const CardCover = styled(CardContainer.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.color.bg.primary};
`;

const CardTitle = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.font.heading};
  font-size: ${(props) => props.theme.font.fontSize.title};
  color: ${(props) => props.theme.color.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.font.body};
  font-size: ${(props) => props.theme.font.fontSize.body};
  color: ${(props) => props.theme.color.ui.secondary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "The Burger Story",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "One Plaza Street, NY",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <>
      <CardContainer>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <CardTitle>
          <Title>{name}</Title>
          <Address>{address}</Address>
        </CardTitle>
      </CardContainer>
    </>
  );
};
