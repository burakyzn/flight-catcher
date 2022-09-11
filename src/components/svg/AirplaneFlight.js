
import Svg, { Circle, Path } from "react-native-svg"

export default function AirplaneFlight(){
  return (
    <Svg
      width={141}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path stroke="#D0D0D0" d="M2.85 18.031h136" />
      <Circle cx={4.35} cy={18} r={3.5} fill="#D0D0D0" />
      <Circle cx={137.35} cy={18} r={3.5} fill="#D0D0D0" />
      <Circle cx={70.85} cy={18} r={18} fill="#EC441E" />
      <Path
        d="M65.6 26.25h13.5M61.362 13.5h1.613l1.875 2.25h3l-1.172-3.516a.75.75 0 0 1 .713-.984h1.584l4.125 4.5h5.25a3 3 0 0 1 3 3V21H64.83a3 3 0 0 1-2.869-2.137l-1.321-4.397a.748.748 0 0 1 .721-.966v0Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}