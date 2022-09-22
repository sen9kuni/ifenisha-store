import Image from 'next/image'
import React from 'react'
import { FiCheck, FiTrash2 } from 'react-icons/fi'

export default function CardWishFav({image, nameProduct, stock, price}) {
  return (
    <div className='w-[1160px] h-[172px] bg-white mb-3'>
        <div className='w-full h-full grid grid-cols-3'>
          <div className='col-span-1'>
            <div className='h-full grid grid-cols-2 items-center'>
              <div className='h-full w-[172px] relative overflow-hidden'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
              </div>
              <div className='w-full'>
                  <p className='text-lg truncate'>Dining Side Chair in Beige vbeviov vbweobw</p>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='w-full h-full grid grid-cols-2 items-center'>
              <div className='flex flex-row items-center'>
                <div className='h-[15px] w-[15px] border-2 border-black rounded-full flex justify-center items-center mr-1'>
                  <FiCheck size={10} />
                </div>
                <span>In Stock</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='font-extrabold text-black'>$765.99</span>
                <div className='flex items-center'>
                  <button className='w-[200px] h-[60px] bg-black mr-1 font-bold text-white hover:bg-slate-800'>Add to cart</button>
                  <button className='h-[60px] w-[60px] bg-red-600 mr-1 font-bold text-white flex justify-center items-center hover:bg-red-500'><FiTrash2 size={25} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
