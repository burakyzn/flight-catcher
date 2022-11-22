import {
  ClickableContainer,
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledPrimaryText,
  StyledSecondaryText,
} from "./styled";

function Button(CustomButton, CustomText, props) {
  const { text, onPress } = props;

  return (
    <ClickableContainer onPress={onPress}>
      <CustomButton>
        <CustomText>{text}</CustomText>
      </CustomButton>
    </ClickableContainer>
  );
}

export const PrimaryButton = (props) =>
  Button(StyledPrimaryButton, StyledPrimaryText, props);
export const SecondaryButton = (props) =>
  Button(StyledSecondaryButton, StyledSecondaryText, props);
