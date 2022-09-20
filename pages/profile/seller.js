import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/Banner';
import { useSelector } from 'react-redux';
import {FiEdit3, FiLogOut} from 'react-icons/fi';
import { TbChevronDown } from 'react-icons/tb';
import ModalChangeName from '../../components/ModalEditProfile/ModalChangeName';
import * as Yup from 'yup';

const nameSechema = Yup.object().shape({
    full_name: Yup.string().min(3, 'full name must be at least 3 characters').required('full name is a required field').optional(),
    email: Yup.string().email('Invalid email address format').required().optional(),
    store_name: Yup.string().min(5).required().optional(),
    store_desc: Yup.string().min(10).required().optional()
});

function Seller() {
    const role = useSelector((state) => state.auth.role);
    const menuTab = ['Profile', 'My Product', 'Selling Product', 'My Order'];
    const linkTo = [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product/all?page=1&limit=5', '/profile/add-product', '/order'];
    const indexTab = 0;
    const [order, setOrder] = React.useState({active: false, left: 0, top: 0});
    const [product, setProduct] = React.useState({active: false, left: 0, top: 0});
    const menuOrder = (e) => {
        setOrder({active: !order.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    const menuProduct = (e) => {
        setProduct({active: !product.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    const [showModal, setShowModal] = React.useState(false)
    const [showIndex, setShowIndex] = React.useState(null)
    const [showModalEmail, setShowModalEmail] = React.useState(false)
    const handleClose = type => {
        switch (type) {
            case 'full_name':
                setShowModal(false)
                break;
            case 'email':
                setShowModalEmail(false)
                break;
            default:
                break;
        }
        setShowModal(false)
    }
    const changeName = value => {
        console.log(value);
        switch (showIndex) {
            case 0:
                console.log('fullname');
                break;
            case 1:
                console.log('gender')
                break;
            case 2:
                console.log('email')
                break;
            case 3:
                console.log('store name')
                break;
            case 4:
                console.log('image profile')
                // console.log(value);
                break;
            default:
                console.log('store desc')
                break;
        }
    }
    return (
        <>
            <Header />
            
            <Head>
                <title>Profile - seller</title>
            </Head>
            <Banner titleBanner={'Profile'} subtitleBanner={'See your notifications for the latest updates'}/>
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

            <div>
                <div className='flex flex-row p-5 mx-[150px] my-10 gap-4'>
                    <div>
                        <Image src='/images/Ellipse3.png' 
                            width={60} 
                            height={60}
                            alt='photo profile'
                            className='rounded-full cursor-pointer'
                            onClick={() => {setShowModal(true); setShowIndex(4);}}
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center'>
                            <span>Syifa</span>
                            <button onClick={() => {setShowModal(true); setShowIndex(0);}} className='flex flex-row items-center gap-1'>
                                <FiEdit3 />
                            </button>
                        </div>
                        <div>
                            <p className=''>as seller</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Gender</div>
                            <div className='text-base'>Female</div>
                        </div>
                        {/* <div className='flex flex-row items-center gap-1'>
                            <Link href='#'><a className='font-semibold'>Edit</a></Link>
                            <FiEdit3 />
                        </div> */}
                        <button onClick={() => {setShowModal(true); setShowIndex(1);}} className='flex flex-row items-center gap-1'>
                            {/* <Link href='#'><a className='font-semibold'>Edit</a></Link> */}
                            <span className='font-semibold'>Edit</span>
                            <FiEdit3 />
                        </button>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Your Email</div>
                            <div className=''>syifa@gamil.com</div>
                        </div>
                        {/* <div className='flex flex-row items-center gap-1'>
                            <Link href='#'><a className='font-semibold'>Edit</a></Link>
                            <FiEdit3 />
                        </div> */}
                        <button onClick={() => {setShowModal(true); setShowIndex(2);}} className='flex flex-row items-center gap-1'>
                            {/* <Link href='#'><a className='font-semibold'>Edit</a></Link> */}
                            <span className='font-semibold'>Edit</span>
                            <FiEdit3 />
                        </button>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Store Name</div>
                            <div className=''>Apple Store</div>
                        </div>
                        <button onClick={() => {setShowModal(true); setShowIndex(3);}} className='flex flex-row items-center gap-1'>
                            {/* <Link href='#'><a className='font-semibold'>Edit</a></Link> */}
                            <span className='font-semibold'>Edit</span>
                            <FiEdit3 />
                        </button>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Store Description</div>
                            <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <button onClick={() => {setShowModal(true); setShowIndex(4);}} className='flex flex-row items-center gap-1'>
                            {/* <Link href='#'><a className='font-semibold'>Edit</a></Link> */}
                            <span className='font-semibold'>Edit</span>
                            <FiEdit3 />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mx-[150px] my-20 w-30 h-20 items-center'>
                <button className='bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 flex gap-2 rounded-lg w-[210px] h-[50px] justify-center items-center text-center'>
                    <FiLogOut /> 
                    <span>Logout</span>
                </button>
            </div>
            {/* <ModalChangeName visible={showModal} onClose={handleClose} />
            <button onClick={() => setShowModal(true)}>test</button> */}
            <ModalChangeName typeInput={showIndex === 2 ? 'email' : showIndex === 4 ? 'image' :'text'} visible={showModal} onClose={handleClose} title={showIndex === 0 ? 'Full Name' : showIndex === 1 ? 'Gender' : showIndex === 2 ? 'Email' : showIndex === 3 ? 'Store Name' : showIndex === 4 ? 'Profile picture' : 'Store Description'} value={showIndex === 0 ? {full_name: ''} : showIndex === 1 ? {gender: ''} : showIndex === 2 ? {email: ''} : showIndex === 3 ? {store_name: ''} : showIndex === 4 ? {image: null} : {store_desc: ''}} valueName={showIndex === 0 ? 'full_name' : showIndex === 1 ? 'gender' : showIndex === 2 ? 'email' : showIndex === 3 ? 'store_name' : showIndex === 4 ? 'image' : 'store_desc'} onHandleChange={changeName} validateScame={nameSechema} />
            <Footer />
        </>
        
    );
}

export default Seller;
