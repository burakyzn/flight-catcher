import {TouchableOpacity, Text} from 'react-native';

export default function TextButton(props) {
  const {text, onPress, containerStyle, textStyle} = props;

  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}