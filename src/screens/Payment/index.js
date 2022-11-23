import FullScreenView from "components/FullScreenView";
import FlightSummary from "./FlightSummary";
import CreditCardEntry from "./CreditCardEntry";

export default function Payment() {
  return (
    <FullScreenView>
      <FlightSummary />
      <CreditCardEntry />
    </FullScreenView>
  );
}
