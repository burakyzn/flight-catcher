import FlightDetailCard from "components/flightDetail/FlightDetailCard";
import FullScreenView from "components/FullScreenView";
import { SCREEN } from "constants/screen";
import { useNavigation } from "@react-navigation/native";
import { Card, Row, Column } from "./styled";
import { PrimaryButton, SecondaryButton } from "components/Button";

export default function FlightDetail() {
  const navigation = useNavigation();

  return (
    <FullScreenView>
      <Card>
        <FlightDetailCard />
      </Card>
      <Row>
        <Column>
          <SecondaryButton text="Cancel" onPress={() => navigation.goBack()} />
        </Column>
        <Column>
          <PrimaryButton
            onPress={() => navigation.navigate(SCREEN.seatSelection)}
            text="Confirm"
          />
        </Column>
      </Row>
    </FullScreenView>
  );
}
