import Carousel from "react-native-anchor-carousel";
import OfferCard from "components/OfferCard";
import styled from "styled-components/native";
import hotOffers from "mocks/hotOffers";
import { Dimensions } from "react-native";

const { width: windowWidth } = Dimensions.get("window");

export default function OfferCarousel() {
  const renderItem = ({ item }) => {
    return (
      <ClickableCard>
        <OfferCard
          rate={item.rate}
          title={item.title}
          description={item.description}
          logo={item.logo}
        />
      </ClickableCard>
    );
  };

  return (
    <Carousel
      data={hotOffers}
      renderItem={renderItem}
      itemWidth={windowWidth * 0.85}
      containerWidth={windowWidth}
      separatorWidth={0}
    />
  );
}

const ClickableCard = styled.TouchableOpacity`
  flex-grow: 0;
  height: 100%;
  padding: 16px;
`;
