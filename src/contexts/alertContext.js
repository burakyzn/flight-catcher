import DropdownAlert from 'react-native-dropdownalert';
import { createContext, useRef } from "react";

export const AlertContext = createContext();

export default function AlertProvider(props) {
  let alertRef = useRef();

  const setAlert = (type, title, description) => {
    alertRef.alertWithType(type, title, description);
  }

  return (
    <AlertContext.Provider value={{ setAlert }}>
      {props.children}
      <DropdownAlert
        ref={(ref) => {
          if (ref) {
            alertRef = ref;
          }
        }}
      />
    </AlertContext.Provider>
  );
}