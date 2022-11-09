const COLORS = Object.freeze({
  white: "#fff",
  lotion: "#f9fbfa",
  oriolesOrange: "#ec441e",
  platinum: "#e6e8e7",
  eerieBlack: "#191919",
  davyGray: "#555555",
  black: "#000000",
  gray: "#808080",
  lightRed: "#fad3ca",
  desertStorm: "#f2ebe1",
});

export const SEAT_COLOR = Object.freeze({
  reserved: "#d9d9d9",
  selected: "#ec441e",
  extraLegroom: "#7c7270",
  available: "#3177dc0d",
});

export default Object.freeze({
  backgroundColor: COLORS.lotion,
  backgroundColorSecondary: COLORS.white,
  backgroundColorTertiary: COLORS.desertStorm,
  buttonBackgroundColor: COLORS.oriolesOrange,
  buttonColor: COLORS.white,
  buttonBorder: COLORS.platinum,
  textColor: COLORS.eerieBlack,
  textColorSecondary: COLORS.oriolesOrange,
  labelColor: COLORS.davyGray,
  labelColorSecondary: COLORS.black,
  disabled: COLORS.gray,
  tabBarColor: COLORS.lightRed,
});
