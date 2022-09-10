import Counter from '../Counter';
import styled from 'styled-components/native';
import { useMemo } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export default function Traveler(props) {
  const { modalRef } = props;
  
  const snapPoints = useMemo(() => ['20%'], [])

  return (
    <BottomSheetModal ref={modalRef} index={0} snapPoints={snapPoints}>
      <Title>Traveler</Title>
      <Option>
        <OptionText>Adult</OptionText>
        <Counter value={1} minValue={0} maxValue={5}/>
      </Option>
      <Option>
        <OptionText>Children</OptionText>
        <Counter value={0} minValue={0} maxValue={5}/>
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