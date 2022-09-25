import Image from 'next/image'
import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { convertMoney } from '../pages/profile/add-product'
import ModalStatusOrder from './ModalStatusOrder'

function CardOrder({image, nameProduct, price, qty, status, total, role, idOrder}) {
  const [showModal, setShowModal] = React.useState(false)
  const handleClose = type => {
    setShowModal(false)
  }
  return (
    <div className='w-full h-[83px] mb-3'>
          <div className='w-full h-full grid grid-cols-2'>
            <div className='col-span-1'>
              <div className='w-full h-full grid grid-cols-3'>
                <div className='h-full w-[69px] relative overflow-hidden'>
                  <Image src={image ? image : 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
                </div>
                <div className='col-span-1 flex items-center w-full'><p className='text-lg truncate'>{nameProduct}</p></div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='w-full h-full grid-cols-4 flex flex-row justify-between items-center'>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-bold text-xl text-black'>{convertMoney(price)}</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-normal text-xl text-slate-600'>{qty}</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <button onClick={() => setShowModal(true)} className='w-[100px] h-[30px] rounded-lg border-2 border-slate-400 flex justify-center'>
                    <div className='flex flex-row items-center'>
                      <div className='h-[15px] w-[15px] border-2 border-black rounded-full flex justify-center items-center mr-1'>
                        <FiCheck size={10} />
                      </div>
                      <span>{status}</span>
                    </div>
                  </button>
                  <ModalStatusOrder visible={showModal} onClose={handleClose} role={role} status={status} idOrder={idOrder} />
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-bold text-xl text-black'>{convertMoney(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CardOrder