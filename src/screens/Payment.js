import styled from "styled-components/native";
import FlightSummary from "../components/payment/FlightSummary";
import CreditCardEntry from "../components/payment/CreditCardEntry";

export default function Payment() {
  return (
    <View>
      <FlightSummary />
      <CreditCardEntry />
    </View>
  );
}

const View = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  width: 100%;
`;
