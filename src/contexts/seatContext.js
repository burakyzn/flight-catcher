import { createContext, useState } from "react";

export const SeatContext = createContext();

export default function SeatProvider(props) {
  const [seat, setSeat] = useState(null);

  return (
    <SeatContext.Provider value={{ seat, setSeat }}>
      {props.children}
    </SeatContext.Provider>
  );
}