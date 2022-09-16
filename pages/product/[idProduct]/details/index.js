import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiCheckCircle, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';
import { BsStarFill, BsStar, BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { TbMap2, TbRuler2, TbTruckDelivery } from 'react-icons/tb';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import ImgDummy from '../../../../public/images/chair.png';
import ImgDummy2 from '../../../../public/images/sofa.png';
import ImgProfile from '../../../../public/connor.png';
import ImgProfile2 from '../../../../public/maudey.png';
import { Formik } from 'formik';
import axiosServer from '../../../../helpers/httpServer';
import { useDispatch, useSelector } from 'react-redux';
import { createChat } from '../../../../redux/asyncAction/chats';
import Router from 'next/router';

export async function getServerSideProps(context){
    try{
        const id = !context.query?.idProduct?'':context.query.idProduct;
        const result = await axiosServer.get(
            `/products/details/${id}`
        );
        return{
            props:{
                dataProduct:result.data.result
            }
        };
    }
    catch(err){
        console.log(err);
        return {
            props:{
                isError:true
            }
        };
    }
};

const DetailProductTabContent = ({imgPath }) => {
    return (
        <>
            <div className='col-start-1 col-end-3'>
                <Image src={imgPath} alt='imgDesc' width={450} height={450}/>
            </div>
            <div className='col-start-3 col-end-6'>
                <span className='text-sm'>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</span>
                <ul className='list-disc pl-10 text-sm my-5'>
                    <li className='mb-5'>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</li>
                    <li className=''>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                </ul>
                <span className='text-sm mt-5'>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accum</span>
            </div>
        </>
    );
};

const BreadCumbProductDetail = () => {
    return(
        <nav className='flex py-10 mx-20'>
            <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                <li className='inline-flex items-center'>
                    <Link href={'#'} >
                        <a className='text-sm font-medium text-gray-700 hover:text-gray-900 dark:hover:text-white'>
                            {'Shop'}
                        </a>
                    </Link>
                </li>
                <li>
                    <div className='flex items-center'>
                        <FiChevronRight/>
                        <Link href={'#'}>
                            <a className='ml-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:hover:text-white'>{'Shop Right Sidebar'}</a>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='flex items-center'>
                        <FiChevronRight/>
                        <Link href={'#'}>
                            <a className='ml-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:hover:text-white'>{'Product'}</a>
                        </Link>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

function ProductDetail(props) {
    const dispatch = useDispatch();
    const product = props.dataProduct[0];
    console.log(product);
    const imagesProd = typeof(product.product_images);
    const imgList = imagesProd !== 'string'?[]:[product.product_images];
    if(imagesProd !== 'string'){
        for( let i = 1; i <= product.product_image?.length; i++){
            imgList.push(product.product_image[i]);
        };
    }
    const [chooseItem, setChooseItem] = React.useState(imgList[0]);
    const ratingItem = [1,2,3,4,5];
    const ratingValue = 2.5;
    const rating = Math.round(ratingValue);
    const menuTab = ['Description', 'Review', 'Additional Information', 'About Brand', 'Shipping & Delivery'];
    const [tabActive, setTabActive] = React.useState(0);
    const [paginate, setPaginate] = React.useState(0);
    const data = product.user_id;
    const request = {recepient:data};
    const succesmsg = useSelector((state=>state.chats.succesmsg));
    const chatSeller = () =>{
        dispatch(createChat(request));
    };
    React.useEffect(()=>{
        if(succesmsg){
            Router.push('/chats');
        }
    },succesmsg);
    return (
        <>
            <Head>
                <title>Product - product detail</title>
            </Head>
            <Header/>
            <section>
                <BreadCumbProductDetail/>
                <div className='grid grid-cols-12 mx-20'>
                    <div className='col-start-1 col-end-3'>
                        {imgList.map(e=>{
                            return(
                                <>
                                    <div className='w-28 cursor-pointer mb-5' onClick={()=>setChooseItem(e)}>
                                        <Image width={100} height={100} src={e} alt='dummy'/>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className='col-start-3 col-end-13'>
                        <Image src={chooseItem} alt='dummy' width={1250} height={670}/>
                    </div>
                </div>
                <div className='mt-40 mx-20'>
                    <div className=' flex flex-col gap-5'>
                        <h1 className='text-3xl'>{product.product_name}</h1>
                        <div className='flex gap-4 justify-start items-center'>
                            <div className='flex gap-2'>
                                {ratingItem.map((e,i)=>{
                                    return (
                                        <>
                                            { rating<e ? <BsStar size={16}/> : <BsStarFill size={16}/>}
                                        </>
                                    );
                                })}
                            </div>
                            <div className='flex gap-2'>
                                <span>2</span>
                                <span>{'(reviews)'}</span>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <span className='text-3xl font-bold'>$ {product.price}</span>
                            <div className='flex gap-3 items-center'>
                                <FiCheckCircle/>
                                <span className='text-xs font-base'>{product.sold} Sold / {product.stock} In Stock</span>
                            </div>
                        </div>
                        <div className='text-base'>
                            <span>{product.description}</span>
                        </div>
                        <div className='flex gap-3 my-7'>
                            <div className='p-4 border border-gray-400 flex items-center gap-4 rounded-sm shadow-md'>
                                <div className='cursor-pointer text-black'>
                                    <FiMinus/>
                                </div>
                                <span className='text-black font-semibold'>01</span>
                                <div className='cursor-pointer text-black'>
                                    <FiPlus/>
                                </div>
                            </div>
                            <button className='bg-black px-7 rounded-sm shadow-md hover:bg-gray-900'>
                                <span className='text-white font-semibold'>Add to cart</span>
                            </button>
                            <button className='bg-black px-7 rounded-sm shadow-md hover:bg-gray-900'>
                                <div className='text-white'>
                                    <BsHeart size={24}/>
                                </div>
                            </button>
                            <button className='border border-gray-400 px-7 rounded-sm shadow-md hover:border-gray-800'>
                                <span className='text-black font-semibold'>Add to wishlist</span>
                            </button>
                            <button onClick={chatSeller} className='border border-gray-400 px-7 rounded-sm shadow-md hover:border-gray-800'>
                                <span className='text-black font-semibold'>Chat Seller</span>
                            </button>
                        </div>
                        <div className='flex flex-col text-xs gap-4'>
                            <span>SKU:{product.sku}</span>
                            <span>Categories:{product.categories.category_name} </span>
                            <span>Tag: Furniture, Chair, Modern</span>
                            <span>Product ID:{product.id}</span>
                        </div>
                        <div className='flex gap-5 my-7'>
                            <div className='flex gap-1 text-sm items-center'>
                                <TbTruckDelivery size={28}/>
                                <span>Delivery and return</span>
                            </div>
                            <div className='flex gap-1 text-sm items-center'>
                                <TbRuler2 size={28}/>
                                <span>Size Guide</span>
                            </div>
                            <div className='flex gap-1 text-sm items-center'>
                                <TbMap2 size={28}/>
                                <span>Store availability</span>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Link href='#'>
                                <a>
                                    <div className='border rounded-full p-3 hover:border-gray-800'>
                                        <FaFacebookF/>
                                    </div>
                                </a>
                            </Link>
                            <Link href='#'>
                                <a>
                                    <div className='border rounded-full p-3 hover:border-gray-800'>
                                        <FaTwitter/>
                                    </div>
                                </a>
                            </Link>
                            <Link href='#'>
                                <a>
                                    <div className='border rounded-full p-3 hover:border-gray-800'>
                                        <FaYoutube/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-32 mx-20'>
                    <div className='flex justify-around my-20'>
                        {menuTab.map((e,i)=>{
                            return (
                                <>
                                    <div onClick={()=>setTabActive(i)} className={`${tabActive === i ? 'border-b-4' : ''} border-black cursor-pointer`}>
                                        <span className='text-2xl'>{e}</span>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className='grid grid-cols-5 gap-10'>
                        {tabActive === 0 ? <DetailProductTabContent imgPath={imgList[0]}/> : <div className='flex flex-col col-start-2 col-end-5 gap-20'>
                            <div className='flex flex-col items-center'>                                
                                <div className='flex gap-10 items-center border-b-2 pb-16'>
                                    <div className='flex justify-start w-1/2'>
                                        <Image src={ImgProfile} alt='img1' width={150} height={150} objectFit='cover' className='rounded-full'/>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <span>{'“Highly customizable. Excellent design. Customer services has exceeded my expectation. They are quick to answer and even when they don\'t know the answer right away. They\'ll work with you towards a solution.”'}</span>
                                        <div className='flex gap-5 items-center'>
                                            <span className='text-xs text-gray-500'>35 mins ago, 15 November 2019</span>
                                            <span className='text-xs'>Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-10 items-center border-b-2 pb-16 pt-16'>
                                    <div className='flex justify-start w-1/2'>
                                        <Image src={ImgProfile2} alt='img1'width={150} height={150} objectFit='cover' className='rounded-full'/>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <span>{'“Highly customizable. Excellent design. Customer services has exceeded my expectation. They are quick to answer and even when they don\'t know the answer right away. They\'ll work with you towards a solution.”'}</span>
                                        <div className='flex gap-5 items-center'>
                                            <span className='text-xs text-gray-500'>35 mins ago, 15 November 2019</span>
                                            <span className='text-xs'>Reply</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-10 items-center border-b-2 pb-16 pt-16'>
                                    <div className='flex justify-start w-1/2'>
                                        <Image src={ImgProfile} alt='img1' width={150} height={150} objectFit='cover' className='rounded-full'/>
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <span>{'“Highly customizable. Excellent design. Customer services has exceeded my expectation. They are quick to answer and even when they don\'t know the answer right away. They\'ll work with you towards a solution.”'}</span>
                                        <div className='flex gap-5 items-center'>
                                            <span className='text-xs text-gray-500'>35 mins ago, 15 November 2019</span>
                                            <span className='text-xs'>Reply</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='text-4xl'>Leave A Comment</span>
                                <span className='text-base'>Your email address will not be published. Required fields are marked *</span>
                                <div className='flex gap-5'>
                                    <Formik initialValues={{content: '', rating: 0}}>
                                        {(props)=>{
                                            return(
                                                <form noValidate onSubmit={props.handleSubmit} onChange={props.handleChange} className='w-full flex flex-col gap-5 pt-10'>
                                                    <span className='text-md'>Comment</span>
                                                    <textarea
                                                        name='content'
                                                        rows='4'
                                                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                        placeholder='Your Comment'
                                                    />
                                                    <span className='text-md'>Rating</span>
                                                    <div className='flex gap-5'>
                                                        <div className='flex gap-2'>
                                                            <input name='rating' type='radio'/>
                                                            <span>1</span>
                                                        </div>
                                                        <div className='flex gap-2'>
                                                            <input name='rating' type='radio'/>
                                                            <span>2</span>
                                                        </div>
                                                        <div className='flex gap-2'>
                                                            <input name='rating' type='radio'/>
                                                            <span>3</span>
                                                        </div>
                                                        <div className='flex gap-2'>
                                                            <input name='rating' type='radio'/>
                                                            <span>4</span>
                                                        </div>
                                                        <div className='flex gap-2'>
                                                            <input name='rating' type='radio'/>
                                                            <span>5</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-start'>
                                                        <button
                                                            type='submit'
                                                            className='border border-gray-700 bg-[#1a1a1a] text-white rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
                                                        >
                                                            Send Comment
                                                        </button>
                                                    </div>
                                                </form>
                                            );
                                        }}
                                    </Formik>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className='mt-32 mx-20'>
                    <div className='flex flex-col gap-20'>
                        <h1 className='text-center text-5xl'>Related Products</h1>
                        <div className='flex flex-col mb-32 gap-5'>
                            <Link href={'#'}>
                                <a className='text-lg text-end text-gray-500'>
                                    Show More
                                </a>
                            </Link>
                            <div className='flex gap-5'>
                                {imgList.map((e)=>{
                                    return (
                                        <>
                                            <div className='flex flex-col gap-3 p-4 shadow-md'>
                                                <Image width={100} height={100} src={e} alt='productRelated'/>
                                                <span className='text-xl'>Coaster 506222-CO Loveseat</span>
                                                <span className='text-lg font-bold'>$765.99</span>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <div className='flex justify-center mt-10 gap-5'>
                                <div onClick={()=>setPaginate(0)} className={`${paginate==0? 'p-[0.88rem] bg-black' : 'p-3 border-2 border-gray-600'} cursor-pointer rounded-full`}></div>
                                <div onClick={()=>setPaginate(1)} className={`${paginate==1? 'p-[0.88rem] bg-black' : 'p-3 border-2 border-gray-600'} cursor-pointer rounded-full`}></div>
                                <div onClick={()=>setPaginate(2)} className={`${paginate==2? 'p-[0.88rem] bg-black' : 'p-3 border-2 border-gray-600'} cursor-pointer rounded-full`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default ProductDetail;