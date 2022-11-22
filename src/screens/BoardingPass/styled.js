import styled from "styled-components/native";
import FullScreenView from "../../components/FullScreenView";

const CustomFullScreenView = styled(FullScreenView)`
  padding: 32px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  padding: 16px 0 16px 0;
`;

const ButtonArea = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 20px;
`;

export { CustomFullScreenView, Row, ButtonArea };
