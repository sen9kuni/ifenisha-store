import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SidebarProduct from '../../components/SidebarProduct';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';
import ImgDummy from '../../public/images/item-example.png';
import CardProduct from '../../components/CardProduct';
import cookies from 'next-cookies';
import axiosServer from '../../helpers/httpServer';
import Router from 'next/router';
import {BsShop} from 'react-icons/bs';
import CardProducts from '../../components/CardProducts';

export async function getServerSideProps(context){
    try{
        const search = !context.query?.search?'':context.query.search;
        const page = !context.query?.page? 1 :context.query.page;
        const sortBy = !context.query?.sortBy? 'created_at': context.query.sortBy;
        const sort = !context.query?.sort? '': context.query.sort;
        const category = !context.query?.category? '': context.query.category;
        const color = !context.query?.color? '': context.query.color;
        const brand = !context.query?.brand? '': context.query.brand;
        // const sort = !context.query?.sort? 'asc': context.query.sort;
        // const sort = context.query.sort;
        const product = await axiosServer.get(
            // `/products?search=${search}&sortBy=${sortBy}&sort=${sort}&page=${page ?? 1}`
            `/products-all?search=${search}&sort=${sortBy}&sortBy=${sort}&page=${page ?? 1}&category=${category}&color=${color}&brand=${brand}&limit=12`
        );
        return{
            props:{
                dataProduct:product.data.result,
                dataPage:product.data.pageInfo
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

function Product(props) {
    const itemsCol = props.dataProduct;
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [isActive, setIsActive] = React.useState('');
    const [sorting,setSorting] = React.useState('asc');
    const buttonPaginate = [];
    for( let i = 0; i <= props.dataPage?.totalPage; i++){
        buttonPaginate.push(i);
    };
    const [paginate, setPaginet] = React.useState(buttonPaginate[1]);
    React.useEffect(()=>{
        // Router.push(`/product/products?page=${paginate}&sortBy=${isActive}&sort=${sorting}`);
        Router.push(`/product/products?page=${paginate}&sort=${sorting}&sortBy=${isActive}`);
    },[paginate,isActive,sorting]);
    return (
        <>
            <Header />
            <Banner basePath='Shop' targetPath='product' titleBanner='Let’s Shopping' subtitleBanner='Find and buy the one you like'/>
            <section className='grid row-auto grid-cols-12 gap-5 mx-20'>
                <SidebarProduct/>
                <main className='col-start-4 col-end-13 ml-10'>
                    <div className='flex justify-between font-semibold'>
                        <span className='text-sm'>Showing 1-{props.dataProduct?.length} of {props.dataPage?.totalData} Results</span>
                        <div className='flex flex-col items-end'>
                            <button onClick={()=>{setShowDropdown(!showDropdown);}} className='flex justify-center items-center gap-3'>
                                <span className='text-sm'>Sort by</span>
                                {showDropdown ? <FiChevronUp/> : <FiChevronDown/>}
                            </button>
                            {showDropdown?<div className='bg-black w-40 flex flex-col py-10 px-5 gap-7 mt-10 absolute z-10 rounded-lg'>
                                <span onClick={()=>{setIsActive('created_at'); setSorting('desc'); setShowDropdown(false);}} className={`${isActive == 1 ? 'text-white' : 'text-gray-400' } hover:text-white cursor-pointer`}>Latest Product</span>
                                <span onClick={()=>{setIsActive('price'); setSorting('desc');setShowDropdown(false);}} className={`${isActive == 2 ? 'text-white' : 'text-gray-400' } hover:text-white cursor-pointer`}>More Expensive</span>
                                <span onClick={()=>{setIsActive('price'); setSorting('asc');setShowDropdown(false);}} className={`${isActive == 3 ? 'text-white' : 'text-gray-400' } hover:text-white cursor-pointer`}>More Cheap</span>
                            </div> : null}
                        </div>
                    </div>
                    {/* <div className='grid grid-cols-3 gap-4'>
                        {itemsCol?.map((e)=>{
                            console.log(e.product_images);
                            return(
                                <>
                                    <CardProduct productUrl={`/product/${e.id}/details`} img={e.product_images?<Image src={e.product_images.split(',')[0]}  width={260} height={260} layout={'responsive'} alt='img-product'/>:<BsShop size={260}/>} title={e.product_name} subtitle={e.price} />
                                    <CardProducts productUrl={`/product/${e.id}/details`} img={e.product_images?<Image src={e.product_images.split(',')[0]} objectFit='cover' layout='fill' alt='img-product' />:<BsShop size={260}/>} title={e.product_name} subtitle={e.price} />
                                </>
                            );
                        })}
                        <br/>
                        <div className='flex gap-5 py-40'>
                            {buttonPaginate.map(e=>{
                                return (
                                    <>
                                        <button onClick={()=>setPaginet(e)} className={`${paginate == e ? 'bg-black' : 'bg-white'} border border-gray-400 py-3 px-4 rounded-lg`}>
                                            <span className={`${paginate == e ? 'text-white' : 'text-black' } `}>{e}</span>
                                        </button>
                                    </>
                                );
                            })}
                        </div>
                    </div> */}
                    <div className='flex flex-col'>
                        <div className='wrap-products grid grid-cols-3 gap-7'>
                            {itemsCol?.map((e)=>{
                                return(
                                    <>
                                        {/* <CardProduct productUrl={`/product/${e.id}/details`} img={e.product_images?<Image src={e.product_images.split(',')[0]}  width={260} height={260} layout={'responsive'} alt='img-product'/>:<BsShop size={260}/>} title={e.product_name} subtitle={e.price} /> */}
                                        <CardProducts key={e.id + e.product_name} productUrl={`/product/${e.id}/details`} img={e.product_images?<Image src={e.product_images.split(',')[0]} objectFit='cover' layout='fill' alt='img-product' />:<BsShop size={260}/>} title={e.product_name} subtitle={e.price} />
                                    </>
                                );
                            })}
                        </div>
                        
                        <br/>
                        <div className='flex gap-5 py-40 mx-auto'>
                            {buttonPaginate.map(e=>{
                                if(e!==0){
                                    return (
                                        <>
                                            <button onClick={()=>setPaginet(e)} className={`${paginate == e ? 'bg-black' : 'bg-white'} border border-gray-400 py-3 px-4 rounded-lg`}>
                                                <span className={`${paginate == e ? 'text-white' : 'text-black' } `}>{e}</span>
                                            </button>
                                        </>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </main>
            </section>
            <Footer />
        </>
    );
}

export default Product;
