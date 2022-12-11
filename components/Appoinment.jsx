import { Checkbox, notification } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useData } from '../contexts/dataContext';
import Sectors from './Sectors';


const AppoinmentForm = () => {
  const [agree, setAgree] = useState(false);
  const [values, setValues] = useState([]);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false)

  // get setRefetch from data context
  const { refetch, setRefetch } = useData();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (values.length >= 1) {
      setErr('')
      setLoading(true)
      // Save to database
      try {
        const res = await axios.post('/api/appointments', { name, agree, sectors: values });
        if (res.data.status === 'success') {
          openNotificationWithIcon('success', name);
          e.target.reset();
          setRefetch(!refetch)
          setLoading(false)
        }
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    } else {
      setErr('Please select at least one sector.')
    }
  }


  // Notification are
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, name) => {
    api[type]({
      message: `Welcome, ${name}.`,
      description:
        'You are appointed',
    });
  };




  return (
    <>
      <section className="body-font sticky top-16 ">
        <div className="container lg:px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <form onSubmit={handleSubmit} className="flex flex-col md:ml-auto w-full md:py-4 mt-2 md:mt-0">
            <h2 className="text-lg mb-1 font-medium title-font">Appointment</h2>
            <p className="leading-relaxed mb-5  ">Please enter your name and pick the Sectors you are currently involved in. </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm ">Name</label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm ">Sector</label>
              <Sectors required value={values} setValues={setValues} />
              <p className='text-red-500 text-sm font-semibold py-2 pl-1'>{err}</p>
            </div>
            <Checkbox required title="check this"
            className='dark:text-gray-200'
              style={{ margin: '3px 0 10px' }}
              onChange={() => setAgree(!agree)}>
              Agree to terms of service and privacy policy
            </Checkbox>
            <button disabled={loading} className="form-button">{loading? 'Saving...' : 'Save'}</button>
          </form>
        </div>
      </section>
      {contextHolder}
    </>
  )
}

export default AppoinmentForm