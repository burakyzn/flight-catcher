import { useState } from "react";
import { Animated } from "react-native";
import { Container, Tab, TabText, AnimatedView } from "./styled";

export default function FlightTypeTabs(props) {
  const { onChangeType } = props;

  const [activeTab, setActiveTab] = useState(0);
  const [oneWayTabPosition, setOneWayTabPosition] = useState(0);
  const [roundTabPosition, setRoundTabPosition] = useState(0);
  const [multicityTabPosition, setMulticityTabPosition] = useState(0);
  const [animationPosition, setAnimationPosition] = useState(
    new Animated.Value(0)
  );

  const handleSlide = (type) => {
    Animated.spring(animationPosition, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleOnPressTab = (activeTab, position) => {
    setActiveTab(activeTab);
    handleSlide(position);
    onChangeType(activeTab);
  };

  return (
    <Container>
      <AnimatedView
        style={{ transform: [{ translateX: animationPosition }] }}
      />
      <Tab
        onLayout={(event) => setOneWayTabPosition(event.nativeEvent.layout.x)}
        onPress={() => handleOnPressTab(0, oneWayTabPosition)}
      >
        <TabText active={activeTab === 0}>One Way</TabText>
      </Tab>
      <Tab
        onLayout={(event) => setRoundTabPosition(event.nativeEvent.layout.x)}
        onPress={() => handleOnPressTab(1, roundTabPosition)}
      >
        <TabText active={activeTab === 1}>Round</TabText>
      </Tab>
      <Tab
        onLayout={(event) =>
          setMulticityTabPosition(event.nativeEvent.layout.x)
        }
        onPress={() => handleOnPressTab(2, multicityTabPosition)}
      >
        <TabText active={activeTab === 2}>Multicity</TabText>
      </Tab>
    </Container>
  );
}
