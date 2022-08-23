import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Spacer } from "../../../components/spacer";
import { Typography } from "../../../components/typography";
import {
  CardContainer,
  CardCover,
  CardTitle,
  HeaderSection,
  FooterSection,
  StyledIcon,
  StyledImage,
  Rating,
} from "./restaurantInfoCardStyles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "The Burger Story",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "One Plaza Street, NY",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <>
      <CardContainer>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <CardTitle>
          <HeaderSection>
            <Spacer position="right" size="medium">
              <Typography variant="title">{name}</Typography>
            </Spacer>
            <Spacer position="top" size="small">
              <StyledIcon source={{ uri: icon }} />
            </Spacer>
          </HeaderSection>
          <Typography variant="subtitle">{address}</Typography>
          <FooterSection>
            <Rating>
              {[...Array(Math.floor(rating))].map((_, i) => (
                <MaterialIcons key={i} name="star" size={24} color="gold" />
              ))}
            </Rating>
            {isClosedTemporarily && (
              <Spacer position="top" size="small">
                <Typography variant="error">CLOSED TEMPORARILY</Typography>
              </Spacer>
            )}
            {isOpenNow && (
              <StyledImage
                source={{
                  uri: "https://i.postimg.cc/hGSrxV0Q/open-sign-svgrepo-com.png",
                }}
              />
            )}
          </FooterSection>
        </CardTitle>
      </CardContainer>
    </>
  );
};
