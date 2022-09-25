import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderHistory, updateStatusOrder } from '../redux/asyncAction/order';

function ModalStatusOrder({visible, onClose, role, status, idOrder}) {
  const dispatch = useDispatch()
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
  if (!visible) return null;
  return (
    <div id='modalChange' onClick={handleOnClose} className='fixed z-20 inset-0 bg-gray-700 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[500px] h-[420px] bg-white shadow-lg p-3 rounded flex flex-col items-center justify-center'>
        <div className='mb-9 text-center'>
          <span className='font-bold text-[35px]'>Change status order</span>
        </div>
        <span className='font-bold text-xl text-black mb-2'>status now: {status}</span>
        <div className='w-full flex flex-col gap-3'>
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
          {/* <button className='w-full h-[50px] bg-red-300 text-xl font-bold text-white rounded-md'>Processed</button>
          <button className='w-full h-[50px] bg-red-300 text-xl font-bold text-white rounded-md'>Sent</button>
          <button className='w-full h-[50px] bg-red-300 text-xl font-bold text-white rounded-md'>Completed</button>
          <button className='w-full h-[50px] bg-red-300 text-xl font-bold text-white rounded-md'>Cancel Order</button> */}
        </div>
          <button onClick={() => onClose()} className='w-full h-[50px] bg-black text-xl font-bold text-white rounded-md mt-2'>Close</button>
      </div>
    </div>
  )
}

export default ModalStatusOrder