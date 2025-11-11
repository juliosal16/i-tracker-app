import React from 'react'
import ErrMsg from '../assets/error.svg'

const Missing = () => {
  return (
    <div className='w-50 d-block mx-auto text-center m-4 '>
      <img src={ErrMsg} alt="404 Message" />
      <small>If you encounter an error, or have a concern, please contact our customer support team.</small>
    </div>
  )
}

export default Missing