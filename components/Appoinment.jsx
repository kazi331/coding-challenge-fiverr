import { Checkbox, notification } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import Sectors from './Sectors';


const AppoinmentForm = () => {
  const [agree, setAgree] = useState(false);
  const [values, setValues] = useState([]);
  const [err, setErr] = useState('');
  const [name, setName] = useState('');
    // const [userResponse, setUserResponse] = useState([]) // for local view

  const proceedSubmit = async (e) => {
    e.preventDefault();
    const response = { name, agree, sectors: values }

    // Save to database
    try {
      const res = await axios.post('/api/sector', response);
      const data = await res.data;
      if (data.insertedId) {
        openNotificationWithIcon('success');
        e.target.reset()
      }
      console.log(data)
    } catch (err) {
      console.log(err)
    }
    // setUserResponse([...userResponse, response]); // for local view
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.length >= 1) {
      setErr('')
      proceedSubmit(e);
    } else {
      setErr('Please select at least one sector.')
    }
  }


  // Notification are
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: `Welcome, ${name}.`,
      description:
        'You are appointed',
    });
  };

  // console.log(values)
  // console.log(agree)
  return (
    <>
      <section className="text-gray-600 body-font sticky top-16 ">
        <div className="container lg:px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <form  onSubmit={handleSubmit} className="bg-white flex flex-col md:ml-auto w-full md:py-4 mt-2 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Appointment</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Please enter your name and pick the Sectors you are currently involved in. </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="form-input" required onChange={e => setName(e.target.value)} />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Sector</label>
              <Sectors required value={values} setValues={setValues} />
              <p className='text-red-500 text-sm font-semibold py-2 pl-1'>{err}</p>
            </div>
            <Checkbox required name="check this"
              style={{ margin: '3px 0 10px' }}
              onChange={() => setAgree(!agree)}>
              Agree to terms
            </Checkbox>
            <button className="form-button">Save</button>
          </form>
        </div>
      </section>
      {contextHolder}
    </>
  )
}

export default AppoinmentForm