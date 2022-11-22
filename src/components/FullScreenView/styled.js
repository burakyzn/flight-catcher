import styled from "styled-components/native";

const FullScreenView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export { FullScreenView };
