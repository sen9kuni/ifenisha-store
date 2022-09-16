import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiX,FiPlus,FiMinus } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/reducers/counter';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/asyncAction/cart';

function CompCart(props){
    const dispatch = useDispatch(increment);
    const count = useState((state)=>state?.counter?.num);
    const [value, setValue] = React.useState(parseInt(props.quantity));
    console.log(typeof value);
    return(
        <div className='grid grid-cols-12 mt-[60px] mb-[50px] gap-5'>
            <div className='col-span-1 flex items-center justify-center'><button><FiX /></button></div>
            <div className='col-span-2 flex items-center justify-center'><Image src={'/images/cart-chair1.png'} alt={'chair'} width={69} height={83} /></div>
            <div className='col-span-3 flex items-center justify-center'>{props.name}</div>
            <div className='col-span-2 flex items-center justify-center'><p>{props.price}</p></div>
            <div className='col-span-2 flex flex-row justify-between items-center'>
                <button onClick={()=>setValue(value-1)}><FiMinus /></button>
                {value}
                <button onClick={()=>setValue(value+1)}><FiPlus /></button>
            </div>
            <div className='col-span-2 flex items-center justify-center'><p>$ {value * parseInt(props.price)}</p></div>
        </div>
    );
}

// class Cart extends React.Component {
//     render(props) {
export default function Cart(){
    // console.log(props);

    const dispatch = useDispatch();
    const response = useSelector((state) => state.cart?.results);
    console.log(response.results);
    
    React.useEffect(()=>{
        dispatch(getCart());
    }, [dispatch]);
    return(
        <>
            <Header /><div>
                <div className='bg-cart flex-col pt-[74px] pr-[521] pb-[74px] pl-[521]'>
                    <h className='cart-text mb-5 flex items-center justify-center'>Your Cart</h>
                    <h4 className='cart-text2 flex items-center justify-center'>Buy everything in your cart now!</h4>
                </div>
                <div className='grid grid-cols-4 pt-[100px] pr-[140px] pb-[120px] pl-[140px] gap-10'>
                    <div className='col-span-3'>
                        <div className='grid grid-cols-12  gap-5'>
                            <div className='col-span-1'></div>
                            <p className='col-span-2 text-center'>PRODUCT</p>
                            <div className='col-span-3'></div>
                            <p className='col-span-2 text-center'>PRICE</p>
                            <p className='col-span-2 text-center'>QUANTITY</p>
                            <p className='col-span-2 text-center'>TOTAL</p>
                        </div>
                        {response.result?.map(o=>{
                            return(
                                <CompCart key={o.id} pict={o.image} name={o.product_name}  price={o.price} quantity={o.quantity}/>
                            );
                        })}
                        <hr />
                        <div className='grid grid-cols-2'>
                            <div className='mt-8 items-end'>
                                <div className='flex flex-row justify-between'>
                                    <button>Enter Your Coupon Code</button>
                                    <button>Apply Coupon</button>
                                </div>
                                <hr className='mt-5' />
                            </div>
                            <div className='flex justify-end gap-10'>
                                <button>Clear Cart</button>
                                <button>Update Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-zinc-200'>
                        <div className='p-[30px]'>
                            <div className='text-sm mb-[44px]'>cart total</div>
                            <div className='flex justify-between mb-[38px]'>
                                <p className='text-sm'>subtotal</p>
                                <p className='text-sm flex justify-end'>total amount</p>
                            </div>
                            <div className='flex justify-between mb-[38px]'>
                                <div className='text-sm '>Shipping</div>
                                <div>
                                    <div className='flex justify-between items-center mb-[16px] gap-3'>
                                        <input type='radio' id='html' name='fav_language' value='HTML' />
                                        <label htmlFor='html' className='text-sm'>Flat rate: $10</label>
                                    </div>
                                    <div className='flex justify-between items-center mb-[16px] gap-3'>
                                        <input type='radio' id='html' name='fav_language' value='HTML' />
                                        <label htmlFor='html' className='text-sm'>Free shipping</label>
                                    </div>
                                    <div className='flex justify-between items-center mb-[16px] gap-3'>
                                        <input type='radio' id='html' name='fav_language' value='HTML' />
                                        <label htmlFor='html' className='text-sm'>Local pickup</label>
                                    </div>
                                </div>
                            </div>
                            <hr className='mb-[16px]' />
                            <div className='flex justify-between mb-[51px]'>
                                <div className='text-sm'>Total price</div>
                                <div className='text-sm flex justify-end'>$125</div>
                            </div>
                        </div>
                        <Link href='/checkout'>
                            <button className='bg-black pt-[24px] pl-[105px] pr-[115px] pb-[24px] text-white'>Procced To Check Out</button>
                        </Link>
                    </div>
                </div>
            </div><Footer />
        </>
    );
}
// }
// export const getServerSideProps= async(context)=>{
//     // console.log(context);
//     const cookie = cookies(context);
//     console.log(cookie);
//     const {data} = await axiosApiIntances().get('/cart', {
//         headers: {
//             Authorization: 'Bearer '+cookie.token
//         }
//     });
//     console.log(data);
//     return {props:{
//         data: data
//     }};
// };
// const mapStateToProps = (state) => ({
//     num: state.counter.num
// });

// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);