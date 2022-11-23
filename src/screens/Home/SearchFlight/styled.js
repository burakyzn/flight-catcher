import styled from "styled-components/native";

const View = styled.View`
  flex: 1;
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const Row = styled.View`
  flex: 2;
  flex-direction: row;
`;

export { View, Row };
