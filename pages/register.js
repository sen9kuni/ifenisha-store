
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Link from 'next/link';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../redux/asyncAction/auth';
import React from 'react';
import Router from 'next/router';
import { resetmsg } from '../redux/reducers/auth';

export default function Register(){
    const registerSchema = Yup.object().shape({
        email: Yup.string().required('Required'),
        password: Yup.string().min(6).required('Required')
    });

    const dispatch = useDispatch();
    const successmsg = useSelector((state=>state.auth.successmsg));
    const onRegister = (props) => {
        const error = Object.keys(props.errors).length;
        const email = props.values.email;
        const password = props.values.password;
        const role = props.values.role;
        const request = {email,password,role};
        if(!error){
            dispatch(register(request));
            console.log('aman');
        }else{
            console.log('masih error');
        }
    };
    React.useEffect(()=>{
        if(successmsg){
            dispatch(resetmsg());
            Router.push('/login');
        }
    },[successmsg]);
    return(
        <>
            <Header />
            <Banner titleBanner='My Account' subtitleBanner='Register and log in with your account to be able to shop at will'/>
            <main className='flex justify-center'>
                <Formik
                    initialValues={{email: '', password: '', role: 'Customer'}}
                    validationSchema={registerSchema}>
                    {(props)=>
                        <div className='flex bg-gray-50 flex-col items-center w-full'>
                            <div className='max-w-[1400px] w-full p-5 flex justify-center gap-16'>
                                <div className='flex flex-col gap-6'>
                                    <Link href={'/login'}><span className='text-2xl font-semibold cursor-pointer text-gray-300'>Login Account</span></Link>
                                    <hr/>
                                    <Link href={'/register'}><span className='text-2xl font-semibold cursor-pointer'>Register Account</span></Link>
                                </div>
                                <div className='flex flex-col gap-3 max-w-[350px] w-full'>
                                    <span className='text-2xl font-semibold'>Register</span>
                                    <div className='flex flex-col max-w-[350px] w-full'>
                                        <div className='flex gap-1 h-11 w-full bg-slate-100 border-[1px]'>
                                            <div className='w-24 flex items-center justify-center border-r-[1px]'>
                                                <span className='text-xs'>Email *</span>
                                            </div>
                                            <input className='outline-none flex flex-1 bg-transparent' type='text' name='email' onChange={props.handleChange} />
                                        </div>
                                        <span className='text-xs pl-1 text-red-500' type='invalid'>{props.errors.email}</span>
                                    </div>
                                    <div className='flex flex-col max-w-[350px] w-full'>
                                        <div className='flex gap-1 h-11 w-full bg-slate-100 border-[1px]'>
                                            <div className='w-24 flex items-center justify-center border-r-[1px]'>
                                                <span className='text-xs'>Password *</span>
                                            </div>
                                            <input className='outline-none flex flex-1 bg-transparent' type='password' name='password' onChange={props.handleChange} />
                                        </div>
                                        <span className='text-xs pl-1 text-red-500' type='invalid'>{props.errors.password}</span>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className='flex items-center gap-1'>
                                            <input className='' type='radio' name='role' value='Customer' checked onChange={props.handleChange} />
                                            <span className='text-sm'>I’m Customer</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <input className='' type='radio' name='role' value='Seller' onChange={props.handleChange} />
                                            <span className='text-sm'>I’m Seller</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='bg-gray-800 w-[120px] h-[40px] text-white' onClick={() => onRegister(props)}>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </Formik>
            </main>
            <Footer />
        </>
    );
}