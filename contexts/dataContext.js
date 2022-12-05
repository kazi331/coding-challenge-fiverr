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

  // load data on page load
  useEffect(() => {
    console.log('fetching data...')
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get('/api/appointments');
        const data = res.data;
        setData(data.appointments)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    fetchData();
  }, [refetch])

  return (
    <DataContext.Provider value={{ data, loading, refetch, setRefetch }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;