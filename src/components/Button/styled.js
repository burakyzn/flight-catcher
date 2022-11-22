import styled from "styled-components/native";

const ClickableContainer = styled.TouchableOpacity`
  flex: 1;
  padding-bottom: 16px;
`;

const StyledPrimaryText = styled.Text`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-family: Inter_500Medium;
  color: ${(props) => props.theme.buttonColor};
`;

const StyledSecondaryText = styled.Text`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-family: Inter_500Medium;
  color: ${(props) => props.theme.textColorSecondary};
`;

const StyledPrimaryButton = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const StyledSecondaryButton = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: ${(props) => `1px solid ${props.theme.textColorSecondary}`};
`;

export {
  ClickableContainer,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledPrimaryText,
  StyledSecondaryText,
};
