import { Formik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import ModalProduct from '../../../components/ModalProduct';
import ImgDummy from '../../../public/images/item-example.png';
import * as Yup from 'yup';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { TbChevronDown } from 'react-icons/tb';
import { getProductUser, getProductDetail, updateProduct } from '../../../redux/asyncAction/product';
import { useRouter } from 'next/router';
import {BsArchive, BsPencil, BsShop, BsTrash} from 'react-icons/bs';
import { convertMoney } from '../add-product';

const editProductSchema = Yup.object().shape({
    nameProduct: Yup.string().min(5, 'Name must at least 5 characters'), 
    stock: Yup.number().min(1, 'Minimum stock is 1'), 
    price: Yup.number().min(1000, 'minimum price is 1000')
});

const EditModalForm = ({errors, handleChange, handleSubmit, idProduct}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false);
    const products = useSelector((state)=> state.product.resultProductDetail);
    const [moneyNumber, setMoneyNumber] = React.useState();
    const [nameField, setNameField] = React.useState(products[0]?.product_name);
    const [stockField, setStockField] = React.useState(products[0]?.stock);
    const [priceField, setPriceField] = React.useState(products[0]?.price);
    const [isChecked, setIsChecked] = React.useState(false);
    React.useEffect(()=>{
        dispatch(getProductDetail(idProduct));
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 3000);
    }, [dispatch, idProduct]);
    
    
    return (
        <>
            {loading == true ? 
                <div className='text-center min-h-screen flex justify-center items-center'>
                    <div role='status '>
                        <svg className='inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/>
                            <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/>
                        </svg>
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div> : 
                <form noValidate onSubmit={handleSubmit} onChange={handleChange} className='flex flex-col gap-5'>
                    <span className='text-sm w-1/2'>You can edit your product here. Every change will be saved after you edit and save your data.</span>
                    <div className='flex flex-col gap-4'>
                        <span className='text-black font-semibold text-md'>
                        Name Product
                        </span>
                        <input
                            type='text'
                            name='nameProduct'
                            value={nameField}
                            onChange={(e)=>setNameField(e.currentTarget.value)}
                            className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                            placeholder='Name of goods *'
                                    
                        />
                        {errors.nameProduct ? <span className='text-red-600'>{errors.nameProduct}</span> : null}
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='text-black font-semibold text-md'>
                        Stock Product
                        </span>
                        <span className='flex relative'>
                            <input
                                type='number'
                                name='stock'
                                value={stockField}
                                onChange={(e)=>setStockField(e.currentTarget.value)}
                                className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                                placeholder='Unit Stock *'
                                        
                            />
                            <span className='absolute flex-wrap right-2 top-2 text-gray-600'>
                                    /pcs
                            </span>
                        </span>
                        {errors.stockProduct ? <span className='text-red-600'>{errors.stockProduct}</span> : null}
                    </div>
                    <div className='flex flex-col gap-4'>
                        <span className='text-black font-semibold text-md'>
                        Price Product
                        </span>
                        <input
                            type='number'
                            name='price'
                            value={priceField}
                            onChange={(e) =>
                                setPriceField((e.currentTarget.value))
                            }
                            className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                            placeholder='Unit price *'
                        />
                        {errors.priceProduct ? <span className='text-red-600'>{errors.priceProduct}</span> : null}
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='text-black font-semibold text-md'>
                        Set Archive ?
                        </span>
                        <input type={'checkbox'} name='is_archive' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5'>
                            <span className='text-black font-semibold text-md'>
                            Set Discount ?
                            </span>
                            <div onClick={()=>setIsChecked(!isChecked)} className={`bg-black rounded-full border cursor-pointer ${isChecked != true ? 'p-[0.8rem]' : 'p-[0.5rem]'}`}>
                                {isChecked == true? <FiCheck size={10} className='text-white'/> : null}
                            </div>
                        </div>
                        {isChecked == true ? <input type={'number'} name='discount' className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                            placeholder='Discount product'/> : null}
                    </div>
                    <div className='flex justify-end py-10'>
                        <button
                            className={`${nameField || stockField || priceField ? 'bg-emerald-500' : 'bg-gray-300' } text-white active:bg-emerald-600 text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                            type='submit'
                            disabled={nameField || stockField || priceField ? false : true}
                        >
                    Save Changes
                        </button>
                    </div>
                </form>
            }
        </>
    );
};

export const TableProduct = ({slug}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const products = useSelector((state)=> state.product.resultProduct);
    const [idProduct, setIdProduct] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const productDetail = useSelector((state)=> state.product.resultProductDetail);
    const submitEditModal = (val) => {
        const data = {idProduct: idProduct, nameProduct: val.nameProduct == ''?productDetail[0].product_name : val.nameProduct, discount: val.discount == ''?productDetail[0].discount : val.discount, is_archive: val.is_archive, price: val.price==''?productDetail[0].price:val.price, stock: val.stock==''?productDetail[0].stock:val.stock};
        dispatch(updateProduct(data));
        window.location.reload();
    };
    React.useEffect(()=>{
        dispatch(getProductUser());
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    }, [dispatch]);
    
    // console.log(router.query.slug[1]);
    return(
        <>
            <section className='mx-20'>
                <div className='overflow-x-auto shadow-none sm:rounded-lg pb-20'>
                    <table className='w-full text-xs sm:text-sm text-left text-gray-500 '>
                        <thead className='text-xs text-black uppercase bg-white border-t border-b h-16'>
                            <tr className='bg-white px-5'>
                                <th>Product</th>
                                <th>Stock Status</th>
                                <th>Price</th>
                                <th>
                                    <span className='sr-only'>Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-black'>
                            {slug.includes('all') ? 
                                <>
                                    {Object.keys(products).length ? products.map(e=>{
                                        return(
                                            <>
                                                <tr className='bg-white'>
                                                    <td className='w-1/3 pt-8'>
                                                        <div className='flex flex-col md:flex-row items-center gap-10'>
                                                            {e.product_images == '' ? <BsShop size={130}/> :  <Image src={e.product_images.split(',')[0]} alt='img-dummy' width={130} height={150} layout='fixed' objectFit='cover'/>}
                                                            <span>{e.product_name}</span>
                                                        </div>
                                                    </td>
                                                    <td className='w-1/6 pt-8'>
                                                        <div className='flex items-center gap-3'>
                                                            <FiCheckCircle/>
                                                            <span>{e.stock} Stock</span>
                                                        </div>
                                                    </td>
                                                    <td className='w-1/6  pt-8'>{convertMoney(e.price)}</td>
                                                    <td className='w-1/6  pt-8'>
                                                        <div className='flex gap-4'>
                                                            <button
                                                                type='button'
                                                                onClick={() => {setShowModal(true); setIdProduct(e.id);}}
                                                                className='border border-yellow-500 bg-yellow-500 text-white rounded-md px-2 py-2 my-2 transition duration-500 ease select-none hover:bg-yellow-400 focus:outline-none focus:shadow-outline'
                                                            >
                                                                <BsPencil/>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                className='border border-red-500 bg-red-500 text-white rounded-md px-2 py-2 my-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'
                                                            >
                                                                <BsTrash/>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                disabled={e.is_archive === true ? true : false}
                                                                onClick={()=>{
                                                                    const data = {idProduct: e.id, is_archive: true};
                                                                    dispatch(updateProduct(data));
                                                                    window.location.reload();
                                                                }}
                                                                className={`border rounded-md px-2 py-2 my-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline ${e.is_archive ? 'border-gray-300 textgray-300' :  'border-black text-black  hover:bg-black hover:text-white '}`}
                                                            >
                                                                <BsArchive/>
                                                            </button>
                                                        </div>
                                                    </td>   
                                                </tr>
                                            </>
                                        );
                                    }):null} 
                                </>    :  slug.includes('archive') ? <>
                                    {Object.keys(products).length ? products.map(e=>{
                                        return(
                                            <>
                                                {e.is_archive ? <tr className='bg-white'>
                                                    <td className='w-1/3 pt-8'>
                                                        <div className='flex flex-col md:flex-row items-center gap-10'>
                                                            {e.product_images == '' ? <BsShop size={130}/> :  <Image src={e.product_images.split(',')[0]} alt='img-dummy' width={130} height={150} layout='fixed' objectFit='cover'/>}
                                                            <span>{e.product_name}</span>
                                                        </div>
                                                    </td>
                                                    <td className='w-1/6 pt-8'>
                                                        <div className='flex items-center gap-3'>
                                                            <FiCheckCircle/>
                                                            <span>{e.stock} Stock</span>
                                                        </div>
                                                    </td>
                                                    <td className='w-1/6  pt-8'>{convertMoney(e.price)}</td>
                                                    <td className='w-1/6  pt-8'>
                                                        <div className='flex gap-4'>
                                                            <button
                                                                type='button'
                                                                onClick={() => {setShowModal(true); setIdProduct(e.id);}}
                                                                className='border border-yellow-500 bg-yellow-500 text-white rounded-md px-2 py-2 my-2 transition duration-500 ease select-none hover:bg-yellow-400 focus:outline-none focus:shadow-outline'
                                                            >
                                                                <BsPencil/>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                className='border border-red-500 bg-red-500 text-white rounded-md px-2 py-2 my-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'
                                                            >
                                                                <BsTrash/>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                disabled={e.is_archive === true ? true : false}
                                                                onClick={()=>{
                                                                    const data = {idProduct: e.id, is_archive: true};
                                                                    dispatch(updateProduct(data));
                                                                    window.location.reload();
                                                                }}
                                                                className={`border rounded-md px-2 py-2 my-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline ${e.is_archive ? 'border-gray-300 textgray-300' :  'border-black text-black  hover:bg-black hover:text-white '}`}
                                                            >
                                                                <BsArchive/>
                                                            </button>
                                                        </div>
                                                    </td>   
                                                </tr> : null}
                                            </>
                                        );
                                    }):null} 
                                </> : slug.includes('sold-out') ? <>
                                    {Object.keys(products).length ? products.map(e=>{
                                        return(
                                            <>
                                                {e.stock < 1 ? <tr className='bg-white'>
                                                    <td className='w-1/3 pt-8'>
                                                        <div className='flex flex-col md:flex-row items-center gap-10'>
                                                            {e.product_images == '' ? <BsShop size={130}/> :  <Image src={e.product_images.split(',')[0]} alt='img-dummy' width={130} height={150} layout='fixed' objectFit='cover'/>}
                                                            <span>{e.product_name}</span>
                                                        </div>
                                                    </td>
                                                    <td className='w-1/6 pt-8'>
                                                        <div className='flex items-center gap-3'>
                                                            <FiCheckCircle/>
                                                            <span>{e.stock} Stock</span>
                                                        </div>
                                                    </td>
                                                    <td className='w-1/6  pt-8'>{convertMoney(e.price)}</td>
                                                    <td className='w-1/6  pt-8'>
                                                        <div className='flex gap-4'>
                                                            <button
                                                                type='button'
                                                                onClick={() => {setShowModal(true); setIdProduct(e.id);}}
                                                                className='border border-yellow-500 bg-yellow-500 text-white rounded-md px-2 py-2 my-2 transition duration-500 ease select-none hover:bg-yellow-400 focus:outline-none focus:shadow-outline'
                                                            >
                                                                <BsPencil/>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                className='border border-red-500 bg-red-500 text-white rounded-md px-2 py-2 my-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'
                                                            >
                                                                <BsTrash/>
                                                            </button>
                                                            <button
                                                                type='button'
                                                                disabled={e.is_archive === true ? true : false}
                                                                onClick={()=>{
                                                                    const data = {idProduct: e.id, is_archive: true};
                                                                    dispatch(updateProduct(data));
                                                                    window.location.reload();
                                                                }}
                                                                className={`border rounded-md px-2 py-2 my-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline ${e.is_archive ? 'border-gray-300 textgray-300' :  'border-black text-black  hover:bg-black hover:text-white '}`}
                                                            >
                                                                <BsArchive/>
                                                            </button>
                                                        </div>
                                                    </td>   
                                                </tr> : null}
                                            </>
                                        );
                                    }):null} 
                                </> : <div className='min-h-screen flex justify-center items-center'>
                                    <span className='text-center'>Page not found</span>
                                </div>
                            }
                        </tbody>
                    </table>
                    {showModal ? (
                        <>
                            <ModalProduct title={'Edit my product'} onHide={()=>setShowModal(false)} content={
                                (
                                    <>
                                        <Formik onSubmit={submitEditModal} initialValues={{nameProduct: '', stock: '', price: '', is_archive: false, discount: 0}} validationSchema={editProductSchema}>
                                            {(props)=> <EditModalForm {...props} idProduct={idProduct}/>}
                                        </Formik>
                                    </>
                                )
                            }/>
                        </>
                    ): null}
                </div>
            </section>
            
        </>
    );
};

function MyProduct() {
    const role = useSelector((state) => state.auth.role);
    const router = useRouter();
    const menuTab = ['Profile', 'My Product', 'Selling Product', 'My Order'];
    const linkTo = [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product/all?page=1&limit=5', '/profile/add-product', '/order'];
    const indexTab = 1;
    const [order, setOrder] = React.useState({active: false, left: 0, top: 0});
    const [product, setProduct] = React.useState({active: false, left: 0, top: 0});
    const slug = router.query.slug.join();
    console.log(slug);
    const menuOrder = (e) => {
        setOrder({active: !order.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    const menuProduct = (e) => {
        setProduct({active: !product.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    const [loading, setLoading] = React.useState(false);
    React.useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    }, [router.query.slug]);
    return (
        <>
            <Head>
                <title>Profile - MyProduct</title>
            </Head>
            {loading == true ? 
                <div className='text-center min-h-screen flex justify-center items-center'>
                    <div role='status '>
                        <svg className='inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/>
                            <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/>
                        </svg>
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div> : 
                <>
                    <Header />
                    <Banner titleBanner='My Product' subtitleBanner='See your notifications for the latest updates' />
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
                    <TableProduct slug={slug}/>
                    <Footer />
                </>                
               
            }
            
        </>
    );
}

export default MyProduct;
