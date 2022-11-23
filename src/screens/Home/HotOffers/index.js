import OfferCarousel from "../OfferCarousel";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "constants/screen";
import { Container, Header, Title, More } from "./styled";

export default function HotOffers() {
  const navigation = useNavigation();

  const handleSeeAllButton = () => {
    navigation.navigate(SCREEN.offer);
  };

  return (
    <Container>
      <Header>
        <Title>Hot Offers</Title>
        <TouchableOpacity onPress={handleSeeAllButton}>
          <More>See All</More>
        </TouchableOpacity>
      </Header>
      <OfferCarousel />
    </Container>
  );
}
