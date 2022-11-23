import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  padding: 16px 0 16px 0;
`;

const Wrapper = styled.View`
  justify-content: center;
  width: 50%;
`;

const StyledText = styled.Text`
  font-family: Inter_300Light;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.labelColor};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

export { Container, Wrapper, StyledText };
