import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function AirplaneLanding(){
  return(
    <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M7.5 16.875h11.25M1.875 8.102v-4.11a.625.625 0 0 1 .82-.594l1.055.352L5 6.094l2.5.781V3.992a.625.625 0 0 1 .82-.594l1.055.352 2.5 4.375 3.797 1.055a2.493 2.493 0 0 1 1.828 2.406v2.789L3.703 10.508a2.492 2.492 0 0 1-1.828-2.406v0Z"
      stroke="#555"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}