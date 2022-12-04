import { Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Sectors = ({ values, setValues }) => {

  const [sectors, setSectors] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get('/api/sector')
        setSectors(res.data.sectors)
        setLoading(false)
      } catch (err) {
        console.log({ err })
        setLoading(false)
      }
    }
    fetchData();
  }, [])


  const selectProps = {
    mode: 'multiple',
    style: { width: '100%', minWidth: '300px' },
    values,
    options: sectors,
    onChange: (newValue) => {
      setValues(newValue);
    },
    placeholder: 'Select Items that you are involved in...',
    maxTagCount: 'responsive',
  };


  return (
    <Select
      required
      labelInValue
      loading={loading}
      showArrow
      // showSearch
      // placeholder="Search to Select"
      // optionFilterProp="children"
      // filterOption={(input, option) => (option?.label ?? '').includes(input)}
      // filterSort={(optionA, optionB) =>(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
      {...selectProps}
    />
  )
};

export default Sectors;