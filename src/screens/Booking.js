import styled from "styled-components/native";
import BoardingDetail from "../components/boardingPass/BoardingDetail";
import bookings from "../mocks/bookings";
import Button from "../components/Button";
import { FlatList } from "react-native";

export default function Booking() {
  const renderItem = ({ item }) => (
    <Wrapper>
      <BoardingDetail flight={item} seat={item.seat} />
      <ButtonArea>
        <Button text="Modify" />
      </ButtonArea>
    </Wrapper>
  );

  return (
    <View>
      <FlatList
        style={{ width: "100%" }}
        data={bookings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const View = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: center;
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
