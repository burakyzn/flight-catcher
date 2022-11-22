import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Wrapper = styled.View`
  height: 420px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
  margin: 16px;
`;

const ButtonArea = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 10px;
`;

export { Container, Wrapper, ButtonArea };
