import { createContext, useContext } from "react";


// create context
const AppointmentContext = createContext();

// custom hook - optional
export const useAppointment = () => useContext(AppointmentContext);

export default function AppointmentProvider({ children }) {

  return (
    <AppointmentContext.Provider value={{}}>
      {children}
    </AppointmentContext.Provider>
  )
}

