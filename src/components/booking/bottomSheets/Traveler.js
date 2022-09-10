import Counter from '../Counter';
import styled from 'styled-components/native';
import { useMemo, useState } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export default function Traveler(props) {
  const { modalRef, onChangeTraveler } = props;
  
  const [adultValue, setAdultValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(0);
  const snapPoints = useMemo(() => ['20%'], [])

  const handleChangeAdult = (count) => {
    let traveler = `${count} Adult, ${childrenValue} Child`;
    onChangeTraveler(traveler);
    setAdultValue(count);
  }

  const handleChangeChildren = (count) => {
    let traveler = `${adultValue} Adult, ${count} Child`;
    onChangeTraveler(traveler);
    setChildrenValue(count);
  }

  return (
    <BottomSheetModal ref={modalRef} index={0} snapPoints={snapPoints}>
      <Title>Traveler</Title>
      <Option>
        <OptionText>Adult</OptionText>
        <Counter value={adultValue} minValue={1} maxValue={5} onChangeValue={handleChangeAdult} />
      </Option>
      <Option>
        <OptionText>Children</OptionText>
        <Counter value={childrenValue} minValue={0} maxValue={5} onChangeValue={handleChangeChildren} />
      </Option>
    </BottomSheetModal>
  )
}

const Title = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 22px;
  text-align: center;
`;

const Option = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 0 20px 0 22px;
`;

const OptionText = styled.Text`
  flex: 1.5;
  font-size: 18px;
  font-family: Inter_500Medium;
  align-self: center;
`;