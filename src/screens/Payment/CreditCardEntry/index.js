import TextInput from "components/TextInput";
import { PrimaryButton, SecondaryButton } from "components/Button";
import { SCREEN } from "constants/screen";
import { useState, useContext, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { AlertContext } from "contexts/alertContext";
import { Container, CreditCard, ButtonArea } from "./styled";

export default function CreditCardEntry() {
  const NUMBER_REGEX = /^[0-9\s]+$/;
  const STRING_REGEX = /^[a-zA-Z\s]+$/;
  const EXPIRY_DATE_REGEX = /^[0-9]{0,2}([\/][0-9]{0,2}){0,1}$/;
  const SPACE_REGEX = /\s/g;
  const SLASH_REGEX = /\//g;
  const FOUR_CHARACTERS_REGEX = /(.{4})/g;
  const TWO_CHARACTERS_REGEX = /(.{2})/g;

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

  const handleChangeCardNumber = (number) => {
    if (number.length === 0 || NUMBER_REGEX.test(number))
      setCardNumber(
        number
          .replace(SPACE_REGEX, "")
          .replace(FOUR_CHARACTERS_REGEX, "$1 ")
          .trim()
      );
  };

  const handleChangeHolderName = (name) => {
    if (name.length === 0 || STRING_REGEX.test(name))
      setHolderName(name.toUpperCase());
  };

  const handleChangeCVV = (number) => {
    if (number.length === 0 || NUMBER_REGEX.test(number)) setCVV(number.trim());
  };

  const handleChangeExpiryDate = (date) => {
    let formattedDate = date;

    if (formattedDate.length === 3)
      formattedDate = formattedDate
        .replace(SLASH_REGEX, "")
        .replace(TWO_CHARACTERS_REGEX, "$1/")
        .trim();

    if (EXPIRY_DATE_REGEX.test(formattedDate)) setExpiryDate(formattedDate);
  };

  const cardNumberValidation = () => {
    if (!cardNumberRef.current.isEmpty() || cardNumber.length !== 19) {
      setAlert(
        "warning",
        "Warning",
        "You must enter your 16-character card number."
      );
      return false;
    }
    return true;
  };

  const holderNameValidation = () => {
    if (!holderNameRef.current.isEmpty()) {
      setAlert("warning", "Warning", "You must enter card holder name.");
      return false;
    }
    return true;
  };

  const CVVValidation = () => {
    if (!CVVRef.current.isEmpty()) {
      setAlert(
        "warning",
        "Warning",
        "You must enter the 3 character CVV number."
      );
      return false;
    }
    return true;
  };

  const expiryDateValidation = () => {
    if (!expiryDateRef.current.isEmpty()) {
      setAlert(
        "warning",
        "Warning",
        "You must enter the expiration date of your credit card."
      );
      return false;
    }
    return true;
  };

  const handleConfirmButton = () => {
    if (!cardNumberRef.current.validate()) return;
    if (!holderNameRef.current.validate()) return;
    if (!CVVRef.current.validate()) return;
    if (!expiryDateRef.current.validate()) return;

    navigation.navigate(SCREEN.boardingPass);
  };

  const handleCancelButton = () => {
    navigation.navigate(SCREEN.searchResult);
  };

  return (
    <Container>
      <CreditCard>
        <TextInput
          label="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={handleChangeCardNumber}
          placeholder="5400 0000 0000 0000"
          maxLength={19}
          validation={cardNumberValidation}
          ref={cardNumberRef}
        />
        <TextInput
          label="Card Holder Name"
          value={holderName}
          onChangeText={handleChangeHolderName}
          placeholder="BURAK YAZAN"
          maxLength={30}
          validation={holderNameValidation}
          ref={holderNameRef}
        />
        <TextInput
          label="CVV"
          keyboardType="numeric"
          value={CVV}
          onChangeText={handleChangeCVV}
          placeholder="000"
          maxLength={3}
          validation={CVVValidation}
          ref={CVVRef}
        />
        <TextInput
          label="Expiry Date"
          value={expiryDate}
          onChangeText={handleChangeExpiryDate}
          placeholder="02/28"
          maxLength={5}
          validation={expiryDateValidation}
          ref={expiryDateRef}
        />
      </CreditCard>
      <ButtonArea>
        <PrimaryButton text="Confirm" onPress={handleConfirmButton} />
        <SecondaryButton text="Cancel" onPress={handleCancelButton} />
      </ButtonArea>
    </Container>
  );
}
