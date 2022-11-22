import searchResult from "../../mocks/searchResult";
import FlightCard from "../../components/searchResult/FlightCard";
import FullScreenView from "../../components/FullScreenView";
import { StyledFlatList } from "./styled";

export default function SearchResult() {
  const renderItem = ({ item }) => <FlightCard flight={item} />;

  return (
    <FullScreenView>
      <StyledFlatList
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </FullScreenView>
  );
}
