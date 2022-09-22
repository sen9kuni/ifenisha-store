import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiX,
  FiPlus,
  FiMinus,
  FiMinusCircle,
  FiPlusCircle,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/reducers/counter";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/asyncAction/cart";
import Banner from "../components/Banner";

const Cart = () => {
  const [chooseShipping, setChooseShipping] = React.useState(0);
  return (
    <>
      <Header />
      <Banner
        basePath={"Cart"}
        basePathUrl={"/cart"}
        targetPath={"."}
        titleBanner={"Your Cart"}
        subtitleBanner={"Buy everything in your cart now!"}
      />
      <div className="grid grid-cols-12 px-[80px] my-20">
        <div className="col-span-8">
          <div className="w-full flex justify-start items-center flex-col mb-5">
            {/* title */}
            <div className="w-[730px] h-[60px] bg-white mb-3">
              <div className="w-full h-full grid grid-cols-10">
                <div className="col-span-1" />
                <div className="col-span-9 w-full h-full grid grid-cols-2 items-center">
                  <div className="col-span-1">
                    <span className="text-base text-slate-500">PRODUCTS</span>
                  </div>
                  <div className="col-span-1 flex flex-row justify-between">
                    <span className="text-base text-slate-500">PRICE</span>
                    <span className="text-base text-slate-500">QUANTITY</span>
                    <span className="text-base text-slate-500">TOTAL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* card  cart */}
            <div className="w-[730px] h-[83px] bg-white mb-3">
              <div className="w-full h-full grid grid-cols-10">
                <div className="col-span-1 flex justify-center items-center">
                  <button className="h-[20px] w-[20px] bg-red-600 mr-1 font-bold text-white flex justify-center items-center hover:bg-red-500">
                    <FiX size={15} />
                  </button>
                </div>

                <div className="col-span-9 w-full h-full grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="w-full h-full grid grid-cols-3">
                      <div className="h-full w-[69px] relative overflow-hidden">
                        <Image
                          src={
                            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                          }
                          objectFit="cover"
                          layout="fill"
                          alt="test"
                        />
                      </div>
                      <div className="col-span-1 flex items-center w-full">
                        <p className="text-lg truncate">
                          Dining Side Chair in Beige
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="w-full h-full flex flex-row justify-between items-center">
                      <span className="text-base">$10.50</span>
                      <div className="w-[100px] flex flex-row justify-between">
                        <button>
                          <FiPlusCircle />
                        </button>
                        <span className="text-base">02</span>
                        <button>
                          <FiMinusCircle />
                        </button>
                      </div>
                      <span className="font-bold">$21.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[730px] h-[83px] bg-white mb-3">
              <div className="w-full h-full grid grid-cols-10">
                <div className="col-span-1 flex justify-center items-center">
                  <button className="h-[20px] w-[20px] bg-red-600 mr-1 font-bold text-white flex justify-center items-center hover:bg-red-500">
                    <FiX size={15} />
                  </button>
                </div>

                <div className="col-span-9 w-full h-full grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="w-full h-full grid grid-cols-3">
                      <div className="h-full w-[69px] relative overflow-hidden">
                        <Image
                          src={
                            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                          }
                          objectFit="cover"
                          layout="fill"
                          alt="test"
                        />
                      </div>
                      <div className="col-span-1 flex items-center w-full">
                        <p className="text-lg truncate">
                          Dining Side Chair in Beige
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="w-full h-full flex flex-row justify-between items-center">
                      <span className="text-base">$10.50</span>
                      <div className="w-[100px] flex flex-row justify-between">
                        <button>
                          <FiPlusCircle />
                        </button>
                        <span className="text-base">02</span>
                        <button>
                          <FiMinusCircle />
                        </button>
                      </div>
                      <span className="font-bold">$21.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[730px] h-[83px] bg-white mb-3">
              <div className="w-full h-full grid grid-cols-10">
                <div className="col-span-1 flex justify-center items-center">
                  <button className="h-[20px] w-[20px] bg-red-600 mr-1 font-bold text-white flex justify-center items-center hover:bg-red-500">
                    <FiX size={15} />
                  </button>
                </div>

                <div className="col-span-9 w-full h-full grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="w-full h-full grid grid-cols-3">
                      <div className="h-full w-[69px] relative overflow-hidden">
                        <Image
                          src={
                            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                          }
                          objectFit="cover"
                          layout="fill"
                          alt="test"
                        />
                      </div>
                      <div className="col-span-1 flex items-center w-full">
                        <p className="text-lg truncate">
                          Dining Side Chair in Beige
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="w-full h-full flex flex-row justify-between items-center">
                      <span className="text-base">$10.50</span>
                      <div className="w-[100px] flex flex-row justify-between">
                        <button>
                          <FiPlusCircle />
                        </button>
                        <span className="text-base">02</span>
                        <button>
                          <FiMinusCircle />
                        </button>
                      </div>
                      <span className="font-bold">$21.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[730px] h-[70px] bg-white border-t-2 border-slate-300 flex items-end pb-2">
              <div className="w-full grid grid-cols-2">
                <div className="col-span-1 w-full flex flex-row justify-between border-b-2 border-slate-300">
                  <input
                    class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter your coupon code"
                  />
                  <button className="font-bold">Apply Coupon</button>
                </div>
                <div className="col-span-1 w-full flex items-center">
                  <div className="w-full grid grid-cols-2">
                    <div className="col-span-1" />
                    <div className="col-span-1 w-full flex flex-row justify-end">
                      <button className="mr-5 text-base text-slate-300">
                        Clear Cart
                      </button>
                      <button className="font-bold text-black">
                        Update Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gray-100 ">
          <div className="grid grid-flow-row grid-rows-6 h-full">
            <div className="row-span-5 p-5 mb-5">
                <div className="flex flex-col gap-10">
                    <span className="font-bold">Cart Total</span>
                    <div className="flex justify-between">
                        <span className="font-bold">Subtotal</span>
                        <span className="font-bold">$124</span>
                    </div>
                    <div className="flex justify-between items-start">
                        <span className="font-bold">Shipping</span>
                        <div className="flex flex-col w-2/5 gap-2">
                          <div className="flex justify-between items-center">
                            <div className="border-2 border-gray-500 rounded-full p-2 cursor-pointer shadow-none" onClick={()=>setChooseShipping(0)}>
                                {chooseShipping === 0 ? <div className="p-1 bg-red-600 rounded-full" /> : <div className="p-1 bg-transparent rounded-full" />}
                            </div>
                            <span>Flat rate: $10</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="border-2 border-gray-500 rounded-full p-2 cursor-pointer shadow-none" onClick={()=>setChooseShipping(1)}>
                                {chooseShipping === 1 ? <div className="p-1 bg-red-600 rounded-full" /> : <div className="p-1 bg-transparent rounded-full" />}
                            </div>
                            <span>Free shipping</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="border-2 border-gray-500 rounded-full p-2 cursor-pointer shadow-none" onClick={()=>setChooseShipping(2)}>
                                {chooseShipping === 2 ? <div className="p-1 bg-red-600 rounded-full" /> : <div className="p-1 bg-transparent rounded-full" />}
                            </div>
                            <span>Local pickup</span>
                          </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 w-full"/>
                    <div className="flex justify-between">
                        <span className="font-bold">Total Price</span>
                        <span className="font-bold">$124</span>
                    </div>
                </div>
            </div>
            <div className="bg-black flex justify-center items-center cursor-pointer hover:bg-gray-800">
                <span className="text-white font-semibold text-lg">Procced To Check Out</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
// function CompCart(props){
//     const dispatch = useDispatch(increment);
//     const count = useState((state)=>state?.counter?.num);
//     const [value, setValue] = React.useState(parseInt(props.quantity));
//     console.log(typeof value);
//     return(
//         <div className='grid grid-cols-12 mt-[60px] mb-[50px] gap-5'>
//             <div className='col-span-1 flex items-center justify-center'><button><FiX /></button></div>
//             <div className='col-span-2 flex items-center justify-center'><Image src={'/images/cart-chair1.png'} alt={'chair'} width={69} height={83} /></div>
//             <div className='col-span-3 flex items-center justify-center'>{props.name}</div>
//             <div className='col-span-2 flex items-center justify-center'><p>{props.price}</p></div>
//             <div className='col-span-2 flex flex-row justify-between items-center'>
//                 <button onClick={()=>setValue(value-1)}><FiMinus /></button>
//                 {value}
//                 <button onClick={()=>setValue(value+1)}><FiPlus /></button>
//             </div>
//             <div className='col-span-2 flex items-center justify-center'><p>$ {value * parseInt(props.price)}</p></div>
//         </div>
//     );
// }

// class Cart extends React.Component {
//     render(props) {
// export default function Cart(){
//     // console.log(props);

//     const dispatch = useDispatch();
//     const response = useSelector((state) => state.cart?.results);
//     console.log(response.results);

//     React.useEffect(()=>{
//         dispatch(getCart());
//     }, [dispatch]);
//     return(
//         <>
//             <Header /><div>
//                 <div className='bg-cart flex-col pt-[74px] pr-[521] pb-[74px] pl-[521]'>
//                     <h className='cart-text mb-5 flex items-center justify-center'>Your Cart</h>
//                     <h4 className='cart-text2 flex items-center justify-center'>Buy everything in your cart now!</h4>
//                 </div>
//                 <div className='grid grid-cols-4 pt-[100px] pr-[140px] pb-[120px] pl-[140px] gap-10'>
//                     <div className='col-span-3'>
//                         <div className='grid grid-cols-12  gap-5'>
//                             <div className='col-span-1'></div>
//                             <p className='col-span-2 text-center'>PRODUCT</p>
//                             <div className='col-span-3'></div>
//                             <p className='col-span-2 text-center'>PRICE</p>
//                             <p className='col-span-2 text-center'>QUANTITY</p>
//                             <p className='col-span-2 text-center'>TOTAL</p>
//                         </div>
//                         {response.result?.map(o=>{
//                             return(
//                                 <CompCart key={o.id} pict={o.image} name={o.product_name}  price={o.price} quantity={o.quantity}/>
//                             );
//                         })}
//                         <hr />
//                         <div className='grid grid-cols-2'>
//                             <div className='mt-8 items-end'>
//                                 <div className='flex flex-row justify-between'>
//                                     <button>Enter Your Coupon Code</button>
//                                     <button>Apply Coupon</button>
//                                 </div>
//                                 <hr className='mt-5' />
//                             </div>
//                             <div className='flex justify-end gap-10'>
//                                 <button>Clear Cart</button>
//                                 <button>Update Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='bg-zinc-200'>
//                         <div className='p-[30px]'>
//                             <div className='text-sm mb-[44px]'>cart total</div>
//                             <div className='flex justify-between mb-[38px]'>
//                                 <p className='text-sm'>subtotal</p>
//                                 <p className='text-sm flex justify-end'>total amount</p>
//                             </div>
//                             <div className='flex justify-between mb-[38px]'>
//                                 <div className='text-sm '>Shipping</div>
//                                 <div>
//                                     <div className='flex justify-between items-center mb-[16px] gap-3'>
//                                         <input type='radio' id='html' name='fav_language' value='HTML' />
//                                         <label htmlFor='html' className='text-sm'>Flat rate: $10</label>
//                                     </div>
//                                     <div className='flex justify-between items-center mb-[16px] gap-3'>
//                                         <input type='radio' id='html' name='fav_language' value='HTML' />
//                                         <label htmlFor='html' className='text-sm'>Free shipping</label>
//                                     </div>
//                                     <div className='flex justify-between items-center mb-[16px] gap-3'>
//                                         <input type='radio' id='html' name='fav_language' value='HTML' />
//                                         <label htmlFor='html' className='text-sm'>Local pickup</label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <hr className='mb-[16px]' />
//                             <div className='flex justify-between mb-[51px]'>
//                                 <div className='text-sm'>Total price</div>
//                                 <div className='text-sm flex justify-end'>$125</div>
//                             </div>
//                         </div>
//                         <Link href='/checkout'>
//                             <button className='bg-black pt-[24px] pl-[105px] pr-[115px] pb-[24px] text-white'>Procced To Check Out</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div><Footer />
//         </>
//     );
// }
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
