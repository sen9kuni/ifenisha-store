import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetailOrder, getOrderHistory, updateStatusOrder } from '../redux/asyncAction/order';

function ModalOrders({visible, onClose, role, status, idOrder}) {
  const dispatch = useDispatch()
  const orderDetail = useSelector(state=>state.order.result);
  const idUser = useSelector(state=>state.auth.id);
  
  const onCancel = async () => {
    await dispatch(updateStatusOrder({type: 'cancel', id: idOrder}))
    if (role === 'seller') {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'seller' }))
    } else {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'customer' }))
    }
  }

  const onComplate = async () => {
    await dispatch(updateStatusOrder({type: 'complate', id: idOrder}))
    if (role === 'seller') {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'seller' }))
    } else {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'customer' }))
    }
  }

  const onProcces = async () => {
    await dispatch(updateStatusOrder({type: 'process', id: idOrder}))
    if (role === 'seller') {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'seller' }))
    } else {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'customer' }))
    }
  }

  const onSent = async () => {
    await dispatch(updateStatusOrder({type: 'sent', id: idOrder}))
    if (role === 'seller') {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'seller' }))
    } else {
      dispatch(getOrderHistory({type: 'all', id: idUser, role: 'customer' }))
    }
  }
  
  const handleOnClose = (e) => {
    if (e.target.id === 'modalChange') {
      onClose()
    }
  } 
  // React.useEffect(() => {
  //   dispatch(getDetailOrder({id: idOrder}))
  // }, [dispatch, idOrder])
  if (!visible) return null;
  // status = 'processed'
  return (
    <div id='modalChange' onClick={handleOnClose} className='fixed z-20 inset-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[700px] h-[480px] bg-white shadow-lg rounded flex flex-col items-center'>
        <div className='w-full h-full grid grid-row-5 flex-col'>
          <div className='row-span-1 text-center border-b-2 border-slate-400 w-full h-[50px] flex justify-center items-center'>
            <span className='font-bold text-[25px]'>Detail Transaksi</span>
          </div>
          <div className='row-span-4 w-full h-full grid grid-cols-10 overflow-hidden'>
            <div className='col-span-7 w-full h-full overflow-y-scroll'>
              {/* status */}
              <div className='flex flex-col gap-2 px-2 py-3'>
                <div className='flex flex-row justify-between w-full'>
                  <span className='text-slate-700'>Time Purcess</span>
                  <span className='font-bold text-[#03AC0E]'>{orderDetail.created_at}</span>
                </div>
                <div className='flex flex-row justify-between w-full'>
                  <span className='text-slate-700'>Transaction Id</span>
                  <span className='font-bold text-[#03AC0E]'>{orderDetail.transaction_id}</span>
                </div>
                <div className='flex flex-row justify-between w-full'>
                  <span className='text-slate-700'>Status</span>
                  <span className='font-bold text-[#03AC0E]'>{orderDetail.status_payment}</span>
                </div>
                {orderDetail.status_payment === 'complate' &&
                <div className='flex flex-row justify-between w-full'>
                  <span className='text-slate-700'>Receiving time</span>
                  <span className='font-bold text-[#03AC0E]'>{orderDetail.update_at}</span>
                </div>}
              </div>
              <div className='w-full h-[10px] bg-slate-300' />
              {/* detail product */}
              <div className='flex flex-col px-2 py-3'>
                <span className='font-bold text-xl'>Detail Product</span>
                <div className='w-full h-[90px] border-2 border-slate-400 rounded-md grid grid-cols-3'>
                  <div className='col-span-2 p-3'>
                    <div className='w-full h-full flex flex-row items-center'>
                      <div className='h-[46px] w-[46px] relative overflow-hidden mr-2'>
                        <Image src={orderDetail.cart.products.product_images ? orderDetail.cart.products.product_images.split(',')[0] : 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-black truncate font-bold'>{orderDetail.cart.products.product_name}</p>
                        <span className='text-slate-500 font-mono'>{`${orderDetail.cart.quantity} x ${parseInt(orderDetail.cart.total_price) / parseInt(orderDetail.cart.quantity)}`}</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1 p-3'>
                    <div className='w-full h-full flex flex-col justify-center items-end'>
                      <span>Total price</span>
                      <span className='text-black truncate font-bold'>{orderDetail.cart.total_price}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full h-[10px] bg-slate-300' />

              {/* shipping info */}
              <div className='flex flex-col px-2 py-3 gap-2'>
                <span className='font-bold text-xl'>Shipping Info</span>
                <span className='text-black font-semibold text-base'>shipping : {orderDetail?.cart.shipping}</span>
                <span className='text-black font-semibold text-base'>shipment number : {orderDetail?.transaction_id}</span>
                <span className='text-black font-semibold text-base'>Address : {`${orderDetail?.checkouts.name}, ${orderDetail?.checkouts.phone_number}, ${orderDetail?.checkouts.address}`}</span>
              </div>
              <div className='w-full h-[10px] bg-slate-300' />

              <div className='flex flex-col px-2 py-3 gap-2'>
                <span className='font-bold text-xl'>Payment details</span>
                <span className='text-black font-semibold text-base'>Payment : {orderDetail?.checkouts.payments.payment_name}</span>
                <span className='text-black font-semibold text-base'>Total item : {orderDetail?.cart.quantity}</span>
                <span className='text-black font-semibold text-base'>Price : {parseInt(orderDetail.cart.total_price) / parseInt(orderDetail.cart.quantity)}</span>
                <span className='text-black font-semibold text-base'>Total payment : {orderDetail?.cart.total_price}</span>
              </div>

            </div>
            <div className='col-span-3 flex flex-col items-center'>
              <div className='w-full flex flex-col gap-3 px-2 mt-2'>
                {role === 'seller' ? (
                  <>
                    <button onClick={onProcces} disabled={status === 'processed' || status === 'sent' || status === 'cancel' || status === 'complate'} className='w-full h-[50px] bg-black disabled:bg-slate-500 text-xl font-bold text-white rounded-md'>Processed</button>
                    <button onClick={onSent} disabled={status === 'paid' || status === 'sent' || status === 'cancel' || status === 'complate'} className='w-full h-[50px] bg-black disabled:bg-slate-500 text-xl font-bold text-white rounded-md'>Sent</button>
                    <button onClick={onCancel} disabled={status === 'processed' || status === 'sent' || status === 'cancel' || status === 'complate'} className='w-full h-[50px] bg-red-500 disabled:bg-slate-500 text-xl font-bold text-white rounded-md'>Cancel Order</button>
                  </>
                ) : (
                  <>
                    <button onClick={onComplate} disabled={status !== 'sent' } className='w-full h-[50px] bg-green-500 disabled:bg-slate-500 text-xl font-bold text-white rounded-md'>Completed</button>
                    <button onClick={onCancel} disabled={status === 'processed' || status === 'sent' || status === 'cancel' || status === 'complate'} className='w-full h-[50px] bg-red-500 disabled:bg-slate-500 text-xl font-bold text-white rounded-md'>Cancel Order</button>
                  </>
                )}
                <button onClick={() => onClose()} className='w-full h-[50px] bg-black text-xl font-bold text-white rounded-md mt-2'>Close</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOrders