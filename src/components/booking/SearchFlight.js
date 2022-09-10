import styled from 'styled-components/native';
import BookingButton from './BookingButton';
import AirplaneTakeOff from '../svg/AirplaneTakeOff';
import AirplaneLanding from '../svg/AirplaneLanding';
import Calendar from '../svg/Calendar';
import CabinClass from './bottomSheets/CabinClass';
import Traveler from './bottomSheets/Traveler';
import { useCallback, useRef, useState } from 'react'

export default function SearchFlight() {
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

  return (  
    <Container>
      <BookingButton 
        label="From"
        value="Istanbul"
        image={ <AirplaneTakeOff /> }
      />
      <BookingButton 
        label="To"
        value="Berlin"
        image={ <AirplaneLanding /> }
      />
      <DualButtonSection>
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
      </DualButtonSection>
      <DualButtonSection>
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
      </DualButtonSection>
      <SearchButtonSection>
        <SearchButton>
          <ButtonText>Search</ButtonText>
        </SearchButton>
      </SearchButtonSection> 
      <CabinClass modalRef={bottomCabinClassModalRef} onChangeCabinClass={handleChangeCabinClass} />
      <Traveler modalRef={bottomTravelerModalRef} onChangeTraveler={setTraveler} />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  display: flex;
  border-radius: 16px;
  background-color: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const SearchButtonSection = styled.View`
  flex: 1.5;
  padding: 0 16px 16px 16px;
`;

const SearchButton = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #EC441E;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  flex: none;
  flex-grow: 0;
  order: 0;
  font-family: Inter_500Medium;
`;

const DualButtonSection = styled.View`
  flex: 2;
  flex-direction: row;
`;