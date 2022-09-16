
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/Banner';
import {FiEdit3, FiLogOut} from 'react-icons/fi';
import { useSelector } from 'react-redux';

function Customer() {
    const role = useSelector((state) => state.auth.role);
    const menuTab = ['Profile', 'My Product', 'Selling Product', 'My Order'];
    const linkTo = [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product', '/profile/add-product', '/order'];
    const indexTab = 0;
    return (
        <>
            <Header />
            <Head>
                <title>Profile - Customer</title>
            </Head>
            <Banner titleBanner={'Profile'} subtitleBanner={'See your notifications for the latest updates'}/>
            <div>
                <div className='flex justify-evenly my-20'>
                    {menuTab.map((e,i)=>{
                        return (
                            <>
                                <Link href={linkTo[i]}>
                                    <a>
                                        <div className={`${i === indexTab ? 'border-b-4' : ''} border-black`}>
                                            <span className='text-2xl'>{e}</span>
                                        </div>
                                    </a>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>

            <div>
                <div className='flex flex-row p-5 mx-[150px] my-10 gap-4'>
                    <div>
                        <Image src='/images/Ellipse3.png' 
                            width={60} 
                            height={60}
                            alt='photo profile'
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center'>
                            <Link href='#'><a>Syifa</a></Link>
                            <FiEdit3 />
                        </div>
                        <div>
                            <p className=''>as Customer</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Gender</div>
                            <div className='text-base'>Female</div>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <Link href='#'><a className='font-semibold'>Edit</a></Link>
                            <FiEdit3 />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Your Email</div>
                            <div className=''>syifa@gamil.com</div>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <Link href='#'><a className='font-semibold'>Edit</a></Link>
                            <FiEdit3 />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Description</div>
                            <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <Link href='#'><a className='font-semibold'>Edit</a></Link>
                            <FiEdit3 />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mx-[150px] my-20 w-30 h-20 items-center'>
                <button className='bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 flex gap-2 rounded-lg w-[210px] h-[50px] justify-center items-center text-center'>
                    <FiLogOut /> 
                    <span>Logout</span>
                </button>
            </div>

            <Footer />
        </>
        
    );
}

export default Customer;
