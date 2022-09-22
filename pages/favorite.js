import Header from '../components/Header';
import Footer from '../components/Footer';
import { BiCheckCircle } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import CardWishFav from '../components/CardWishFav';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWishFav } from '../redux/asyncAction/wishFav';
import React from 'react';
import CardFav from '../components/CardFav';

export default function Wishlist(){
    const dispatch = useDispatch()
    const resultWish = useSelector((state) => state.wishFav.result)

    React.useEffect(() => {
        dispatch(getAllWishFav('1'))
    }, [dispatch])
    console.log(resultWish);
    return(
        <>
            <Header />
            <div>
                <div className='bg-cart flex-col pt-[74px] pr-[521] pb-[74px] pl-[521]'>
                    <h className='cart-text mb-5 flex items-center justify-center'>Favorite</h>
                    <h4 className='cart-text2 flex items-center justify-center'>Pay and get your ordered items</h4>
                </div>
                <div className='w-full h-[70px] px-[140px]'>
                    <div className='h-full w-full grid grid-cols-2'>
                        <div className='col-span-1 flex justify-center items-center border-b-2 border-black'>
                            <Link href='/favorite'>
                                <a>
                                    <span className='text-xl text-black font-bold'>Favorite</span>
                                </a>
                            </Link>
                        </div>
                        <div className='col-span-1 flex justify-center items-center'>
                            <Link href='/wishlist'>
                                <a>
                                    <span className='text-xl text-black font-bold'>Wishlist</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className='grid grid-cols-4 pt-[80px] pr-[140px]  pl-[140px] gap-10'>
                    <hr className='col-span-4'/>
                </div>
                <div className='grid grid-cols-5 pt-[28px] pr-[140px]  pl-[140px] gap-10'>
                    <p className='col-span-1'>product</p>
                    <div className='col-span-1'/>
                    <p className='col-span-1'>Stock Status</p>
                    <p className='col-span-1'>Price</p>
                    <div className='col-span-1'/>
                </div>
                <div className='grid grid-cols-4 pt-[21px] pr-[140px]  pl-[140px] gap-10'>
                    <hr className='col-span-4'/>
                </div>
                <div className='grid grid-cols-5 pt-[40px] pr-[140px]  pl-[80px] gap-10 items-center'>
                    <div className='col-span-1 flex flex-row items-center gap-[38px]'><FaHeart/><Image  src={'/images/wishlist-chair1.png'} alt={'chair'} width={170} height={172}/></div>
                    <p className='col-span-1'>Dining Side Chair in Beige</p>
                    <div className='col-span-1 flex flex-row items-center'><BiCheckCircle/>In Stock</div>
                    <p className='col-span-1'>$765.99</p>
                    <a href='#' className='bg-black w-[200px] h-[60px] text-white flex items-center justify-center'>
                        Add to Cart
                    </a>
                </div>
                <div className='grid grid-cols-5 pb-[120px] pt-[40px] pr-[140px]  pl-[80px] gap-10 items-center'>
                    <div className='col-span-1 flex flex-row items-center gap-[38px]'><FaHeart/><Image  src={'/images/wishlist-chair1.png'} alt={'chair'} width={170} height={172}/></div>
                    <p className='col-span-1'>Eugene Accent Table 18.9 inches Espresso</p>
                    <div className='col-span-1 flex flex-row items-center'><BiCheckCircle/>In Stock</div>
                    <p className='col-span-1'>$765.99</p>
                    <a href='#' className='bg-black w-[200px] h-[60px] text-white flex items-center justify-center'>
                        Add to Cart
                    </a>
                </div> */}
                <div className='px-[140px] mt-4'>
                    {/* title */}
                    <div className='w-full h-[72px] bg-white mb-3 border-t-2 border-b-2 border-gray-600'>
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
                {resultWish.map((e) => {
                    return e.is_favorite === true && <CardFav key={e.id + e.created_at} id={e.id} image={e.products.product_images} nameProduct={e.products.product_name} stock={parseInt(e.products.stock, 10)} price={parseInt(e.products.price, 10)} />
                })}
                {/* <CardWishFav />
                <CardWishFav />
                <CardWishFav />
                <CardWishFav />
                <CardWishFav /> */}
                </div>
                <div className='px-[140px] h-[50px] mt-2 mb-3 flex justify-center'>
                    <div className='w-[500px] h-full  grid grid-cols-3'>
                        <div className='col-span-1 flex justify-center items-center'><button className='w-[100px] h-full bg-black text-white font-bold'>Prev</button></div>
                        <div className='col-span-1 flex justify-center items-center'><span className='border-b-2 border-black font-bold text-xl'>1</span></div>
                        <div className='col-span-1 flex justify-center items-center'><button className='w-[100px] h-full bg-black text-white font-bold'>Next</button></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}