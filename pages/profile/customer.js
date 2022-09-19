
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/Banner';
import {FiEdit3, FiLogOut} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileCustomer } from '../../redux/asyncAction/customer';

function Customer() {
    const dispatch = useDispatch();
    const token = useSelector(state=>state.auth.token);
    const role = useSelector((state) => state.auth.role);
    const profile = useSelector(state => state.customer?.data)
    const menuTab = ['Profile'];
    const linkTo = [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product', '/profile/add-product', '/order'];
    const indexTab = 0;
    React.useEffect(()=>{
        dispatch(getProfileCustomer(token))
    },[])
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
                            <Link href='#'><a>{profile.full_name}</a></Link>
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
                            <div className='text-base'>{profile.gender}</div>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <Link href='#'><a className='font-semibold'>Edit</a></Link>
                            <FiEdit3 />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Your Email</div>
                            <div className=''>{profile.email}</div>
                        </div>
                        <div className='flex flex-row items-center gap-1'>
                            <Link href='#'><a className='font-semibold'>Edit</a></Link>
                            <FiEdit3 />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Bio</div>
                            <div className=''>{profile.store_desc}</div>
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
