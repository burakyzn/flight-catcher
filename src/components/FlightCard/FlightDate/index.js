import InputButton from "components/InputButton";
import Clock from "svg/Clock";
import Calendar from "svg/Calendar";
import { Container } from "./styled";

export default function FlightDate({ date, time }) {
  return (
    <Container>
      <InputButton label="Date" value={date} icon={<Calendar />} disabled />
      <InputButton label="Time" value={time} icon={<Clock />} disabled />
    </Container>
  );
}
