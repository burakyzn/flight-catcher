import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; 

function BackButton() {
  return <Icon name="arrow-back-ios" size={24} color="black"/>
}

const Icon = styled(MaterialIcons)`
  margin-left: 20px
`;

export default BackButton;