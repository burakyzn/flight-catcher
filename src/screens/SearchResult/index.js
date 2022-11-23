import searchResult from "mocks/searchResult";
import FlightCard from "components/FlightCard";
import FullScreenView from "components/FullScreenView";
import { StyledFlatList } from "./styled";
import { PrimaryButton } from "components/Button";
import { useContext } from "react";
import { FlightContext } from "contexts/flightContext";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "constants/screen";

export default function SearchResult() {
  const navigation = useNavigation();
  const { setFlight } = useContext(FlightContext);

  const handleCheckButton = (flight) => {
    setFlight(flight);
    navigation.navigate(SCREEN.flightDetail);
  };

  const renderItem = ({ item }) => (
    <FlightCard height="300px">
      <FlightCard.Code code={item.code} time={item.flightTime} />
      <FlightCard.Destination
        departureTime={item.departureTime}
        arrivalTime={item.arrivalTime}
        from={item.from}
        to={item.to}
      />
      <FlightCard.Price text={item.cabinClass} value={item.price} />
      <PrimaryButton text="Check" onPress={() => handleCheckButton(item)} />
    </FlightCard>
  );

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
