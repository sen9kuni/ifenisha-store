import Image from 'next/image'
import React from 'react'
import { FiCheck, FiTrash2, FiX } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { deleteWishFav, getAllWishFav } from '../redux/asyncAction/wishFav'

export default function CardWishFav({image, nameProduct, stock, price, id}) {
  const dispatch = useDispatch()
  const imageSrc = image?.split(',')[0]

  // delete from wishlist
  const onDelete = async (value) => {
    // console.log(value);
    await dispatch(deleteWishFav(value))
    dispatch(getAllWishFav('1'))
  }
  return (
    <div className='w-full h-[172px] bg-white mb-3'>
        <div className='w-full h-full grid grid-cols-3'>
          <div className='col-span-1'>
            <div className='h-full grid grid-cols-2 items-center'>
              <div className='h-full w-[172px] relative overflow-hidden'>
                <Image src={imageSrc ? imageSrc : 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
              </div>
              <div className='w-full'>
                  <p className='text-lg truncate'>{nameProduct}</p>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='w-full h-full grid grid-cols-2 items-center'>
              <div className='flex flex-row items-center'>
                {stock >= 1 ? (
                  <>
                    <div className='h-[15px] w-[15px] border-2 border-black rounded-full flex justify-center items-center mr-1'>
                      <FiCheck size={10} />
                    </div>
                    <span>In Stock</span>
                  </>
                ): (
                  <>
                    <div className='h-[15px] w-[15px] border-2 border-black rounded-full flex justify-center items-center mr-1'>
                      <FiX size={10} />
                    </div>
                    <span>Out of Stock</span>
                  </>
                )}
              </div>
              <div className='flex justify-between items-center'>
                <span className='font-extrabold text-black'>${price}</span>
                <div className='flex items-center'>
                  <button disabled={stock <= 0} className='w-[200px] h-[60px] bg-black mr-1 font-bold text-white hover:bg-slate-800 disabled:bg-slate-400'>Add to cart</button>
                  <button onClick={() => onDelete(id)} className='h-[60px] w-[60px] bg-red-600 mr-1 font-bold text-white flex justify-center items-center hover:bg-red-500'><FiTrash2 size={25} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
