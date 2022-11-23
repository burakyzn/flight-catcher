import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  border-radius: 8px;
  flex-direction: row;
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  background-color: ${(props) => props.theme.backgroundColorSecondary};
`;

const Partner = styled.View`
  flex: 2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColorTertiary};
`;

const Content = styled.View`
  flex: 3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.Text`
  width: 85%;
  font-size: 16px;
  font-family: Inter_500Medium;
  color: ${(props) => props.theme.textColor};
`;

const Description = styled.Text`
  font-size: 16px;
  font-family: Inter_300Light;
  color: ${(props) => props.theme.labelColor};
  width: 85%;
`;

const Rate = styled.Text`
  font-size: 16px;
  font-family: Inter_700Bold;
`;

export { Container, Partner, Content, Title, Description, Rate };
