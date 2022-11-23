import styled from "styled-components/native";
import { Animated } from "react-native";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const TabText = styled.Text`
  font-size: 14px;
  font-family: Inter_400Regular;
  color: ${(props) =>
    props.active ? props.theme.buttonColor : props.theme.disabled};
`;

const AnimatedView = styled(Animated.View)`
  position: absolute;
  width: 33%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  border-radius: 32px;
`;

export { Container, Tab, TabText, AnimatedView };
