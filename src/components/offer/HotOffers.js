import styled from "styled-components/native";
import OfferCarousel from "./OfferCarousel";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../constants/screen";

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

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.Text`
  font-family: Inter_600SemiBold;
  margin-left: 16px;
  font-size: 18px;
  color: black;
`;

const More = styled.Text`
  font-family: Inter_500Medium;
  margin-right: 16px;
  font-size: 18px;
  color: ${(props) => props.theme.textColorSecondary};
`;
