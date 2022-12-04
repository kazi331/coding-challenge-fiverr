import { Badge } from 'antd';
import { Collapse } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const { Panel } = Collapse;

const Views = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/appointments');
        const data = res.data;
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])



  return (
    <div>
      <h2 className='py-2 mb-2'>View Appointments</h2>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          {data.appointments?.map((d, i) => <Appoint key={i} data={d} />)}
        </div>
      </section >
    </div >
  )
}

export default Views

const Appoint = ({ data }) => {
  return (
    <Collapse defaultActiveKey={['1']} className="my-2" >
      <div className="w-full">
        <div className="h-full flex items-center p-4 py-2 pb-0 rounded-lg">
          <div className="flex-grow">
            <Badge dot status='success' >
              <h2 className="text-gray-900 title-font font-medium">{data.name}</h2>
            </Badge>
          </div>
        </div>
      </div>
      <Panel header="Show Sectors" key="1">
        <ul>
          {data.sectors.map((s, i) => <li key={i}>{s.label}</li>)}
        </ul>
      </Panel>
    </Collapse>
  )
}