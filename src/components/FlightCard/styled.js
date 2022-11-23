import styled from "styled-components/native";

const Container = styled.View`
  height: ${(props) => props.height};
  padding: 16px;
`;

const Wrapper = styled.View`
  flex: 1;
  border-radius: 16px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

export { Container, Wrapper };
