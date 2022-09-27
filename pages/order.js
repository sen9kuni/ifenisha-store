
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Image from 'next/image';
import chair from '../public/images/chair_order.png';
import { TbCheck, TbChevronDown } from 'react-icons/tb';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import CardOrder from '../components/CardOrder';
import { getOrderHistory } from '../redux/asyncAction/order';
import { useRouter } from 'next/router';

export default function Order(){
    const dispacth = useDispatch()
    const role = useSelector((state) => state.auth.role);
    const idUser = useSelector(state=>state.auth.id);
    const orderResults = useSelector(state=>state.order.results);
    const menuTab = role === 'seller' ? ['Profile', 'My Product', 'Selling Product', 'My Order', 'Shop Order'] : ['Profile', 'My Order']
    const linkTo = role === 'seller' ? [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product/all?page=1&limit=5', '/profile/add-product', '/order', '/shop-order'] : [`/profile/${role==='seller'?'seller':'customer'}`, '/order'];
    const indexTab = 3;
    const [order, setOrder] = React.useState({active: false, left: 0, top: 0});
    const [product, setProduct] = React.useState({active: false, left: 0, top: 0});
    // const pagesOrder = [...Array(2)]
    const router = useRouter();
    const pagesOrder = [...Array(orderResults?.pageInfo?.pages)]

    const menuOrder = (e) => {
        setOrder({active: !order.active, left: e.pageX - 60, top: e.pageY + 30});
    };
    const menuProduct = (e) => {
        setProduct({active: !product.active, left: e.pageX - 60, top: e.pageY + 30});
    };

    const onClickPage = (query) => {
        router.push(`/order?type=${query.type? query.type:'all'}&page=${query.page}`)
    };

    React.useEffect(() => {
        dispacth(getOrderHistory({type: router.query.type == undefined? 'all':router.query.type, id: idUser, role: 'customer', page: router.query.page == undefined? 1:router.query.page}))
    }, [dispacth, idUser, router.query])
    // console.log('111', router.query.page);

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
                {/* <div className='flex flex-col items-center w-full'>
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
                </div> */}
                <div className='px-[140px] w-full mb-5'>
                    <div className='w-full h-[60px] mb-3'>
                        <div className='w-full h-full grid grid-cols-3'>
                            <div className='col-span-1 flex justify-start items-center'>
                                <span className='font-normal text-xl text-slate-500'>PRODUCTS</span>
                            </div>
                            <div className='col-span-2'>
                                <div className='w-full h-full grid-cols-4 flex flex-row justify-between items-center'>
                                    <div className='col-span-1 w-full flex justify-center'>
                                    <span className='font-normal text-xl text-slate-500'>PRICE</span>
                                    </div>
                                    <div className='col-span-1 w-full flex justify-center'>
                                    <span className='font-normal text-xl text-slate-500'>QUANTITY</span>
                                    </div>
                                    <div className='col-span-1 w-full flex justify-center'>
                                    <span className='font-normal text-xl text-slate-500'>STATUS ORDER</span>
                                    </div>
                                    <div className='col-span-1 w-full flex justify-center'>
                                    <span className='font-normal text-xl text-slate-500'>TOTAL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mb-5 flex justify-end gap-3'>
                        <button onClick={()=> onClickPage({type: 'complate', page: 1})} className={`${router.query.type == 'complate'? 'bg-black':'bg-white'} border border-gray-400 py-2 px-4 rounded-lg`}>
                            <span className={`${router.query.type == 'complate'? 'text-white':'text-black'}`}>Complate</span>
                        </button>
                        <button onClick={()=> onClickPage({type: 'sent', page: 1})} className={`${router.query.type == 'sent'? 'bg-black':'bg-white'} border border-gray-400 py-2 px-4 rounded-lg`}>
                            <span className={`${router.query.type == 'sent'? 'text-white':'text-black'}`}>Sent</span>
                        </button>
                        <button onClick={()=> onClickPage({type: 'paid', page: 1})} className={`${router.query.type == 'paid'? 'bg-black':'bg-white'} border border-gray-400 py-2 px-4 rounded-lg`}>
                            <span className={`${router.query.type == 'paid'? 'text-white':'text-black'}`}>Paid</span>
                        </button>
                        <button onClick={()=> onClickPage({type: 'process', page: 1})} className={`${router.query.type == 'process'? 'bg-black':'bg-white'} border border-gray-400 py-2 px-4 rounded-lg`}>
                            <span className={`${router.query.type == 'process'? 'text-white':'text-black'}`}>Process</span>
                        </button>
                        <button onClick={()=> onClickPage({type: 'cancel', page: 1})} className={`${router.query.type == 'cancel'? 'bg-black':'bg-white'} border border-gray-400 py-2 px-4 rounded-lg`}>
                            <span className={`${router.query.type == 'cancel'? 'text-white':'text-black'}`}>Cancel</span>
                        </button>
                        <button onClick={()=> onClickPage({type: 'all', page: 1})} className={`${router.query.type == 'all' || router.query.type == undefined? 'bg-black':'bg-white'} border border-gray-400 py-2 px-4 rounded-lg`}>
                            <span className={`${router.query.type == 'all' || router.query.type == undefined? 'text-white':'text-black'}`}>All</span>
                        </button>
                    </div>

                    {/* <CardOrder nameProduct='aaaaaa' status='paid' price='5000' qty='5' total='500000' role='cutomer' />
                    <CardOrder nameProduct='aaaaaa' status='paid' price='5000' qty='5' total='500000' role='cutomer' />
                    <CardOrder nameProduct='aaaaaa' status='paid' price='5000' qty='5' total='500000' role='cutomer' />
                    <CardOrder nameProduct='aaaaaa' status='sent' price='5000' qty='5' total='500000' role='cutomer' /> */}
                    {orderResults.result?.map((e) => {
                        return <CardOrder key={e.id+e.status_payment} nameProduct={e.cart.products.product_name} image={e.cart.products.product_images.split(',')[0]} status={e.status_payment} qty={e.cart.quantity} role='customer' price={e.cart.products.price} total={e.cart.total_price} idOrder={e.id} />
                    })}

                    <div className='flex justify-center gap-2'>
                        {
                            orderResults.result && pagesOrder.map((e, i)=>{
                                return(
                                    <button key={i} onClick={()=> onClickPage({type: router.query.type == undefined? 'all':router.query.type, page: i+1})} className={`${orderResults.pageInfo?.currentPage == i+1?'bg-black':'bg-white'} border border-gray-400 py-3 px-4 rounded-lg`}>
                                        <span className={`${orderResults.pageInfo?.currentPage == i+1?'text-white':'text-black'}`}>{i+1}</span>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}