import styled from 'styled-components/native';
import offers from '../mocks/offers';
import OfferCard from '../components/offer/OfferCard';
import { View, FlatList } from 'react-native';

export default function Offer(){
  const renderItem = ({ item }) => (
    <ClickableCard>
      <OfferCard 
        rate={item.rate}
        title={item.title}
        description={item.description}
        logo={item.logo}
      />
    </ClickableCard>
  );

  return (
    <View>
      <FlatList
        data={offers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const ClickableCard = styled.TouchableOpacity`
  padding: 16px;
  height: 200px;
`;