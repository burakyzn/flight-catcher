import styled from "styled-components/native";

export default function OfferCard(props) {
  const { logo, rate, title, description } = props;

  return (
    <Container>
      <Partner>
        {logo}
        <Rate>{rate}</Rate>
      </Partner>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  border-radius: 8px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  flex-direction: row;
`;

const Partner = styled.View`
  flex: 2;
  background-color: ${(props) => props.theme.backgroundColorTertiary};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  flex: 3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: Inter_500Medium;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  width: 85%;
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
