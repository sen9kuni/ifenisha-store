import { Formik, useFormik  } from 'formik';
import Image from 'next/image';
import React from 'react';
import { FiCheck, FiPlus, FiTrash2 } from 'react-icons/fi';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as Yup from 'yup';
import Link from 'next/link';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { allCategory, createProduct } from '../../redux/asyncAction/product';
import { useRouter } from 'next/router';
import { TbChevronDown } from 'react-icons/tb';

export const convertMoney = (number) => 
    Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(number);

const productSchema = Yup.object().shape({
    nameProduct: Yup.string().required('Fields is requied.'),
    descProduct: Yup.string().required('Fields is requied.'),
    priceProduct: Yup.string().required('Fields is requied.'),
    stockProduct: Yup.string().required('Fields is requied.'),
    brandProduct: Yup.string().required('Fields is requied.'),
    skuNumber: Yup.number().required('Fields is requied.')
});

const ProductForm = ({errors, handleSubmit, handleChange, image, colorComponent}) => {
    const dispatch = useDispatch();
    const [moneyNumber, setMoneyNumber] = React.useState();
    const categories = useSelector((state)=> state.product.resultCategories);
    const [newCondition, setNewCondition] = React.useState(false);
    const [secondCondition, setSecondCondition] = React.useState(false);
    return(
        <>
            <form onSubmit={handleSubmit} onChange={handleChange} className='flex justify-center pb-24'>
                <div className='w-7/12 flex flex-col gap-20'>
                    <div className='flex flex-col gap-10'>
                        <span className='text-black font-semibold text-2xl'>
                                Inventory
                        </span>
                        <input
                            type='text'
                            name='nameProduct'
                            className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                            placeholder='Name of goods *'
                                    
                        />
                        {errors.nameProduct ? <span className='text-red-600'>{errors.nameProduct}</span> : null}
                        <textarea
                            id='message'
                            name='descProduct'
                            rows='4'
                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
                            placeholder='Description Product *'
                        ></textarea>
                        {errors.descProduct ? <span className='text-red-600'>{errors.descProduct}</span> : null}
                    </div>
                    <div className='flex flex-col gap-10'>
                        <span className='text-black font-semibold text-2xl'>
                                Item Details
                        </span>
                        <input
                            type='number'
                            name='priceProduct'
                            value={moneyNumber}
                            onChange={(e) =>
                                setMoneyNumber((e.currentTarget.value))
                            }
                            className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                            placeholder='Unit price *'
                        />
                        {errors.priceProduct ? <span className='text-red-600'>{errors.priceProduct}</span> : null}
                        <span className='flex relative'>
                            <input
                                type='number'
                                name='stockProduct'
                                className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                                placeholder='Unit Stock *'
                                        
                            />
                            <span className='absolute flex-wrap right-2 top-2 text-gray-600'>
                                    /pcs
                            </span>
                        </span>
                        {errors.stockProduct ? <span className='text-red-600'>{errors.stockProduct}</span> : null}
                        <div className='flex flex-col gap-10'>
                            <span className='text-xs'>Stock Condition</span>
                            <div className='flex gap-20'>
                                <div className='flex gap-2' onClick={()=>setNewCondition(!newCondition)}>
                                    <input type='checkbox' name='newProduct' disabled={secondCondition==true? true : false}/>
                                    <span className='text-xs'>New Product</span>
                                </div>
                                <div className='flex gap-2' onClick={()=>setSecondCondition(!secondCondition)}>
                                    <input type='checkbox' name='secondProduct' disabled={newCondition==true? true : false}/>
                                    <span className='text-xs'>
                                            Second Product
                                    </span>
                                </div>
                            </div>
                        </div>
                        {colorComponent}
                        <div className='flex flex-col gap-10'>
                            <span className='text-black font-semibold text-2xl'>
                                    Brand
                            </span>
                            <input
                                type='text'
                                name='brandProduct'
                                className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                                placeholder='Name brand *'
                                        
                            />
                            {errors.brandProduct ? <span className='text-red-600'>{errors.brandProduct}</span> : null}
                        </div>
                        <div className='flex flex-col gap-10'>
                            <span className='text-black font-semibold text-2xl'>
                                    Category
                            </span>
                            
                            <select name='categoryId' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
                                <option selected>Choose One Category</option>
                                {Object.keys(categories).length && categories?.map((e) => {
                                    return(
                                        <>
                                            <option key={e.id} value={`${e.id}`}>{e.category_name}</option>
                                        </>
                                    );
                                })}
                            </select>
                            {errors.categoryId ? <span className='text-red-600'>{errors.categoryId}</span> : null}
                        </div>
                        <div className='flex flex-col gap-10'>
                            <span className='text-black font-semibold text-2xl'>
                                    SKU
                            </span>
                            <input
                                type='text'
                                name='skuNumber'
                                className='shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                                placeholder='Sku number *'
                                        
                            />
                            {errors.skuNumber ? <span className='text-red-600'>{errors.skuNumber}</span> : null}
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <span className='text-black font-semibold text-2xl'>
                                Photo of Goods
                        </span>
                        {image}
                    </div>
                    <div className='flex justify-start'>
                        <button
                            type='submit'
                            className='border border-gray-700 bg-[#1a1a1a] text-white rounded-md px-4 py-2 my-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
                        >
                                Sell Product
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

let arrImg = [];
function AddNewProduct() {
    const dispatch = useDispatch();
    const router = useRouter();
    const role = useSelector((state) => state.auth.role);
    const [imgFile, setImgFile] = React.useState();
    
    const [moneyNumber, setMoneyNumber] = React.useState([]);
    const [imgArr, setImgArr] = React.useState([]);
    
    const menuTab = ['Profile', 'My Product', 'Selling Product', 'My Order'];
    const linkTo = [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product/all?page=1&limit=5', '/profile/add-product', '/order'];
    const indexTab = 2;
    const [isChecked, setIsChecked] = React.useState(0);
    
    const onSubmitProduct = (val, e) => {
        let colorProduct;
        let condition;
        switch (isChecked) {
        case 1:
            colorProduct='black';
            break;
        case 2:
            colorProduct='brown';
            break;
        case 3:
            colorProduct='white';
            break;
        case 4:
            colorProduct='silver';
            break;
        case 5:
            colorProduct='red';
            break;
        default:
            colorProduct='';
            break;
        }
        if(val.newProduct == true){
            condition='new';
        }
        if(val.secondProduct == true){
            condition='second';
        }
        const data = {...val, images: arrImg, color: colorProduct, condition: condition};
        dispatch(createProduct(data));
        router.push('/profile/my-product');
        // console.log(imgFile);
    };
    const deleteImg = (i)=>{
        setImgArr((state)=>state.filter((item, index)=>index !== i));
    };

    const [order, setOrder] = React.useState({active: false, left: 0, top: 0});
    const [product, setProduct] = React.useState({active: false, left: 0, top: 0});
    const menuOrder = (e) => {
        setOrder({active: !order.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    const menuProduct = (e) => {
        setProduct({active: !product.active, left: e.pageX - 60, top: e.pageY + 30});
    };

    React.useEffect(()=>{
        setImgArr(arrImg);
    }, []);
    return (
        <>  
            <Head>
                <title>Profile - add product</title>
            </Head>
            <Header />
            <Banner
                titleBanner='Selling Product'
                subtitleBanner='See your notifications for the latest updates'
            />
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
            <section>
                <Formik onSubmit={onSubmitProduct} validationSchema={productSchema} initialValues={{nameProduct: '', descProduct: '', priceProduct: '', stockProduct: '', newProduct: false, secondProduct: false, imgProduct: null, brandProduct: '', categoryId: '', skuNumber: ''}}>
                    {(props)=><ProductForm {...props} image={
                        <div className='flex gap-3'>
                            {imgArr.map((e,i)=>{
                                return(
                                    <>
                                        <div className='w-1/4 h-40 m-2 flex flex-col justify-center items-start relative'>
                                            <Image
                                                src={`${URL.createObjectURL(e)}`}
                                                alt='img'
                                                width={150}
                                                height={170}
                                            />
                                            <div className='absolute w-full flex justify-center z-10 cursor-pointer' onClick={()=>deleteImg(i)}>
                                                <div className='w-fit p-2 bg-black opacity-90 rounded-full'>
                                                    <FiTrash2 size={40} className={'text-red-600'}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            <div className='flex flex-col gap-4'>
                                <div className='flex w-full h-40 items-center justify-center bg-grey-lighter m-2 '>
                                    <label className={`w-full h-full flex flex-col items-center justify-center bg-white text-blue rounded-lg tracking-wide uppercase outline-gray-200 outline-dashed outline-2 outline-offset-0 ${arrImg.length > 2 ? 'pointer-events-none' : 'cursor-pointer'}  hover:bg-gray-100`}>
                                        <FiPlus
                                            size={60}
                                            className='text-gray-300 '
                                        />
                                        <span className='mt-2 text-base leading-normal text-gray-300'>
                                        Add more image
                                        </span>
                                        <input
                                            type='file'
                                            name='imgProduct'
                                            disabled={arrImg.length > 2 ? true : false}
                                            onChange={(e) =>
                                            { 
                                                if(e.target.files[0].type.split('/')[1] === 'png' || e.target.files[0].type.split('/')[1] === 'jpg' || e.target.files[0].type.split('/')[1] === 'jpeg'){
                                                    setImgFile(e.target.files[0]);
                                                    arrImg.push(e.target.files[0]);
                                                } else {
                                                    window.alert('You can uploud only image file');
                                                }
                                            }
                                            }
                                            className='hidden'
                                        />
                                    </label>
                                </div>
                                {arrImg.length > 2 ? <span className='text-red-700'>Maximum uploud images</span> : null}
                            </div>
                        </div>
                    } 
                    colorComponent={
                        <>
                            <div>
                                <span className='text-2xl font-semibold'>Colors</span>
                                
                                <div className='flex gap-3 mt-7'>
                                    <div onClick={()=>setIsChecked(1)} className={`bg-black rounded-full border cursor-pointer ${isChecked != 1 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                        {isChecked == 1? <FiCheck size={10} className='text-white'/> : null}
                                    </div>
                                    <div onClick={()=>setIsChecked(2)} className={`bg-orange-700 border border-orange-700 rounded-full cursor-pointer ${isChecked != 2 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                        {isChecked == 2? <FiCheck size={10} className='text-white'/> : null}
                                    </div>
                                    <div onClick={()=>setIsChecked(3)} className={`bg-white border rounded-full cursor-pointer ${isChecked != 3 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                        {isChecked == 3? <FiCheck size={10} className='text-black'/> : null}
                                    </div>
                                    <div onClick={()=>setIsChecked(4)} className={`bg-gray-400 border rounded-full cursor-pointer ${isChecked != 4 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                        {isChecked == 4? <FiCheck size={10} className='text-black'/> : null}
                                    </div>
                                    <div onClick={()=>setIsChecked(5)} className={`bg-red-600 rounded-full cursor-pointer ${isChecked != 5 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                        {isChecked == 5? <FiCheck size={10} className='text-white'/> : null}
                                    </div>
                                </div>
                            </div>
                        </>
                    } 
                    />}
                </Formik>
            </section>
            <Footer />
        </>
    );
}

export default AddNewProduct;
