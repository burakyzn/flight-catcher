import styled from 'styled-components/native';
import AirplaneFlight from '../svg/AirplaneFlight';

export default function FlightSummary() {
  return (
    <View>
      <Wrapper>
        <Row>
          <Column>
            <Code>TK313</Code>
          </Column>
          <Column>
            <Date>
              15/07/2022
            </Date>
          </Column>
        </Row>
        <Row>
          <Column>
            <Time>10:10</Time>
            <Location>SAW (Istanbul)</Location>
          </Column>
          <AirplaneFlight/>
          <Column>
            <Time textAlign="right">12:10</Time>
            <Location right>BER (Berlin)</Location>
          </Column>
        </Row>
        <Row>
          <Column>
            <PriceText>Total</PriceText>
          </Column>
          <Column>
            <Price>$230</Price>
          </Column>
        </Row>
      </Wrapper>
    </View>
  )
}

const View = styled.View`
  background-color: #F9FBFA;
  height: 225px;
  width: 100%;
`;

const Wrapper = styled.View`
  flex: 1;
  border-radius: 0px 0px 16px 16px;
  background-color: #EEEFEF;
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const Code = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 16px;
  color: #191919;
`;

const Date = styled.Text`
  font-family: Inter_500Medium;
  font-size: 14px;
  line-height: 24px;
  color: #191919;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0 16px 0;
`;

const Column = styled.View`
  justify-content: center;
`;

const Time = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 24px;
  line-height: 24px;
  color: #191919;
  ${props => props.textAlign ? `text-align: ${props.textAlign}` : ''};
`;

const Location = styled.Text`
  font-family: Inter_500Medium;
  line-height: 12px;
  font-size: 16px;
  line-height: 19px;
  color: #191919;
  ${props => props.textAlign ? `text-align: ${props.textAlign}` : ''};
`;

const PriceText = styled.Text`
  font-family: Inter_400Regular;
  font-size: 12px;
  line-height: 20px;
  color: #191919;
`;

const Price = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 22px;
  line-height: 27px;
  text-align: right;
  color: #EC441E;
`;