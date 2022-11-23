import styled from "styled-components/native";

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

export { Title, Option, OptionText };
