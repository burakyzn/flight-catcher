import Svg, { Path } from "react-native-svg"

export default function AirplaneTakeOff(){
  return(
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1.875 16.875h11.25M1.32 10.969l2.946 2.758a2.5 2.5 0 0 0 2.968.335l11.828-6.874-1.453-1.782a2.5 2.5 0 0 0-3.203-.57l-3.469 2.039L6.25 5.313l-1.289.554a.625.625 0 0 0-.172 1.04l2.399 2.156L5 10.313l-2.187-.938-1.313.563a.625.625 0 0 0-.18 1.03v0Z"
        stroke="#555"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}