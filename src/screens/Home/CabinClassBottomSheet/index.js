import { useMemo } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Title, Option, OptionText } from "./styled";

export default function CabinClassBottomSheet(props) {
  const { modalRef, onChangeCabinClass } = props;

  const snapPoints = useMemo(() => ["30%"], []);

  return (
    <BottomSheetModal ref={modalRef} index={0} snapPoints={snapPoints}>
      <Title>Cabin Class</Title>
      <Option onPress={() => onChangeCabinClass("Economy")}>
        <OptionText>Economy</OptionText>
      </Option>
      <Option onPress={() => onChangeCabinClass("Premium Economy")}>
        <OptionText>Premium Economy</OptionText>
      </Option>
      <Option onPress={() => onChangeCabinClass("Business")}>
        <OptionText>Business</OptionText>
      </Option>
      <Option onPress={() => onChangeCabinClass("First Class")}>
        <OptionText>First Class</OptionText>
      </Option>
    </BottomSheetModal>
  );
}
