import styled from 'styled-components/native';
import Input from '../Input';
import Button from '../Button';
import { SCREEN } from '../../contants/screen';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function CreditCardEntry() {
  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState(null);
  const [holderName, setHolderName] = useState(null);
  const [CVV, setCVV] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);

  return (
    <View>
      <CreditCard>
        <Input 
          label="Card Number"
          type="numeric"
          value={cardNumber}
          onChange={setCardNumber}
          placeholder="5400 0000 0000 0000"
        />
        <Input 
          label="Card Holder Name"
          value={holderName}
          onChange={setHolderName}
          placeholder="Burak Yazan"
        />
        <Input 
          label="CVV"
          value={CVV}
          onChange={setCVV}
          placeholder="000"
        />
        <Input 
          label="Expiry Date"
          value={expiryDate}
          onChange={setExpiryDate}
          placeholder="02/28"
        />
      </CreditCard>
      <ButtonArea>
        <Button 
          text="Confirm"
          onPress={() => navigation.navigate(SCREEN.boardingPass)}
          />
        <Button 
          text="Cancel"
          backgroundColor="#FFFFFF"
          color="#EC441E"/>
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
