import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {BsShop} from 'react-icons/bs';
import { FiCheck, FiMinusCircle, FiPlus, FiPlusCircle, FiTrash2, FiX } from 'react-icons/fi';
import CardProduct from '../components/CardProduct';
import ModalOrders from '../components/ModalOrders';
import ModalStatusOrder from '../components/ModalStatusOrder';

function DummyLab() {
  const dataImage = ["https://images.unsplash.com/photo-1575501265016-ae78c708a09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"]
  const [imageChoice, setImageChoice] = React.useState(dataImage[0])
  const [showModal, setShowModal] = React.useState(false)
  const handleClose = type => {
    setShowModal(false)
  }
  console.log(dataImage.length);
  return (
    <>
    {/* <div className='grid grid-cols-3 gap-4'>
      <CardProduct productUrl={'#'} img={<BsShop size={260}/>} title='ajbebaev'subtitle='500' />
      <CardProduct productUrl={'#'} img={<BsShop size={260}/>} title='ajbebaev'subtitle='500' />
      <CardProduct productUrl={'#'} img={<BsShop size={260}/>} title='ajbebaev'subtitle='500' />
      <CardProduct productUrl={'#'} img={<BsShop size={260}/>} title='ajbebaev'subtitle='500' />
      <CardProduct productUrl={'#'} img={<BsShop size={260}/>} title='ajbebaev'subtitle='500' />
    </div> */}
    <div className='wrap-products grid grid-rows-4 grid-cols-3 gap-3 mt-4 mb-4'>
    {/* <div className='flex justify-center mt-5 gap-2'> */}
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='w-full h-full'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='contain' layout='fill' alt='test' />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='flex justify-center items-center w-full h-full'>
                {/* <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' /> */}
                <BsShop size={260}/>
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='w-full h-full image-card-wrap relative bg-red-300'>
                <Image src={'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='w-full h-full'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='contain' layout='fill' alt='test' />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='w-full h-full'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='w-full h-full image-card-wrap relative bg-red-300'>
                <Image src={'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='w-full h-full'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='contain' layout='fill' alt='test' />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='w-full h-full'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='w-full h-full image-card-wrap relative bg-red-300'>
                <Image src={'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='w-full h-full'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='contain' layout='fill' alt='test' />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative bg-red-300'>
              {/* <BsShop size={260}/> */}
              <div className='w-full h-full'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='w-full h-full image-card-wrap relative bg-red-300'>
                <Image src={'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>Coaster 506222-CO Loveseat</span>
              <span className='font-bold'>$765.99</span>
            </div>
          </div>
        </a>
      </Link>
    </div>

    {/* <div className='wrap-image-product bg-teal-400'> */}
      <div className='wrap-image-product grid gap-1 mb-6'>
      <div className='col-start-1 col-end-3 h-full bg-red-200 grid content-center gap-2'>
        {/* <div onClick={() => setImageChoice(dataImage[0])} className='justify-self-center row-span-3 image-list-product bg-slate-400 w-full h-full relative'>
          <Image src={`${dataImage[0]}`} objectFit='contain' layout='fill' alt='test' />
        </div> */}

        {dataImage.map((e, i) => {
          return (
            <div key={e} onClick={() => setImageChoice(dataImage[i])} className='justify-self-center row-span-3 image-list-product bg-slate-400 w-full h-full relative'>
              <Image src={`${e}`} objectFit='contain' layout='fill' alt='test' />
            </div>
          )
        })}
        {/* <div onClick={() => setImageChoice(dataImage[1])} className='justify-self-center row-span-3 image-list-product bg-slate-400 w-full h-full relative'>
          <Image src={`${dataImage[1]}`} objectFit='contain' layout='fill' alt='test' />
        </div>
        <div onClick={() => setImageChoice(dataImage[2])} className='justify-self-center row-span-3 image-list-product bg-slate-400 w-full h-full relative'>
          <Image src={`${dataImage[2]}`} objectFit='contain' layout='fill' alt='test' />
        </div> */}
      </div>
      <div className='col-start-3 col-end-13 h-full bg-red-200'>
        <div className='w-full h-full relative'>
          <Image src={imageChoice} objectFit='contain' layout='fill' alt='test' />
        </div>
      </div>
      </div>
    {/* </div> */}

    <div className='wrap-review mb-5'>
      <div className='grid grid-cols-3 w-full h-full'>
        <div className='flex justify-center items-center bg-orange-300 w-full'>
          <div className='w-[150px] h-[150px] bg-slate-300 rounded-full relative overflow-hidden'>
          <Image src={'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
          </div>
          {/* <span>aaaa</span> */}
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col justify-center bg-orange-200 w-full h-full'>
            <span className='mb-4'>“Highly customizable. Excellent design. Customer services has exceeded my expectation. They are quick to answer and even when they don&apos;t know the answer right away. They&apos;ll work with you towards a solution.”</span>
            <span>35 mins ago, 15 November 2019</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex flex-row gap-3'>
        <div className='cursor-pointer h-[200px] w-[200px] bg-white flex justify-center items-center border-dashed border-4 border-slate-300 text-slate-300'>
          <label>
            <FiPlus size={50} />
            <input type='file' className='hidden' />
          </label>
        </div>
    </div>

    <div className='w-full h-[700px] flex justify-center items-center flex-col mb-5'>
      {/* title */}
      <div className='w-[1160px] h-[72px] bg-white mb-3 border-t-2 border-b-2 border-gray-600'>
        <div className='w-full h-full grid grid-cols-3'>
          <div className='w-full h-full grid grid-cols-1 items-center'>
            <span className='font-bold text-black'>Product</span>
          </div>
          <div className='col-span-2'>
            <div className='w-full h-full grid grid-cols-2 items-center'>
              <div>
                <span className='font-bold text-black'>Stock Status</span>
              </div>
              <div>
                <span className='font-bold text-black'>Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* card  wishlist & favorite */}
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

      <div className='w-[1160px] h-[172px] bg-white mb-3'>
        <div className='w-full h-full grid grid-cols-3'>
          <div className='col-span-1'>
            <div className='h-full grid grid-cols-2 items-center'>
              <div className='h-full w-[172px] relative overflow-hidden'>
                <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
              </div>
              <div className='w-full'>
                  <p className='text-lg truncate'>Dining Side Chair in Beige</p>
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
    </div>

    <div className='w-full h-[700px] flex justify-center items-center flex-col mb-5'>
      {/* title */}
      <div className='w-[730px] h-[60px] bg-white mb-3'>
        <div className='w-full h-full grid grid-cols-10'>
          <div className='col-span-1' />
          <div className='col-span-9 w-full h-full grid grid-cols-2 items-center'>
            <div className='col-span-1'>
              <span className='text-base text-slate-500'>PRODUCTS</span>
            </div>
            <div className='col-span-1 flex flex-row justify-between'>
              <span className='text-base text-slate-500'>PRICE</span>
              <span className='text-base text-slate-500'>QUANTITY</span>
              <span className='text-base text-slate-500'>TOTAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* card  cart */}
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

      <div className='w-[730px] h-[70px] bg-white border-t-2 border-slate-300 flex items-end pb-2'>
        <div className='w-full grid grid-cols-2'>
          <div className='col-span-1 w-full flex flex-row justify-between border-b-2 border-slate-300'>
              <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your coupon code" />
              <button className='font-bold'>Apply Coupon</button>
          </div>
          <div className='col-span-1 w-full flex items-center'>
            <div className='w-full grid grid-cols-2'>
              <div className='col-span-1' />
              <div className='col-span-1 w-full flex flex-row justify-end'>
                <button className='mr-5 text-base text-slate-300'>Clear Cart</button>
                <button className='font-bold text-black'>Update Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full h-[700px] flex justify-center items-center flex-col mb-5'>
      {/* title */}
        <div className='w-[1140px] h-[60px] mb-3'>
          <div className='w-full h-full grid grid-cols-2'>
            <div className='col-span-1 flex justify-start items-center'>
              <span className='font-normal text-xl text-slate-500'>PRODUCTS</span>
            </div>
            <div className='col-span-1'>
              <div className='w-full h-full grid-cols-4 flex flex-row justify-between items-center'>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-normal text-xl text-slate-500'>PRICE</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-normal text-xl text-slate-500'>QUANTITY</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-normal text-xl text-slate-500'>STATUS ORDER</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-normal text-xl text-slate-500'>TOTAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card my order */}
        {/* <div className='w-[1140px] h-[83px] mb-3'>
          <div className='w-full h-full grid grid-cols-2'>
            <div className='col-span-1'>
              <div className='w-full h-full grid grid-cols-3'>
                <div className='h-full w-[69px] relative overflow-hidden'>
                  <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
                </div>
                <div className='col-span-1 flex items-center w-full'><p className='text-lg truncate'>Dining Side Chair in Beige</p></div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='w-full h-full grid-cols-4 flex flex-row justify-between items-center'>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-bold text-xl text-black'>$10.50</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-normal text-xl text-slate-600'>02</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <button onClick={() => setShowModal(true)} className='w-[100px] h-[30px] rounded-lg border-2 border-slate-400 flex justify-center'>
                    <div className='flex flex-row items-center'>
                      <div className='h-[15px] w-[15px] border-2 border-black rounded-full flex justify-center items-center mr-1'>
                        <FiCheck size={10} />
                      </div>
                      <span>Sent</span>
                    </div>
                  </button>
                  <ModalStatusOrder visible={showModal} onClose={handleClose} />
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-bold text-xl text-black'>$21.00</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='w-[1140px] h-[83px] mb-3'>
          <div className='w-full h-full grid grid-cols-2'>
            <div className='col-span-1'>
              <div className='w-full h-full grid grid-cols-3'>
                <div className='h-full w-[69px] relative overflow-hidden'>
                  <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='cover' layout='fill' alt='test' />
                </div>
                <div className='col-span-1 flex items-center w-full'><p className='text-lg truncate'>Dining Side Chair in Beige</p></div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='w-full h-full grid-cols-4 flex flex-row justify-between items-center'>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-bold text-xl text-black'>$10.50</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-normal text-xl text-slate-600'>02</span>
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <button onClick={() => setShowModal(true)} className='w-[100px] h-[30px] rounded-lg border-2 border-slate-400 flex justify-center'>
                    <div className='flex flex-row items-center'>
                      <div className='h-[15px] w-[15px] border-2 border-black rounded-full flex justify-center items-center mr-1'>
                        <FiCheck size={10} />
                      </div>
                      <span>Sent</span>
                    </div>
                  </button>
                  <ModalOrders visible={showModal} onClose={handleClose} />
                </div>
                <div className='col-span-1 w-full flex justify-center'>
                  <span className='font-bold text-xl text-black'>$21.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default DummyLab