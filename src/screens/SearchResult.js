import styled from "styled-components/native";
import searchResult from "../mocks/searchResult";
import FlightCard from "../components/searchResult/FlightCard";
import { FlatList } from "react-native";

export default function SearchResult() {
  const renderItem = ({ item }) => <FlightCard flight={item} />;

  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const View = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
`;
