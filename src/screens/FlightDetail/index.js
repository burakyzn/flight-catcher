import Button from "components/Button";
import FlightDetailCard from "components/flightDetail/FlightDetailCard";
import THEME from "constants/theme";
import FullScreenView from "components/FullScreenView";
import { SCREEN } from "constants/screen";
import { useNavigation } from "@react-navigation/native";
import { Card, Row, Column } from "./styled";

export default function FlightDetail() {
  const navigation = useNavigation();

  return (
    <FullScreenView>
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
    </FullScreenView>
  );
}
