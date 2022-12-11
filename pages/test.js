import React from 'react'

const Test = () => {





  const msg1 = () => {
    console.log('this is first function')
  }



  const msg2 = (msg, callback) => {
    console.log(msg);
   callback();
  }


  msg2('This is first parameter', msg1);



  return (
    <div>Test</div>
  )
}

export default Test