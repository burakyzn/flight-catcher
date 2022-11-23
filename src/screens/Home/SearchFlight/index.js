import InputButton from "components/InputButton";
import AirplaneTakeOff from "svg/AirplaneTakeOff";
import AirplaneLanding from "svg/AirplaneLanding";
import Calendar from "svg/Calendar";
import CabinClassBottomSheet from "../CabinClassBottomSheet";
import TravelerBottomSheet from "../TravelerBottomSheet";
import { PrimaryButton } from "components//Button";
import { useCallback, useRef, useState } from "react";
import { SCREEN } from "constants/screen";
import { useNavigation } from "@react-navigation/native";
import { Container, Row } from "./styled";

export default function SearchFlight(props) {
  const { isDisabledReturnFlight } = props;

  const navigation = useNavigation();
  const bottomCabinClassModalRef = useRef(null);
  const bottomTravelerModalRef = useRef(null);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [traveler, setTraveler] = useState("1 Adult, 0 Child");

  const handleCabinClassModalPress = useCallback(() => {
    bottomCabinClassModalRef.current?.present();
  }, []);

  const handleTravelerModalPress = useCallback(() => {
    bottomTravelerModalRef.current?.present();
  }, []);

  const handleChangeCabinClass = (cabinClass) => {
    setCabinClass(cabinClass);
    bottomCabinClassModalRef.current?.close();
  };

  const handleSearch = () => {
    bottomTravelerModalRef.current?.close();
    bottomCabinClassModalRef.current?.close();
    navigation.navigate(SCREEN.searchResult);
  };

  return (
    <Container>
      <InputButton label="From" value="Istanbul" icon={<AirplaneTakeOff />} />
      <InputButton
        label="To"
        value="Berlin"
        icon={<AirplaneLanding />}
        disabled={isDisabledReturnFlight}
      />
      <Row>
        <InputButton label="Departure" value="15/10/2022" icon={<Calendar />} />
        <InputButton label="Return" value="15/11/2022" icon={<Calendar />} />
      </Row>
      <Row>
        <InputButton
          label="Traveler"
          value={traveler}
          onPress={handleTravelerModalPress}
        />
        <InputButton
          label="Class"
          value={cabinClass}
          onPress={handleCabinClassModalPress}
        />
      </Row>
      <PrimaryButton text={"Search"} onPress={handleSearch} />
      <CabinClassBottomSheet
        modalRef={bottomCabinClassModalRef}
        onChangeCabinClass={handleChangeCabinClass}
      />
      <TravelerBottomSheet
        modalRef={bottomTravelerModalRef}
        onChangeTraveler={setTraveler}
      />
    </Container>
  );
}
