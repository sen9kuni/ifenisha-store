import { Formik } from 'formik'
import Image from 'next/image'
import React from 'react'

export default function ModalChangeName({visible, onClose, title, value, valueName, onHandleChange, typeInput, validateScame}) {
  const [picture, setPicture] = React.useState(null)
  const [file, setFile] = React.useState(null)
  // console.log(picture);

  const handleChangeImage = (event) => {
    if(event?.target?.files[0]?.type !== undefined) {
      if(event?.target?.files[0]?.type?.split('/')[1] === 'png' || event?.target?.files[0]?.type.split('/')[1] === 'jpg' || event?.target?.files[0]?.type.split('/')[1] === 'jpeg'){
        setFile(event.target.files[0])
        setPicture(event.target.files[0])
        // dispacth image disini
      } else {
          window.alert('You can only uploud image file');
          setFile(null)
          setPicture(null)
      }
  }
  }

  const editProfileBtn = () => {
    if(file) {
      console.log(file)
    }
  }
  
  const handleOnClose = (e) => {
    if (e.target.id === 'modalChange') {
      onClose()
    }
  } 
  if (!visible) return null;
  return (
    <div id='modalChange' onClick={handleOnClose} className='fixed z-20 inset-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[500px] h-[350px] bg-white shadow-lg p-3 rounded flex flex-col items-center justify-center'>
        <div className='mb-9 text-center'>
          <span className='font-bold text-[35px]'>Change your {title}</span>
        </div>
        {valueName !== 'image' ? (
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
              <div className='flex flex-row gap-5'>
                <button onClick={() => {onClose(); setPicture(null);}} className='w-[100px] h-[50px] bg-red-500 rounded-md text-white hover:bg-red-600'><span className='font-bold text-xl'>Cancel</span></button>
                <button type="submit" onClick={handleSubmit} className='w-[100px] h-[50px] bg-green-500 rounded-md text-white hover:bg-green-600'><span className='font-bold text-xl'>Change</span></button>
              </div>
            </>
          )}
          </Formik>
        ) : (
          <>
            <div className='flex flex-col items-center gap-4 mb-4'>
              <div className='w-[120px] h-[120px] bg-slate-400 rounded-full relative items-center overflow-hidden'>
                {picture && <Image src={`${URL.createObjectURL(picture)}`} objectFit='contain' layout='fill' alt='image upload' />}
              </div>
              <div>
                <input type='file' name='image' onChange={handleChangeImage} className='block w-full cursor-pointer text-sm border' />
              </div>
            </div>
            <div className='flex flex-row gap-5'>
              <button onClick={() => {onClose(); setPicture(null);}} className='w-[100px] h-[50px] bg-red-500 rounded-md text-white hover:bg-red-600'><span className='font-bold text-xl'>Cancel</span></button>
              <button disabled={file === null} onClick={editProfileBtn} className='w-[100px] h-[50px] bg-green-500 rounded-md text-white hover:bg-green-600 disabled:bg-slate-600'><span className='font-bold text-xl'>Change</span></button>
            </div>
          </>
        )}
        {/* <Formik initialValues={value} onSubmit={onHandleChange} validationSchema={validateScame}>
        {({handleChange, handleSubmit, errors, values}) => (
          <>
            {valueName === 'gender' ? (
              <div className='mb-6'>
              <select onChange={handleChange} name='gender' className="w-[300px] border-0 border-b-2 border-b-emerald-500 bg-white text-sm block p-2.5 ">
                <option value='NULL'>Gender</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
              </select>
            </div>
            ) : valueName === 'image' ? (
              <div className='flex flex-col items-center gap-4 mb-4'>
                <div className='w-[120px] h-[120px] bg-slate-400 rounded-full relative items-center overflow-hidden'>
                  {picture && <Image src={`${URL.createObjectURL(picture)}`} objectFit='contain' layout='fill' alt='image upload' />}
                </div>
                <div onChange={handleChange}>
                  <input type='file' name='image' onChange={(e) => {setPicture(e.target.files[0]); values.image = picture }} className='block w-full cursor-pointer text-sm border' />
                </div>
              </div>
            ) : (
              <>
              <div className='flex flex-col max-w-[350px] w-full border-b-2'>
              <input type={typeInput} onChange={handleChange} name={valueName} className='outline-none text-lg flex flex-1 bg-slate-50' />
            </div>
            <span className='text-xs pl-1 text-red-500 mb-6' type='invalid'>{errors[valueName]}</span>
              </>
            )}
            <div className='flex flex-row gap-5'>
              <button onClick={() => {onClose(); setPicture(null);}} className='w-[100px] h-[50px] bg-red-500 rounded-md text-white hover:bg-red-600'><span className='font-bold text-xl'>Cancel</span></button>
              <button type="submit" onClick={handleSubmit} className='w-[100px] h-[50px] bg-green-500 rounded-md text-white hover:bg-green-600'><span className='font-bold text-xl'>Change</span></button>
            </div>
          </>
        )}
        </Formik> */}
      </div>
    </div>
  )
}
