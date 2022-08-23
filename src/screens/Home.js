import styled from 'styled-components/native';
import HotOffers from '../components/offer/HotOffers';

export default function Home() {
  return (
    <Container>
      <BookingSection>
        <Book>Book Flight</Book>
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

const Book = styled.Text`
  text-align: center;
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
