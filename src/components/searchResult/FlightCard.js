import styled from "styled-components/native";
import Button from "../Button";
import AirplaneFlight from "../svg/AirplaneFlight";
import { useContext } from "react";
import { FlightContext } from "../../contexts/flightContext";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../contants/screen";

export default function FlightCard(params) {
  const { flight } = params;
  const navigation = useNavigation();
  const { setFlight } = useContext(FlightContext);

  const handleCheckButton = () => {
    setFlight(flight);
    navigation.navigate(SCREEN.flightDetail);
  };

  return (
    <View>
      <Wrapper>
        <Row>
          <Column>
            <Code>{flight.code}</Code>
          </Column>
          <Column>
            <FlightTime>{flight.flightTime}</FlightTime>
          </Column>
        </Row>
        <Row>
          <Column>
            <Time>{flight.departureTime}</Time>
            <Location>{flight.from}</Location>
          </Column>
          <AirplaneFlight />
          <Column>
            <Time textAlign="right">{flight.arrivalTime}</Time>
            <Location>{flight.to}</Location>
          </Column>
        </Row>
        <Row>
          <Column>
            <CabinClass>{flight.cabinClass}</CabinClass>
          </Column>
          <Column>
            <Price>From {flight.price}</Price>
          </Column>
        </Row>
        <Button text="Check" onPress={handleCheckButton} />
      </Wrapper>
    </View>
  );
}

const View = styled.View`
  height: 300px;
  padding: 16px;
`;

const Wrapper = styled.View`
  flex: 1;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0 16px 0;
`;

const Column = styled.View`
  justify-content: center;
`;

const Code = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 16px;
  color: #191919;
`;

const FlightTime = styled.Text`
  font-family: Inter_500Medium;
  font-size: 12px;
  line-height: 16px;
  color: #555555;
`;

const Time = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  ${(props) => props.textAlign && `text-align : ${props.textAlign}`}
`;

const Location = styled.Text`
  font-family: Inter_500Medium;
  font-size: 12px;
  color: #555555;
  line-height: 12px;
`;

const CabinClass = styled.Text`
  font-family: Inter_400Regular;
  font-size: 14px;
  line-height: 16px;
  color: #555555;
`;

const Price = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
`;
