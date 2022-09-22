import Image from 'next/image'
import React from 'react'
import { FiMinusCircle, FiPlusCircle, FiX } from 'react-icons/fi'

export default function CardCart({image, nameProduct, price, quantity, total}) {
  return (
    <div className='w-[730px] h-[83px] bg-white mb-3'>
        <div className='w-full h-full grid grid-cols-10'>
          <div className='col-span-1 flex justify-center items-center'>
            <button className='h-[20px] w-[20px] bg-red-600 mr-1 font-bold text-white flex justify-center items-center hover:bg-red-500'><FiX size={15} /></button>
          </div>

          <div className='col-span-9 w-full h-full grid grid-cols-2'>
            <div className='col-span-1'>
              <div className='w-full h-full grid grid-cols-3'>
                <div className='h-full w-[69px] relative overflow-hidden'>
                  <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
                </div>
                <div className='col-span-1 flex items-center w-full'><p className='text-lg truncate'>Dining Side Chair in Beige</p></div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='w-full h-full flex flex-row justify-between items-center'>
                <span className='text-base'>$10.50</span>
                <div className='w-[100px] flex flex-row justify-between'>
                  <button><FiPlusCircle /></button>
                  <span className='text-base'>02</span>
                  <button><FiMinusCircle /></button>
                </div>
                <span className='font-bold'>$21.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
