import styled from 'styled-components/native';
import BookingButton from './BookingButton';
import AirplaneTakeOff from '../svg/AirplaneTakeOff';
import AirplaneLanding from '../svg/AirplaneLanding';
import Calendar from '../svg/Calendar';
import CabinClass from './bottomSheets/CabinClass';
import Traveler from './bottomSheets/Traveler';
import Button from '../Button';
import { useCallback, useRef, useState } from 'react';
import { PAGES } from '../../contants/pages';
import { useNavigation } from '@react-navigation/native';

export default function SearchFlight(props) {
  const { isDisabledReturnFlight } = props;

  const navigation = useNavigation();
  const bottomCabinClassModalRef = useRef(null);
  const bottomTravelerModalRef = useRef(null);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [traveler, setTraveler] = useState("1 Adult, 0 Child");

  const handleCabinClassModalPress = useCallback(() => {
    bottomCabinClassModalRef.current?.present()
  }, [])

  const handleTravelerModalPress = useCallback(() => {
    bottomTravelerModalRef.current?.present()
  }, [])

  const handleChangeCabinClass = (cabinClass) => {
    setCabinClass(cabinClass);
    bottomCabinClassModalRef.current?.close();
  }

  const handleSearch = () => {
    navigation.navigate(PAGES.searchResult);
  };

  return (  
    <View>
      <BookingButton 
        label="From"
        value="Istanbul"
        image={ <AirplaneTakeOff /> }
      />
      <BookingButton 
        label="To"
        value="Berlin"
        image={ <AirplaneLanding /> }
        disabled={ isDisabledReturnFlight }
      />
      <Row>
        <BookingButton 
          label="Departure"
          value="15/10/2022"
          image={ <Calendar /> }
          style={{ marginRight: 10 }}
        />
        <BookingButton 
          label="Return"
          value="15/11/2022"
          image={ <Calendar /> }
        />
      </Row>
      <Row>
        <BookingButton 
          label="Traveler"
          value={traveler}
          onPress={handleTravelerModalPress}
          style={{ marginRight: 10 }}
        />
        <BookingButton 
          label="Class"
          value={cabinClass}
          onPress={handleCabinClassModalPress}
        />
      </Row>
      <Button text={"Search"} onPress={handleSearch} />
      <CabinClass modalRef={bottomCabinClassModalRef} onChangeCabinClass={handleChangeCabinClass} />
      <Traveler modalRef={bottomTravelerModalRef} onChangeTraveler={setTraveler} />
    </View>
  )
}

const View = styled.View`
  flex: 1;
  display: flex;
  border-radius: 16px;
  background-color: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const Row = styled.View`
  flex: 2;
  flex-direction: row;
`;