import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// create context
export const DataContext = createContext();
// custom hook - optional
export const useData = () => useContext(DataContext);


const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false)
  const [dataError, setDataError] = useState(false)

  // load data on page load
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get('/api/appointments');
        const data = res.data;
        setDataError(false)
        setData(data.appointments)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setDataError(true)
        console.log({ error })
      }
    }
    fetchData();
  }, [refetch])

  return (
    <DataContext.Provider value={{ data, loading, refetch, setRefetch, dataError }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;