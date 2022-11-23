import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.Text`
  font-family: Inter_600SemiBold;
  margin-left: 16px;
  font-size: 18px;
  color: black;
`;

const More = styled.Text`
  font-family: Inter_500Medium;
  margin-right: 16px;
  font-size: 18px;
  color: ${(props) => props.theme.textColorSecondary};
`;

export { Container, Header, Title, More };
