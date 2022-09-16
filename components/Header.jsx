
import React from 'react';
import { TbSearch, TbHeart, TbShoppingCart, TbAlignRight, TbChevronDown } from 'react-icons/tb';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import default_image from '../public/images/default.jpg';
import Image from 'next/image';
import { logOut } from '../redux/reducers/auth';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import Router from 'next/router';
import { allCategory, getProductUser } from '../redux/asyncAction/product';

export default function Header(){
    const dispatch = useDispatch();
    const router = useRouter();
    const [page, setPage] = React.useState({active: false, left: 0, top: 0});
    const [shop, setShop] = React.useState({active: false, left: 0, top: 0});
    const [burger, setBurger] = React.useState({active: false, left: 0, top: 0});
    const [profile, setProfile] = React.useState({active: false, left: 0, top: 0});
    const [showDropdown, setShowDropdown] = React.useState(false);
    const token = useSelector((state) => state.auth.token);
    const role = useSelector((state) => state.auth.role);

    const pagePos = (e) => {
        setPage({active: !page.active, left: e.pageX - 60, top: e.pageY + 30});
    };

    const pageShop = (e) => {
        router.push('/product/products?search');
        setShop({active: !shop.active, left: e.pageX - 60, top: e.pageY + 30});
    };

    const pageBurger = (e) => {
        setBurger({active: !burger.active, left: e.pageX - 60, top: e.pageY + 30});
    };

    const pageProfile = (e) => {
        setProfile({active: !profile.active, left: e.pageX - 60, top: e.pageY + 30});
    };

    const goSearch=(props)=>{
        Router.push(`/product/products?search=${props.values.search}`);
    };

    React.useEffect(()=>{
        dispatch(allCategory());
        dispatch(getProductUser());
    }, [dispatch]);

    return(
        <header className='bg-slate-100 h-28 flex items-center justify-center px-5'>
            <div className='max-w-[1400px] flex-1 flex justify-between items-center'>
                <Link href={'/'}><span className='text-3xl font-medium cursor-pointer'>ParaBot</span></Link>
                <div className='flex gap-10 text-gray-700'>
                    <Link href={'/'}><span className='font-semibold cursor-pointer'>HOME</span></Link>
                    <div className='flex items-center gap-1 cursor-pointer' id='page' onClick={(e)=> pagePos(e)}>
                        <span className='font-semibold'>PAGES</span>

                        <TbChevronDown />
                    </div>
                    {
                        page.active&&
                        <div style={{top: page.top, left: page.left}} className={'absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'}>
                            <div className='py-1' role='none'>
                                <a href='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' id='menu-item-0'>Account settings</a>
                                <a href='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' id='menu-item-1'>Support</a>
                                <a href='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' id='menu-item-2'>License</a>
                            </div>
                        </div>
                    }
                    <div className='flex items-center gap-1 cursor-pointer' onClick={(e)=> pageShop(e)}>
                        <span className='font-semibold'>SHOP</span>
                        {/* <TbChevronDown /> */}
                    </div>
                    {/* {
                        shop.active&&
                        <div style={{top: shop.top, left: shop.left}} className={'absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'}>
                            <div className='py-1' role='none'>
                                <a href='#' className='text-gray-700 block px-4 py-2 text-sm' role='menuitem' id='menu-item-0'>Shopping</a>
                            </div>
                        </div>
                    } */}
                    <Link href={'/blog'}><span className='font-semibold cursor-pointer'>BLOG</span></Link>
                </div>
                <div className='flex gap-8 text-center justify-center text-gray-700'>
                    <div onClick={()=>{setShowDropdown(!showDropdown);}}><TbSearch className='text-2xl cursor-pointer' /></div>
                    <Formik initialValues={{search: ''}}>
                        {(props)=>showDropdown?<div className='bg-black w-60 items-center flex py-10 px-5 gap-7 mx-auto mt-10 absolute z-10 rounded-lg'>
                            <input onChange={props.handleChange} name='search' className='w-full' type='text' />
                            <span id='search' onClick={()=>goSearch(props)} className={' hover:text-white cursor-pointer'}><TbSearch/></span>
                        </div> : null}
                    </Formik>
                    <Link href={'/favorite'}><TbHeart className='text-2xl cursor-pointer' /></Link>
                    <Link href={'/cart'}><TbShoppingCart className='text-2xl cursor-pointer' /></Link>
                    {token?
                        <>
                            <div className='rounded-full overflow-hidden border-4 border-gray-400 w-[35px] h-[35px]' onClick={(e)=> pageProfile(e)}>
                                <Image className='rounded-full w-fit h-fit' src={default_image} width={35} height={35} alt='user' />
                            </div>
                            {
                                profile.active&&

                                <div style={{top: profile.top, left: profile.left}} className={'absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20'}>
                                    <div className='py-1' role='none'>
                                        <Link href={'/notification'}><span className='text-gray-700 px-4 py-2 text-sm cursor-pointer flex' role='menuitem' id='menu-item-0'>Notification</span></Link>
                                        <Link href={'/chats'}><span className='text-gray-700 px-4 py-2 text-sm cursor-pointer flex' role='menuitem' id='menu-item-1'>Chats</span></Link>
                                        <Link href={`/profile/${role==='seller'?'seller':'customer'}`}><a className='text-gray-700 px-4 py-2 text-sm cursor-pointer flex' role='menuitem' id='menu-item-2'>Profile</a></Link>
                                        <button className='text-gray-700 px-4 py-2 text-sm cursor-pointer flex' role='menuitem' id='menu-item-3' onClick={() => {dispatch(logOut());router.push('/');}}>Logout</button>
                                    </div>
                                </div>
                            }
                        </>
                        :
                        <>
                            <TbAlignRight className='text-2xl cursor-pointer' onClick={(e)=> pageBurger(e)} />
                            {
                                burger.active&&
                                <div style={{top: burger.top, left: burger.left}} className={'absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10'}>
                                    <div className='py-1' role='none'>
                                        <Link href={'/login'}><span className='text-gray-700 px-4 py-2 text-sm cursor-pointer flex' role='menuitem' id='menu-item-0'>Login</span></Link>
                                        <Link href={'/register'}><span className='text-gray-700 px-4 py-2 text-sm cursor-pointer flex' role='menuitem' id='menu-item-1'>Register</span></Link>
                                    </div>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </header>
    );
}