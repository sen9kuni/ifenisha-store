import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {BsShop} from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import CardProduct from '../components/CardProduct';

function DummyLab() {
  const dataImage = ["https://images.unsplash.com/photo-1575501265016-ae78c708a09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80","https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"]
  const [imageChoice, setImageChoice] = React.useState(dataImage[0])
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
    </>
  )
}

export default DummyLab