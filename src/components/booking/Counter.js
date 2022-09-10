import styled from 'styled-components/native';
import { useState, useEffect } from 'react';

export default function Counter(props) {
  const { value, minValue, maxValue, onChangeValue } = props;

  const [count, setCount] = useState(value);
  
  useEffect(() => {
    onChangeValue(count);
  }, [count])
  
  const handleIncreaseCount = () => {
    setCount(c => c + 1);
  }

  const handleDecreaseCount = () => {
    setCount(c => c - 1);
  }

  const isMaxDisabled = () => maxValue === count;

  const isMinDisabled = () => minValue === count;

  return (
    <Container>
      <Button onPress={handleDecreaseCount} disabled={isMinDisabled()}>
        <Text disabled={isMinDisabled()}>-</Text>
      </Button>
      <Number>
        <Text>{count}</Text>
      </Number>
      <Button onPress={handleIncreaseCount} disabled={isMaxDisabled()}>
        <Text disabled={isMaxDisabled()}>+</Text>
      </Button>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Number = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  font-family: Inter_500Medium;
  color: ${props => props.disabled ? 'gray' : 'black'};;
`;

const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: ${props => props.disabled ? '1px solid gray' : '1px solid black'};
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 50px;
`;