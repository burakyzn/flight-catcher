import FlightTypeTabs from "./FlightTypeTabs";
import HotOffers from "./HotOffers";
import SearchFlight from "./SearchFlight";
import FullScreenView from "components/FullScreenView";
import { useState } from "react";
import {
  BookingSection,
  FlightTypeSection,
  SearchSection,
  HotOfferSection,
} from "./styled";

export default function Home() {
  const [selectedType, setSelectedType] = useState(0);

  const isReturnFlightDisabled = () => selectedType === 0;

  return (
    <FullScreenView>
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
    </FullScreenView>
  );
}
