import styled from "styled-components/native";

const Card = styled.View`
  width: 100%;
`;

const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 0px 16px;
`;

const Column = styled.View`
  height: 80px;
  width: 49%;
`;

export { Card, Row, Column };
