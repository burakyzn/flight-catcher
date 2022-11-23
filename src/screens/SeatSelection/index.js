import AirplaneSeat from "svg/AirplaneSeat";
import Information from "./Information";
import SeatArea from "./SeatArea";
import { CustomFullScreenView } from "./styled";

export default function SeatSelection() {
  return (
    <CustomFullScreenView>
      <Information />
      <SeatArea />
      <AirplaneSeat />
    </CustomFullScreenView>
  );
}
