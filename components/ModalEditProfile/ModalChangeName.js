import { Formik } from 'formik'
import React from 'react'

export default function ModalChangeName({visible, onClose, title, value, valueName, onHandleChange, typeInput, validateScame}) {
  const handleOnClose = (e) => {
    if (e.target.id === 'modalChange') {
      onClose()
    }
  } 
  if (!visible) return null
  return (
    <div id='modalChange' onClick={handleOnClose} className='fixed z-20 inset-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[500px] h-[300px] bg-white shadow-lg p-3 rounded flex flex-col items-center justify-center'>
        <div className='mb-9 text-center'>
          <span className='font-bold text-[35px]'>Change your {title}</span>
        </div>
        <Formik initialValues={value} onSubmit={onHandleChange} validationSchema={validateScame}>
        {({handleChange, handleSubmit, errors}) => (
          <>
            {valueName === 'gender' ? (
              <div className='mb-6'>
              <select onChange={handleChange} name='gender' className="w-[300px] border-0 border-b-2 border-b-emerald-500 bg-white text-sm block p-2.5 ">
                <option value='NULL'>Gender</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
              </select>
            </div>
            ) : (
              <>
              <div className='flex flex-col max-w-[350px] w-full border-b-2'>
              <input type={typeInput} onChange={handleChange} name={valueName} className='outline-none text-lg flex flex-1 bg-slate-50' />
            </div>
            <span className='text-xs pl-1 text-red-500 mb-6' type='invalid'>{errors[valueName]}</span>
              </>
            )}
            {/* <div className='flex flex-col max-w-[350px] w-full border-b-2'>
              <input type={typeInput} onChange={handleChange} name={valueName} className='outline-none text-lg flex flex-1 bg-slate-50' />
            </div>
            <span className='text-xs pl-1 text-red-500 mb-6' type='invalid'>{errors[valueName]}</span>
            <div className='mb-6'>
              <select class="w-[300px] border bg-white text-sm rounded-lg block p-2.5 ">
                <option>Gender</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
              </select>
            </div> */}
            <div className='flex flex-row gap-5'>
              <button onClick={onClose} className='w-[100px] h-[50px] bg-red-500 rounded-md text-white hover:bg-red-600'><span className='font-bold text-xl'>Cancel</span></button>
              <button type="submit" onClick={handleSubmit} className='w-[100px] h-[50px] bg-green-500 rounded-md text-white hover:bg-green-600'><span className='font-bold text-xl'>Change</span></button>
            </div>
          </>
        )}
        </Formik>
      </div>
    </div>
  )
}
