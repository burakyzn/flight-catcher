import {
  Container,
  Partner,
  Content,
  Title,
  Description,
  Rate,
} from "./styled";

export default function OfferCard({ logo, rate, title, description }) {
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
