import Svg, { Path } from "react-native-svg"

export default function Clock(){
  return(
    <Svg
      width={21}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.3 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z"
        stroke="#555"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3 5v5h3.75"
        stroke="#555"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
