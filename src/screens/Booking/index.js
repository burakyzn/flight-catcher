import BoardingDetail from "../../components/boardingPass/BoardingDetail";
import bookings from "../../mocks/bookings";
import Button from "../../components/Button";
import { FlatList } from "react-native";
import { Container, Wrapper, ButtonArea } from "./styled";

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
    <Container>
      <FlatList
        style={{ width: "100%" }}
        data={bookings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
