import Svg, { Path } from "react-native-svg"

export default function AirplaneSeat(){
  return (
    <Svg
      width={361}
      height={650}
      fill="none"
      style={{
        position: 'absolute',
        bottom: 0,
        zIndex: -1
      }}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="m333 369 27.75 17.5V498L333 488V369ZM28.5 369 .75 386.5V498l27.75-10V369Z"
        fill="#E3E4E5"
      />
      <Path
        d="M17.06 650H344.44s.141-24.21.311-60.719c-1.002-101.302-3.089-297.298-4.564-333.604-.624-15.113-2.94-45.553-10.004-80.326-17.8-68.381-54.596-157.91-126.843-173.12C196.171.859 188.647.092 180.75 0c-7.897.09-15.421.858-22.589 2.232C85.914 17.44 49.118 106.969 31.318 175.35c-7.064 34.773-9.38 65.213-10.004 80.326-1.475 36.306-3.562 232.303-4.564 333.604.17 36.51.31 60.719.31 60.719Z"
        fill="#fff"
      />
      <Path
        d="M82.04 142H65.75l16.29-55.113 18.735 19.331L82.041 142ZM177.75 72.492l-72.902 30.024-20.77-20.153L177.75 40v32.492ZM279.459 142h16.291l-16.291-55.113-18.735 19.331L279.459 142ZM183.75 72.492l72.902 30.024 20.771-20.153L183.75 40v32.492Z"
        fill="#E3E4E5"
      />
    </Svg>
  )
}