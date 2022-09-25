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
import { deleteCart, getCart, updateCartUser } from "../redux/asyncAction/cart";
import Banner from "../components/Banner";
import Router, { useRouter } from "next/router";
import CardCart from "../components/CardCart";
import { convertMoney } from "./profile/add-product";
import { checkCoupon } from "../redux/asyncAction/coupon";
import { resetMessage } from "../redux/reducers/coupon";
import { resetCartMsg, saveDataCartUser } from "../redux/reducers/cart";
import { resetMessageCheckout } from "../redux/reducers/checkout";
import { resetOrderMsg } from "../redux/reducers/order";

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useRouter();
  const token = useSelector(state=>state.auth.token);
  const cart = useSelector( state => state.cart.results);
  const successMsg = useSelector(state => state.cart.successUpdateMsg);
  const errorMsg = useSelector(state => state.cart.errorUpdateMsg);
  const successUpdateCartMsg = useSelector(state => state.cart.successUpdateCartMsg);
  const errorUpdateCartMsg = useSelector(state => state.cart.errorUpdateCartMsg);
  const subTotalPrice = useSelector(state => state.cart.subTotalPrice);
  const [chooseShipping, setChooseShipping] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [coupon, setCoupon] = React.useState();
  const couponData = useSelector(state => state.coupon.result);
  const errorMsgCoupon = useSelector(state => state.coupon.errorMsg);
  const successMsgCoupon = useSelector(state => state.coupon.successMsg);
  const [showCouponMsg, setShowCouponMsg] = React.useState(false);
  const [showCartMsg, setShowCartMsg] = React.useState(false);
  // console.log(subTotalPrice)
  const onApplyCoupon = () => {
    dispatch(checkCoupon({code: coupon}))
  }
  const onNavigateToCheckout = () => {
    let shippingName;
    switch (chooseShipping) {
      case 0:
        shippingName = 'flat rate 10%'
        break;
      case 1:
        shippingName = 'free shipping'
        break;
      case 2:
        shippingName = 'local picking'
        break;
      default:
        window.alert('no shipping choosed')
        break;
    }
    const couponId = couponData && couponData?.id;

    if(cart?.length > 1) {
      cart?.forEach(e => {
        if(e.quantity == 0) {
          window.alert('Your cart with zero quantity can\'t be processed.')
        } else {
          dispatch(updateCartUser({id: e.id, productId: e.product_id, quantity: e.quantity, couponId: couponId, shipping: shippingName}));
          dispatch(saveDataCartUser({id: e.id}));
          // console.log('product id ', e.product_id, 'quantity ', e.quantity, 'coupon id ', couponId, 'shipping ', shippingName)
        }
      });
    } else {
      dispatch(updateCartUser({id: cart[0]?.id, productId: cart[0]?.product_id, quantity: cart[0]?.quantity, couponId: couponId, shipping: shippingName}));
      dispatch(saveDataCartUser({id: cart[0]?.id}));
    }
  }
  if(!token){
    Router.push('/login')
  }
  React.useEffect(()=>{
    dispatch(getCart());
    dispatch(resetMessageCheckout());
    dispatch(resetOrderMsg());
    dispatch(resetMessage());
    setLoading(true);
    setTimeout(()=>{
        setLoading(false);
    }, 1000);
  },[dispatch])
  React.useEffect(()=>{
    if(errorMsg == null && successMsg != null){
      dispatch(getCart());
      setLoading(true);
      setTimeout(()=>{
          setLoading(false);
      }, 1000);
    }
    if(!coupon) {
      dispatch(resetMessage());
    }
    if(errorMsgCoupon != null) {
      setShowCouponMsg(true);
      setTimeout(() => {
        setShowCouponMsg(false);
      }, 3000);
    }
    if(successMsgCoupon != null) {
      setShowCouponMsg(true);
      setTimeout(() => {
        setShowCouponMsg(false);
      }, 3000);
    }
    if(successUpdateCartMsg != null && errorUpdateCartMsg == null) {
      setShowCartMsg(true);
      setTimeout(() => {
        setShowCartMsg(false)
        navigation.push('/checkout')
      }, 2500);
    }
  },[dispatch, errorMsg, successMsg, errorMsgCoupon, successMsgCoupon, coupon, successUpdateCartMsg, errorUpdateCartMsg, navigation, showCartMsg])
  return (
    <>
    {!cart && loading ? 
      <div className='text-center min-h-screen flex justify-center items-center'>
          <div role='status '>
              <svg className='inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/>
                  <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/>
              </svg>
              <span className='sr-only'>Loading...</span>
          </div>
      </div> : <>
        <Header />
        <Banner
          basePath={"Cart"}
          basePathUrl={"/cart"}
          targetPath={"."}
          titleBanner={"Your Cart"}
          subtitleBanner={"Buy everything in your cart now!"}
        />
        {successUpdateCartMsg && showCartMsg ? (
          <>
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-8 shadow-md  mt-20" role="alert">
              <div class="flex justify-center">
                <div>
                  <p class="font-bold text-3xl">Cart has been updated.</p>
                  <p class="text-xl text-center">{successUpdateCartMsg}</p>
                </div>
              </div>
            </div>
          </>
        ) : null }
        {errorUpdateCartMsg && showCartMsg ? (
          <>
            <div class="bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-8 shadow-md  mt-20" role="alert">
              <div class="flex justify-center">
                <div>
                  <p class="font-bold text-3xl">Failed to update cart.</p>
                  <p class="text-xl text-center">{errorUpdateCartMsg}</p>
                </div>
              </div>
            </div>
          </>
        ) : null }
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
            {cart ? cart.map((e, i)=>{
              return(
                <>
                  <CardCart key={'key '+i+e.id} id={e.id} product_id={e.product_id} onClick={()=>dispatch(deleteCart(e.id))} image={e.products.product_images.split(',')[0]} nameProduct={e.products.product_name} price={e.products.price} quantity={e.quantity} total={e.total_price} />
                </>
              )
            }) : <div className="min-h-[300px] flex justify-center items-center text-2xl font-semibold">
                <span>You don&apos;t have any cart list</span>
              </div>}
              <div className="w-[730px] h-[70px] bg-white border-t-2 border-slate-300 flex items-end pb-2">
                <div className="w-full grid grid-cols-2">
                  <div className="col-span-1 w-full flex flex-row justify-between border-b-2 border-slate-300">
                    <input
                      class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      placeholder="Enter your coupon code"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button onClick={onApplyCoupon} className="font-bold">Apply Coupon</button>
                  </div>
                  <div className="col-span-1 w-full flex items-center">
                    <div className="w-full grid grid-cols-2">
                      <div className="col-span-1" />
                      <div className="col-span-1 w-full flex flex-row justify-end">
                        <button className="mr-5 text-base text-black">
                          Clear Cart
                        </button>
                        {/* <button className="font-bold text-black">
                          Update Cart
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {errorMsgCoupon && showCouponMsg ? (
              <>
                <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                  <p class="font-bold">Coupon invalid</p>
                  <p>{errorMsgCoupon}</p>
                </div>
              </>
            ) : null}
            {successMsgCoupon && showCouponMsg ? (
              <>
                <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                  <p class="font-bold">Coupon valid</p>
                  <p>{successMsgCoupon}</p>
                </div>
              </>
            ) : null}
          </div>
          <div className="col-span-4 bg-gray-100 ">
            <div className="grid grid-flow-row grid-rows-6 h-full">
              <div className="row-span-5 p-5 mb-5">
                  <div className="flex flex-col gap-10">
                      <span className="font-bold">Cart Total</span>
                      <div className="flex justify-between">
                          <span className="font-bold">Subtotal</span>
                          <span className="font-bold">{convertMoney(subTotalPrice)}</span>
                      </div>
                      <div className="flex justify-between items-start">
                          <span className="font-bold">Shipping</span>
                          <div className="flex flex-col w-2/5 gap-2">
                            <div className="flex justify-between items-center">
                              <div className="border-2 border-gray-500 rounded-full p-2 cursor-pointer shadow-none" onClick={()=>setChooseShipping(0)}>
                                  {chooseShipping === 0 ? <div className="p-1 bg-red-600 rounded-full" /> : <div className="p-1 bg-transparent rounded-full" />}
                              </div>
                              <span>Flat rate: 10%</span>
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
                          <span className="font-bold">{chooseShipping == 0 ? convertMoney(subTotalPrice+(subTotalPrice*0.1)) : convertMoney(subTotalPrice)}</span>
                      </div>
                  </div>
              </div>
              <button onClick={onNavigateToCheckout} className={`${cart ? 'bg-black hover:bg-gray-800' : 'bg-gray-500'} flex justify-center items-center `} disabled={cart ? false : true}>
                  <span className="text-white font-semibold text-lg">Procced To Check Out</span>
              </button>
            </div>
          </div>
        </div>
      </>}
    </>
  );
};
export default Cart;