import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardProducts({productUrl, img, title, subtitle}) {
  return (
    <Link href={productUrl}>
        <a>
          <div className='flex flex-col card-wrap bg-white rounded-xl overflow-hidden shadow-md'>
            <div className='flex justify-center items-center image-card-wrap relative'>
              <div className='flex justify-center items-center w-full h-full'>
                {/* <Image src={'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'} objectFit='contain' layout='fill' alt='test' /> */}
                {img}
              </div>
            </div>
            <div className='flex flex-col text-center'>
              <span className='text-xl font-medium'>{title}</span>
              <span className='font-bold'>{subtitle}</span>
            </div>
          </div>
        </a>
      </Link>
  )
}

export default CardProducts