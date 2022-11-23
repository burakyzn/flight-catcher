import { useState, useEffect } from "react";
import { Container, Number, Text, Button } from "./styled";

export default function Counter(props) {
  const { value, minValue, maxValue, onChangeValue } = props;

  const [count, setCount] = useState(value);

  useEffect(() => {
    onChangeValue(count);
  }, [count]);

  const handleIncreaseCount = () => {
    setCount((c) => c + 1);
  };

  const handleDecreaseCount = () => {
    setCount((c) => c - 1);
  };

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
  );
}
