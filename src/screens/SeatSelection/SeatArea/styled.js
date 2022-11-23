import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 480px;
  padding: 0 60px 0 60px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Side = styled.View`
  flex-direction: row;
`;

const Column = styled.View`
  margin: 0 10px 0 10px;
`;

export { Container, Row, Side, Column };
