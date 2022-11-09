import styled from "styled-components/native";
import FlightTypeTabs from "../components/booking/FlightTypeTabs";
import HotOffers from "../components/offer/HotOffers";
import SearchFlight from "../components/booking/SearchFlight";
import { useState } from "react";

export default function Home() {
  const [selectedType, setSelectedType] = useState(0);

  const isReturnFlightDisabled = () => selectedType === 0;

  return (
    <Container>
      <BookingSection>
        <FlightTypeSection>
          <FlightTypeTabs onChangeType={setSelectedType} />
        </FlightTypeSection>
        <SearchSection>
          <SearchFlight isDisabledReturnFlight={isReturnFlightDisabled()} />
        </SearchSection>
      </BookingSection>
      <HotOfferSection>
        <HotOffers />
      </HotOfferSection>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
`;

const HotOfferSection = styled.View`
  flex: 2;
  width: 100%;
`;

const BookingSection = styled.View`
  flex: 5;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const FlightTypeSection = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 32px 0 32px;
  margin-top: 16px;
`;

const SearchSection = styled.View`
  flex: 12;
  width: 100%;
  padding: 16px;
`;
