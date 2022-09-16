
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Image from 'next/image';
import chair from '../public/images/chair_order.png';
import { TbCheck, TbChevronDown } from 'react-icons/tb';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import React from 'react';

export default function Order(){
    const data = [
        {
            product_name: 'Fabric Mid Century Chair',
            price: '10.50',
            quantity: '5',
            status: 'Sent',
        },
        {
            product_name: 'Chair in Dark Grey',
            price: '4.50',
            quantity: '2',
            status: 'Processed',
        },
        {
            product_name: 'Dining Side Chair in Beige',
            price: '765.99',
            quantity: '7',
            status: 'Pending',
        }
    ];
    const role = useSelector((state) => state.auth.role);
    const menuTab = ['Profile', 'My Product', 'Selling Product', 'My Order'];
    const linkTo = [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product/all?page=1&limit=5', '/profile/add-product', '/order'];
    const indexTab = 3;
    const [order, setOrder] = React.useState({active: false, left: 0, top: 0});
    const [product, setProduct] = React.useState({active: false, left: 0, top: 0});
    const menuOrder = (e) => {
        setOrder({active: !order.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    const menuProduct = (e) => {
        setProduct({active: !product.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    return(
        <div>
            <Header />
            <Banner titleBanner='My Order' subtitleBanner='See your notifications for the latest updates'/>
            <div>
                <div className='flex justify-evenly my-20'>
                    {menuTab.map((e,i)=>{
                        return (
                            <>
                                <div className='flex gap-5'>
                                    <Link href={linkTo[i]}>
                                        <a>
                                            <div className={`${i === indexTab ? 'border-b-4' : ''} border-black`}>
                                                <span className='text-2xl'>{e}</span>
                                            </div>
                                        </a>
                                    </Link>
                                    {i === 3 ? 
                                        <>
                                            <div className='flex items-center gap-2 cursor-pointer' onClick={(e)=> menuOrder(e)}>
                                                <TbChevronDown />
                                            </div> 
                                        </>
                                        : null
                                    }
                                    {i === 1 ? 
                                        <>
                                            <div className='flex items-center gap-2 cursor-pointer' onClick={(e)=> menuProduct(e)}>
                                                <TbChevronDown />
                                            </div> 
                                        </>
                                        : null
                                    }
                                </div>
                                {
                                    order.active&&
                                    <div style={{top: order.top, left: order.left}} className={'absolute w-40 p-3rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none'}>
                                        <div className='py-1' role='none'>
                                            <Link href='#'>
                                                <a className='text-white block px-4 py-2 text-sm' role='menuitem' id='menu-item-0'>Account settings</a>    
                                            </Link>
                                            <Link href='#'>
                                                <a className='text-white block px-4 py-2 text-sm' role='menuitem' id='menu-item-1'>Support</a>
                                            </Link>
                                            <Link href='#'>
                                                <a className='text-white block px-4 py-2 text-sm' role='menuitem' id='menu-item-2'>License</a>
                                            </Link>
                                        </div>
                                    </div>
                                }
                                {
                                    product.active&&
                                    <div style={{top: product.top, left: product.left}} className={'absolute w-40 p-3 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none'}>
                                        <div className='py-1' role='none'>
                                            <Link href='/profile/my-product/all?page=1&limit=5'>
                                                <a className='text-white block px-4 py-2 text-sm' role='menuitem' id='menu-item-1'>All</a>
                                            </Link>
                                            <Link href='/profile/my-product/archive?page=1&limit=5'>
                                                <a className='text-white block px-4 py-2 text-sm' role='menuitem' id='menu-item-1'>Archive</a>
                                            </Link>
                                            <Link href='/profile/my-product/sold-out?page=1&limit=5'>
                                                <a className='text-white block px-4 py-2 text-sm' role='menuitem' id='menu-item-1'>Sold Out</a>
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </>
                        );
                    })}
                </div>
            </div>
            <main className='flex flex-col justify-center w-full pb-20'>
                {/* <Menu /> */}
                <div className='flex flex-col items-center w-full'>
                    <div className='bg-gray-50 max-w-[1400px] w-full p-5'>
                        <div className='flex w-full justify-between'>
                            <div className='flex items-center max-w-[300px] w-full'><span>PRODUCTS</span></div>
                            <div className='flex items-center max-w-[80px] w-full'><span>PRICE</span></div>
                            <div className='flex items-center max-w-[80px] w-full'><span>QUANTITY</span></div>
                            <div className='flex items-center max-w-[200px] w-full'><span>STATUS ORDER</span></div>
                            <div className='flex items-center max-w-[80px] w-full'><span>TOTAL</span></div>
                        </div>
                        <div className='flex flex-col w-full gap-3'>
                            {
                                data.map(e => {
                                    return(
                                        <>
                                            <div className='flex justify-between'>
                                                <div className='flex items-center gap-4 max-w-[300px] w-full'>
                                                    <Image src={chair} width={'80'} height={'100'} layout='fixed' />
                                                    <span>{e.product_name}</span>
                                                </div>
                                                <div className='flex items-center max-w-[80px] w-full font-bold'><span>${e.price}</span></div>
                                                <div className='flex items-center justify-center max-w-[80px] w-full'><span>{e.quantity}</span></div>
                                                <div className='flex gap-2 items-center max-w-[200px] w-full'>
                                                    <div className='border-2 rounded-full border-gray-900 p-[0.5px] h-fit'><TbCheck /></div>
                                                    <span>{e.status}</span>
                                                </div>
                                                <div className='flex items-center max-w-[80px] w-full font-bold'><span>${Number(e.price)*Number(e.quantity)}</span></div>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}