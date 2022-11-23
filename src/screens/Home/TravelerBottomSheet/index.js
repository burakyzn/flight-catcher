import Counter from "../Counter";
import { useMemo, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Title, Option, OptionText } from "./styled";

export default function TravelerBottomSheet(props) {
  const { modalRef, onChangeTraveler } = props;

  const [adultValue, setAdultValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(0);
  const snapPoints = useMemo(() => ["20%"], []);

  const handleChangeAdult = (count) => {
    let traveler = `${count} Adult, ${childrenValue} Child`;
    onChangeTraveler(traveler);
    setAdultValue(count);
  };

  const handleChangeChildren = (count) => {
    let traveler = `${adultValue} Adult, ${count} Child`;
    onChangeTraveler(traveler);
    setChildrenValue(count);
  };

  return (
    <BottomSheetModal ref={modalRef} index={0} snapPoints={snapPoints}>
      <Title>Traveler</Title>
      <Option>
        <OptionText>Adult</OptionText>
        <Counter
          value={adultValue}
          minValue={1}
          maxValue={5}
          onChangeValue={handleChangeAdult}
        />
      </Option>
      <Option>
        <OptionText>Children</OptionText>
        <Counter
          value={childrenValue}
          minValue={0}
          maxValue={5}
          onChangeValue={handleChangeChildren}
        />
      </Option>
    </BottomSheetModal>
  );
}
