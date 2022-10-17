import styled from 'styled-components/native';
import Input from '../Input';
import Button from '../Button';
import { SCREEN } from '../../contants/screen';
import { useState, useContext, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AlertContext } from '../../contexts/alertContext';


export default function CreditCardEntry() {
  const numberRegex = /^[0-9]+$/;
  const textRegex = /^[a-zA-Z\s]+$/;
  const dateRegex = /^[0-9]*[\/]*[0-9]*$/;
  
  const navigation = useNavigation();
  
  const cardNumberRef = useRef(null);
  const holderNameRef = useRef(null);
  const CVVRef = useRef(null);
  const expiryDateRef = useRef(null);

  const { setAlert } = useContext(AlertContext);
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [CVV, setCVV] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleChangeHolderName = (name) => {
    if(name.length === 0 || textRegex.test(name))
      setHolderName(name.toUpperCase());
  }

  const handleChangeCardNumber = (number) => {
    if(number.length === 0 || numberRegex.test(number))
      setCardNumber(number);
  }

  const handleChangeCVV = (number) => {
    if(number.length === 0 || numberRegex.test(number))
      setCVV(number);
  }

  const handleChangeExpiryDate = (date) => {
    if(date.length === 2 && expiryDate.length !== 3){
      if(numberRegex.test(date))
        setExpiryDate(date + '/');
    } else if(date.length === 2 && expiryDate.length === 3){
      setExpiryDate(date.substring(0,1));
    } else if(date.length > 2){
      if(dateRegex.test(date)) 
        setExpiryDate(date);
    } else if(date.length === 0 || numberRegex.test(date)){
      setExpiryDate(date);
    }
  }

  const cardNumberValidation = () => {
    if(!cardNumberRef.current.isEmpty() || cardNumber.length !== 16){
      setAlert('warning', 'Warning', 'You must enter your 16-character card number.');
      return false;
    }
    return true;
  }

  const holderNameValidation = () => {
    if(!holderNameRef.current.isEmpty()){
      setAlert('warning', 'Warning', 'You must enter card holder name.');
      return false;
    }
    return true;
  }

  const CVVValidation = () => {
    if(!CVVRef.current.isEmpty()){
      setAlert('warning', 'Warning', 'You must enter the 3 character CVV number.');
      return false;
    }
    return true;
  }

  const expiryDateValidation = () => {
    if(!expiryDateRef.current.isEmpty()){
      setAlert('warning', 'Warning', 'You must enter the expiration date of your credit card.');
      return false;
    }
    return true;
  }

  const handleConfirmButton = () => {
    if(!cardNumberRef.current.validate()) return;
    if(!holderNameRef.current.validate()) return;
    if(!CVVRef.current.validate()) return;
    if(!expiryDateRef.current.validate()) return;

    navigation.navigate(SCREEN.boardingPass);
  }

  const handleCancelButton = () => {
    navigation.navigate(SCREEN.searchResult)
  }

  return (
    <View>
      <CreditCard>
        <Input 
          label="Card Number"
          type="numeric"
          value={cardNumber}
          onChange={handleChangeCardNumber}
          placeholder="5400 0000 0000 0000"
          maxLength={16}
          validation={cardNumberValidation}
          ref={cardNumberRef}
        />
        <Input 
          label="Card Holder Name"
          value={holderName}
          onChange={handleChangeHolderName}
          placeholder="BURAK YAZAN"
          maxLength={30}
          validation={holderNameValidation}
          ref={holderNameRef}
        />
        <Input 
          label="CVV"
          type="numeric"
          value={CVV}
          onChange={handleChangeCVV}
          placeholder="000"
          maxLength={3}
          validation={CVVValidation}
          ref={CVVRef}
        />
        <Input 
          label="Expiry Date"
          value={expiryDate}
          onChange={handleChangeExpiryDate}
          placeholder="02/28"
          maxLength={5}
          validation={expiryDateValidation}
          ref={expiryDateRef}
        />
      </CreditCard>
      <ButtonArea>
        <Button 
          text="Confirm"
          onPress={handleConfirmButton}
          />
        <Button 
          text="Cancel"
          backgroundColor="#FFFFFF"
          color="#EC441E"
          onPress={handleCancelButton}
          />
      </ButtonArea>
    </View>
  )
}

const View = styled.View`
  flex:1;
  width: 100%;
`;

const CreditCard = styled.View`
  width: 100%;
  padding: 32px
`;

const ButtonArea = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 32px 0 32px;
`;
