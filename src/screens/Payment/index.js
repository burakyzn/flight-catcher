import FlightSummary from "components/payment/FlightSummary";
import CreditCardEntry from "components/payment/CreditCardEntry";
import FullScreenView from "components/FullScreenView";

export default function Payment() {
  return (
    <FullScreenView>
      <FlightSummary />
      <CreditCardEntry />
    </FullScreenView>
  );
}
