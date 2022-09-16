import React from 'react';
import Header  from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { getNotif } from '../redux/asyncAction/notification';

const Notification = () => {
    const dispatch = useDispatch();
    const notif = useSelector((state=>state.notification.notif));
    const buttonPaginate = ['01', '02', '03', '04', '05'];
    const [paginate, setPaginet] = React.useState(buttonPaginate[0]);
    React.useEffect(()=>{
        dispatch(getNotif());
    },[]);
    return (
        <>
            <Header/>
            <Banner titleBanner={'Notification'} subtitleBanner={'See your notifications for the latest updates'}/>
            <section>
                <div className='my-28 mx-36 '>
                    {notif&&notif.map((val)=>{
                        return(
                            <>
                                <div className='border border-[#D1D1D1]'>
                                    <div className=' my-10 mx-16'>
                                        <p className=' text-[24px] font-[700] leading-[28px]'>{val.tittle}</p>
                                        <p className=' text-[16px] font-[400] leading-[35px]'>{val.text}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
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
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Notification;