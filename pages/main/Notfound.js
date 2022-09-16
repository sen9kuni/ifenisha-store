import React from 'react';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';

function Notfound() {
    return (
        <>
            <Header />
            <div className='flex m-20 '>
                <div className='flex flex-col gap-10'>
                    <h3 className='text-8xl font-bold'>404</h3>
                    <span className='text-5xl font-bold tracking-wide'>Page cannot be found!</span>
                    <p className='tracking-wide leading-7'>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor <br /> commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissi</p>
                    <div className='flex'>
                        <div className='flex items-center justify-center mr-3'>
                            <Image
                                src='/list404.png'
                                alt='list'
                                width={70}
                                height={3} />
                        </div>
                        <Link href='#'>
                            <a className='text-xl font-bold tracking-wide'>BACK TO HOMEPAGE</a>
                        </Link>
                    </div>
                </div>
                <div className='my-auto ml-16'>
                    <button className='text-slate-400 bg-slate-400 text-[14vw] w-80 rounded-full'>o</button>
                </div>
            </div>
        </>
    );
}   

export default Notfound;