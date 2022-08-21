import styled from 'styled-components/native';

export default function HeaderTitle({title}) {
  return <Text>{title}</Text>
}

const Text = styled.Text`
  font-family: Inter_500Medium;
  font-size: 20px;
`;