import { createContext, useState } from "react";

export const FlightContext = createContext();

export default function FlightProvider(props) {
  const [flight, setFlight] = useState(null);

  return (
    <FlightContext.Provider value={{ flight, setFlight }}>
      {props.children}
    </FlightContext.Provider>
  );
}