import AirplaneSeat from "../../components/svg/AirplaneSeat";
import Information from "../../components/seatSelection/Information";
import SeatArea from "../../components/seatSelection/SeatArea";
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
