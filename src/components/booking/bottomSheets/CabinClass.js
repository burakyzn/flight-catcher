import styled from 'styled-components/native';
import { useMemo } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export default function CabinClass(props) {
  const { modalRef, onChangeCabinClass } = props;
  
  const snapPoints = useMemo(() => ['30%'], [])

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
  )
}

const Title = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 22px;
  text-align:center;
`;

const Option = styled.TouchableOpacity`
  flex: 3;
`;

const OptionText = styled.Text`
  font-size: 18px;
  margin-left: 22px;
`;
