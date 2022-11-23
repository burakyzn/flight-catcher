import Carousel from "react-native-anchor-carousel";
import OfferCard from "components/OfferCard";
import hotOffers from "mocks/hotOffers";
import { Dimensions } from "react-native";
import { ClickableCard } from "./styled";

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
