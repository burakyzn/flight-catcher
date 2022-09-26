import {View, Text} from 'react-native';

export default function TextButton(props) {
  const {text, onPress, containerStyle, textStyle} = props;

  return (
    <View onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}