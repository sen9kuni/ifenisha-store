import * as Yup from 'yup';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../../components/Banner';
import {FiEdit3, FiLogOut} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { editPhotoCustomer, editProfileCustomer, getProfileCustomer } from '../../redux/asyncAction/customer';
import ModalChangeName from '../../components/ModalEditProfile/ModalChangeName';
import Router from 'next/router';
import { resetMsgProfileCos } from '../../redux/reducers/customer';
import default_image from '../../public/images/default.jpg';

const nameSechema = Yup.object().shape({
    full_name: Yup.string().min(3, 'full name must be at least 3 characters').required('full name is a required field').optional(),
    email: Yup.string().email('Invalid email address format').required().optional(),
    store_name: Yup.string().min(5).required().optional(),
    store_desc: Yup.string().min(10).required().optional()
});

function Customer() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = React.useState(false)
    const [showIndex, setShowIndex] = React.useState(null)
    const successmsg = useSelector(state=>state.customer?.successmsg)
    const token = useSelector(state=>state.auth.token);
    const role = useSelector((state) => state.auth.role);
    const profile = useSelector(state => state.customer?.data)
    const menuTab = ['Profile'];
    const linkTo = [`/profile/${role==='seller'?'seller':'customer'}`, '/profile/my-product', '/profile/add-product', '/order'];
    const indexTab = 0;
    const handleClose = type => {
        switch (type) {
            case 'full_name':
                setShowModal(false)
                break;
            case 'email':
                setShowModalEmail(false)
                break;
            default:
                break;
        }
        setShowModal(false)
    }
    let request = ''
    const changeName = value => {
        switch (showIndex) {
            case 0:
                request = {full_name: value.full_name}
                dispatch(editProfileCustomer({request}));
                break;
            case 1:
                request = {gender: value.gender}
                dispatch(editProfileCustomer({request}));
                break;
            case 2:
                request = {email: value.email}
                dispatch(editProfileCustomer({request}));
                break;
            case 3:
                request = {store_name: value.store_name}
                dispatch(editProfileCustomer({request}));
                break;
            case 4:
                request = {images: value.images}
                dispatch(editPhotoCustomer({request}));
                break;
            default:
                request = {store_desc: value.store_desc}
                dispatch(editProfileCustomer({request}));
                break;
        }
    }
    React.useEffect(()=>{
        dispatch(getProfileCustomer())
        dispatch(resetMsgProfileCos())
        if(!token){
            Router.push('/login')
        }
        if(successmsg){
            setShowModal(false)
        }
    },[successmsg])
    return (
        <>
            <Header />
            <Head>
                <title>Profile - Customer</title>
            </Head>
            <Banner titleBanner={'Profile'} subtitleBanner={'See your notifications for the latest updates'}/>
            <div>
                <div className='flex justify-evenly my-20'>
                    {menuTab.map((e,i)=>{
                        return (
                            <>
                                <Link href={linkTo[i]}>
                                    <a>
                                        <div className={`${i === indexTab ? 'border-b-4' : ''} border-black`}>
                                            <span className='text-2xl'>{e}</span>
                                        </div>
                                    </a>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>

            <div>
                <div className='flex flex-row p-5 mx-[150px] my-10 gap-4'>
                    <div>
                        <Image src={profile.image||default_image} 
                            width={60} 
                            height={60}
                            alt='photo profile'
                            className='rounded-full'
                            onClick={() => {setShowModal(true); setShowIndex(4);}}
                        />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <button onClick={() => {setShowModal(true); setShowIndex(0);}} className='flex items-center'>
                            <div ><a>{profile.full_name}</a></div>
                            <FiEdit3 />
                        </button>
                        <div>
                            <p className=''>as Customer</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Gender</div>
                            <div className='text-base'>{profile.gender}</div>
                        </div>
                        <button onClick={() => {setShowModal(true); setShowIndex(1);}} className='flex flex-row items-center gap-1'>
                            <div><a className='font-semibold'>Edit</a></div>
                            <FiEdit3 />
                        </button>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Your Email</div>
                            <div className=''>{profile.email}</div>
                        </div>
                        <button onClick={() => {setShowModal(true); setShowIndex(2);}} className='flex flex-row items-center gap-1'>
                            <div><a className='font-semibold'>Edit</a></div>
                            <FiEdit3 />
                        </button>
                    </div>
                    <div className='flex flex-row justify-between border-4  px-10 py-2 mx-[150px]'>
                        <div className='flex flex-col '>
                            <div className='font-semibold'>Bio</div>
                            <div className=''>{profile.store_desc}</div>
                        </div>
                        <button onClick={() => {setShowModal(true); setShowIndex(5);}} className='flex flex-row items-center gap-1'>
                            <div><a className='font-semibold'>Edit</a></div>
                            <FiEdit3 />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mx-[150px] my-20 w-30 h-20 items-center'>
                <button className='bg-red-500 text-black-700 font-semibold hover:text-white py-2 px-4 flex gap-2 rounded-lg w-[210px] h-[50px] justify-center items-center text-center'>
                    <FiLogOut /> 
                    <span>Logout</span>
                </button>
            </div>
            <ModalChangeName typeInput={showIndex === 2 ? 'email' : 'text'} visible={showModal} onClose={handleClose} title={showIndex === 0 ? 'Full Name' : showIndex === 1 ? 'Gender' : showIndex === 2 ? 'Email' : showIndex === 3 ? 'Store Name' : 'Store Description'} value={showIndex === 0 ? {full_name: ''} : showIndex === 1 ? {gender: ''} : showIndex === 2 ? {email: ''} : showIndex === 3 ? {store_name: ''} :showIndex === 4 ? {images: null}: {store_desc: ''}} valueName={showIndex === 0 ? 'full_name' : showIndex === 1 ? 'gender' : showIndex === 2 ? 'email' : showIndex === 3 ? 'store_name' :showIndex === 4 ? 'image' : 'store_desc'} onHandleChange={changeName} validateScame={nameSechema} />
            <Footer />
        </>
        
    );
}

export default Customer;
