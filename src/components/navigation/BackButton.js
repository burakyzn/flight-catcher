import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function BackButton() {
  const navigation = useNavigation();

  return(
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-back-ios" size={24} color="black"/>
    </TouchableOpacity>
  )
}

const Icon = styled(MaterialIcons)`
  margin-left: 20px
`;