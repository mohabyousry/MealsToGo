import React from "react";
import { FlatList } from "react-native";
import { SafeArea } from "../../../components/safe-area.component";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { styled } from "styled-components/native";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondry};
  padding: ${(props) => props.theme.space[3]};
`;
const ListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[0]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
    <ListContainer></ListContainer>
  </SafeArea>
);
