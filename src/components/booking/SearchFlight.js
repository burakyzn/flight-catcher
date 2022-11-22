import styled from "styled-components/native";
import InputButton from "components/InputButton";
import AirplaneTakeOff from "components//svg/AirplaneTakeOff";
import AirplaneLanding from "components//svg/AirplaneLanding";
import Calendar from "components/svg/Calendar";
import CabinClass from "./bottomSheets/CabinClass";
import Traveler from "./bottomSheets/Traveler";
import { PrimaryButton } from "components//Button";
import { useCallback, useRef, useState } from "react";
import { SCREEN } from "constants/screen";
import { useNavigation } from "@react-navigation/native";

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
    <View>
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
      <CabinClass
        modalRef={bottomCabinClassModalRef}
        onChangeCabinClass={handleChangeCabinClass}
      />
      <Traveler
        modalRef={bottomTravelerModalRef}
        onChangeTraveler={setTraveler}
      />
    </View>
  );
}

const View = styled.View`
  flex: 1;
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const Row = styled.View`
  flex: 2;
  flex-direction: row;
`;
