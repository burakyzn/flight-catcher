import styled from 'styled-components/native';
import FlightTypeTabs from '../components/booking/FlightTypeTabs';
import HotOffers from '../components/offer/HotOffers';
import SearchFlight from '../components/booking/SearchFlight'

export default function Home() {
  return (
    <Container>
      <BookingSection>
        <FlightTypeSection>
          <FlightTypeTabs />
        </FlightTypeSection>
        <SearchSection>
          <SearchFlight />
        </SearchSection>
      </BookingSection>
      <HotOfferSection>
        <HotOffers />
      </HotOfferSection>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: #F9FBFA;
  align-items : center;
  justify-content: center;
`;

const HotOfferSection = styled.View`
  flex: 2;
  width: 100%;
`;

const BookingSection = styled.View`
  flex: 5;
  width: 100%;
  align-items : center;
  justify-content: center;
`;

const FlightTypeSection = styled.View`
  flex:1;
  width: 100%;
  padding: 0 32px 0 32px;
  margin-top: 16px;
`;

const SearchSection = styled.View`
  flex: 12;
  width: 100%;
  padding: 16px;
`;
