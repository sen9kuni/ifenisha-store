
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Menu from "../components/Menu";
import { SiVisa } from "react-icons/si";
import { Formik, Field } from "formik";
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import { resetCartMsg } from "../redux/reducers/cart";
import React from "react";
import { getAllPaymentMethod } from "../redux/asyncAction/payment";
import Image from "next/image";
import { createCheckout } from "../redux/asyncAction/checkout";
import { useRouter } from "next/router";
import { createOrder } from "../redux/asyncAction/order";
import { resetMessageCheckout } from "../redux/reducers/checkout";
import { resetOrderMsg } from "../redux/reducers/order";

let arrImage = []
const onChangeImage = (props) =>{
    arrImage.push(props)
    // console.log(arrImage);
}

const GetImage = () => {
    return(
        <>
            <Formik
                initialValues={{image: ''}}>
                {(props)=>
                    <div>
                        <input type={'file'} onChange={((e)=> onChangeImage(e.target.files[0]))} />
                    </div>
                }
            </Formik>
        </>
    )
}

export default function Order(){
    const dispatch = useDispatch();
    const checkoutSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
    })
    const navigation = useRouter();
    const paymentMethod = useSelector(state => state.payment.results);
    const successMsg = useSelector(state => state.checkout.successMsg);
    const errorMsg = useSelector(state => state.checkout.errorMsg);
    const successOrderMsg = useSelector(state => state.order.successMsg);
    const errorOrderMsg = useSelector(state => state.order.errorMsg);
    const checkoutData = useSelector(state => state.checkout.result);
    const cartData = useSelector(state => state.cart.saveData);
    const paymentImg = []; 
    paymentMethod && paymentMethod.forEach(e => paymentImg.push({logo: e.logo, id: e.id}));
    const [selectPaymentImg, setSelectPaymentImg] = React.useState();
    const [selectPayment, setSelectPayment] = React.useState();
    const onSelectPayment = (e) => {
        setSelectPayment(e.target.value);
        paymentMethod.map(el => {
            if(e.target.value == el.id) {
                setSelectPaymentImg(el.logo)
            }
        });
        // if(e.taget.value === paymentImg.)
    }
    const onCheckout = (props) => {
        const data = {payment_id: selectPayment,name: props.values.name, phone_number: props.values.phone, address: props.values.address}
        dispatch(createCheckout(data));
        // const error = Object.keys(props.errors).length
        // if(!error){
        //     console.log('aman')
        // }else{
        //     console.log('masih error');
        // }
    }
    React.useEffect(() => {
        dispatch(resetCartMsg());
        dispatch(getAllPaymentMethod());
        if(errorMsg == null && successMsg != null) {
            if(cartData?.length > 1) {
                cartData?.map((e, i) => {
                    // console.log('1');
                    dispatch(createOrder({cart_id: e.id, checkout_id: cartData?.id}))
                    if(i == cartData.length -1) {
                        dispatch(resetMessageCheckout());
                    }
                });
            } else {
                // console.log('1');
                dispatch(createOrder({cart_id: cartData[0]?.id, checkout_id: checkoutData?.id}));
                dispatch(resetMessageCheckout());
            };
        }
        if(errorOrderMsg == null && successOrderMsg != null) {
            navigation.push('/cart');
            dispatch(resetOrderMsg())        
        }
    }, [dispatch, errorMsg, successMsg, errorOrderMsg, successOrderMsg, navigation, cartData, checkoutData]);
    return(
        <div>
            <Header />
            <Banner titleBanner="Check Out" subtitleBanner="See your notifications for the latest updates"/>
            <main className="flex flex-col justify-center w-full pb-20">
                <Menu />
                <Formik
                    initialValues={{name: '', address: '', phone: '', card: 'visa', phone_region: 'indo'}}
                    validationSchema={checkoutSchema}>
                    {(props)=>
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-gray-50 max-w-[1400px] w-full p-5 flex flex-col items-center gap-2">
                                <span className="text-2xl font-semibold">Self Information</span>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <span className="text-xs">Your Name *</span>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="name" onChange={props.handleChange} />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.name}</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            <span className="text-xs">Address *</span>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="address" onChange={props.handleChange} />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.address}</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                        <Field as="select" name="phone_region" className="browser-default custom-select bg-transparent outline-none text-xs w-[60px]" onChange={props.handleChange}>
                                            <option value="indo">+62</option>
                                            <option value="ngawi">+96</option>
                                        </Field>
                                        </div>
                                        <input className="outline-none flex flex-1 bg-transparent" name="phone" onChange={props.handleChange} />
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.phone}</span>
                                </div>
                                <div className="flex flex-col max-w-[350px] w-full">
                                    <div className="flex gap-1 h-11 w-full bg-slate-100 border-[1px]">
                                        <div className="w-24 flex items-center justify-center border-r-[1px]">
                                            { selectPaymentImg ? <Image src={`${selectPaymentImg}`} alt='payment logo' width={80} height={40} objectFit='contain' /> : <SiVisa className="text-[40px]" />}
                                        </div>
                                        <Field as="select" name="card" className="browser-default custom-select bg-transparent outline-none text-xs flex flex-1" onChange={onSelectPayment}>
                                            <option>Select payment</option>
                                            {paymentMethod && paymentMethod.map((e, i) => {
                                                return (
                                                    <>
                                                        <option value={e.id} key={'key '+e.id}>{`Pay with ${e.payment_name}`}</option>
                                                    </>
                                                )
                                            })}
                                        </Field>
                                    </div>
                                    <span className="text-xs pl-1 text-red-500" type="invalid">{props.errors.card}</span>
                                </div>
                                <div>
                                    <button className="bg-gray-800 w-[120px] h-[40px] text-white" onClick={() => onCheckout(props)}>Check Out</button>
                                </div>
                                
                                {/* <GetImage /> */}
                            </div>
                        </div>
                    }
                </Formik>
            </main>
            <Footer />
        </div>
    )
}