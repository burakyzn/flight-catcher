import styled from "styled-components/native";
import Button from "../components/Button";
import FlightDetailCard from "../components/flightDetail/FlightDetailCard";
import THEME from "../contants/theme";
import { SCREEN } from "../contants/screen";
import { useNavigation } from "@react-navigation/native";

export default function FlightDetail() {
  const navigation = useNavigation();

  return (
    <View>
      <Card>
        <FlightDetailCard />
      </Card>
      <Row>
        <Column>
          <Button
            text="Cancel"
            backgroundColor={THEME.backgroundColorSecondary}
            color={THEME.textColorSecondary}
            onPress={() => navigation.goBack()}
          />
        </Column>
        <Column>
          <Button
            onPress={() => navigation.navigate(SCREEN.seatSelection)}
            text="Confirm"
          />
        </Column>
      </Row>
    </View>
  );
}

const View = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Card = styled.View`
  width: 100%;
`;

const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 0px 16px;
`;

const Column = styled.View`
  height: 80px;
  width: 49%;
`;
