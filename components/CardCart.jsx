import Image from 'next/image'
import React from 'react'
import { FiMinusCircle, FiPlusCircle, FiX } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { convertMoney } from '../pages/profile/add-product'
import { setSubTotalPrice, updateQuantityCart } from '../redux/reducers/cart'

export default function CardCart({id, product_id, image, nameProduct, price, quantity, total, onClick}) {
  const dispatch = useDispatch();
  const [countQuantity, setCountQuantity] = React.useState(parseInt(quantity, 10));
  const [totalPrice, setTotalPrice] = React.useState(parseInt(total, 10));
  const onDecrease = () => {
    if(quantity > 0 ) {
      dispatch(updateQuantityCart({id: id, product_id: product_id, quantity: parseInt(quantity)-1}));
    }
  }
  const onIncrease = () => {
    dispatch(updateQuantityCart({id: id, product_id: product_id, quantity: parseInt(quantity)+1}));
  }
  // React.useEffect(() => {
  //   dispatch(updateQuantityCart({id: id, product_id: product_id, quantity: countQuantity}));
  // }, [])
  return (
    <div className='w-[730px] h-[83px] bg-white mb-3'>
        <div className='w-full h-full grid grid-cols-12'>
          <div className='col-span-1 flex justify-center items-center'>
            <button onClick={onClick} className='h-[20px] w-[20px] bg-red-600 mr-1 font-bold text-white flex justify-center items-center hover:bg-red-500'><FiX size={15} /></button>
          </div>

          <div className='col-span-11 w-full h-full grid grid-cols-5'>
            <div className='col-span-2'>
              <div className='w-full h-full grid grid-cols-3'>
                <div className='h-full w-[69px] relative overflow-hidden'>
                  <Image src={image} objectFit='cover' layout='fill' alt='test' />
                </div>
                <div className='col-span-2 flex items-center w-full'><p className='text-lg truncate'>{nameProduct}</p></div>
              </div>
            </div>
            <div className='col-span-3 grid grid-cols-6'>
              <div className='flex justify-start items-center col-span-2 w-[110px]'>
                <p className='text-base text-left truncate'>{convertMoney(price)}</p>
              </div>
              <div className='flex flex-row justify-center items-center gap-4'>
                <button onClick={onDecrease}><FiMinusCircle size={24} className='text-gray-600' /></button>
                <span className='text-base'>{quantity}</span>
                <button onClick={onIncrease}><FiPlusCircle  size={24} className='text-gray-600'/></button>
              </div>
              <div className='flex justify-start items-center col-span-3 col-start-5 col-end-8 w-[120px]'>
                <p className='font-bold text-left pr-5 truncate'>{convertMoney(total)}</p>
              </div>
              {/* <div className='w-full h-full flex flex-row justify-between items-center'>
                <span className='text-base'>{price}</span>
                <div className='w-[100px] flex flex-row justify-between'>
                  <button><FiPlusCircle /></button>
                  <span className='text-base'>{quantity}</span>
                  <button><FiMinusCircle /></button>
                </div>
                <span className='font-bold'>{total}</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  )
}
