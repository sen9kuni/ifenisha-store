
import { SiFacebook, SiTwitter, SiYoutube, SiDribbble } from 'react-icons/si';
import { TbMail, TbPhone, TbClock } from 'react-icons/tb';
import Link from 'next/link';

export default function Footer(){
    return(
        <footer className="bg-zinc-600 flex justify-center items-center w-full px-5">
            <div className="flex flex-col max-w-[1400px] flex-1 justify-between items-center text-slate-300">
                <div className="w-full py-20 flex justify-between">
                    <div className="flex flex-col w-80 gap-8">
                        <Link href={'/'}><span className="text-3xl font-medium cursor-pointer">ParaBot</span></Link>
                        <span>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</span>
                        <div className='flex gap-3'>
                            <Link href={'/#'}><div className='p-2 rounded-full border-cyan-50 border-2 cursor-pointer'><SiFacebook /></div></Link>
                            <Link href={'/#'}><div className='p-2 rounded-full border-cyan-50 border-2 cursor-pointer'><SiTwitter /></div></Link>
                            <Link href={'/#'}><div className='p-2 rounded-full border-cyan-50 border-2 cursor-pointer'><SiYoutube /></div></Link>
                            <Link href={'/#'}><div className='p-2 rounded-full border-cyan-50 border-2 cursor-pointer'><SiDribbble /></div></Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <span className='text-md font-medium'>COMPANY</span>
                        <div className='flex flex-col gap-4'>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>About Us</span></Link>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>Help Center</span></Link>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>Licenses</span></Link>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>Market API</span></Link>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>Site Map</span></Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <span className='text-md font-medium'>USERFUL</span>
                        <div className='flex flex-col gap-4'>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>The Collections</span></Link>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>Size Guide</span></Link>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>Lookbook</span></Link>
                            <Link href={'/#'}><span className='text-sm cursor-pointer'>Instagram Shop</span></Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <span className='text-md font-medium'>CONTACT US</span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 rounded-full w-fit border-cyan-50 border-2'><TbMail /></div>
                                <span className='text-sm'>info@la-studioweb.com</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 rounded-full w-fit border-cyan-50 border-2'><TbPhone /></div>
                                <span className='text-sm'>+44.954.954.86</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 rounded-full w-fit border-cyan-50 border-2'><TbClock /></div>
                                <span className='text-sm'>9:00am - 19:00pm<br/>Monday - Sunday</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-1'>© 2019 RAZ Store All rights reserved</div>
            </div>
        </footer>
    );
}