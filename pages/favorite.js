import Header from '../components/Header';
import Footer from '../components/Footer';
import { BiCheckCircle } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

export default function Wishlist(){
    return(
        <>
            <Header />
            <div>
                <div className='bg-cart flex-col pt-[74px] pr-[521] pb-[74px] pl-[521]'>
                    <h className='cart-text mb-5 flex items-center justify-center'>Favorite</h>
                    <h4 className='cart-text2 flex items-center justify-center'>Pay and get your ordered items</h4>
                </div>
                <div className='grid grid-cols-4 pt-[80px] pr-[140px]  pl-[140px] gap-10'>
                    <hr className='col-span-4'/>
                </div>
                <div className='grid grid-cols-5 pt-[28px] pr-[140px]  pl-[140px] gap-10'>
                    <p className='col-span-1'>product</p>
                    <div className='col-span-1'/>
                    <p className='col-span-1'>Stock Status</p>
                    <p className='col-span-1'>Price</p>
                    <div className='col-span-1'/>
                </div>
                <div className='grid grid-cols-4 pt-[21px] pr-[140px]  pl-[140px] gap-10'>
                    <hr className='col-span-4'/>
                </div>
                <div className='grid grid-cols-5 pt-[40px] pr-[140px]  pl-[80px] gap-10 items-center'>
                    <div className='col-span-1 flex flex-row items-center gap-[38px]'><FaHeart/><Image  src={'/images/wishlist-chair1.png'} alt={'chair'} width={170} height={172}/></div>
                    <p className='col-span-1'>Dining Side Chair in Beige</p>
                    <div className='col-span-1 flex flex-row items-center'><BiCheckCircle/>In Stock</div>
                    <p className='col-span-1'>$765.99</p>
                    <a href='#' className='bg-black w-[200px] h-[60px] text-white flex items-center justify-center'>
                        Add to Cart
                    </a>
                </div>
                <div className='grid grid-cols-5 pb-[120px] pt-[40px] pr-[140px]  pl-[80px] gap-10 items-center'>
                    <div className='col-span-1 flex flex-row items-center gap-[38px]'><FaHeart/><Image  src={'/images/wishlist-chair1.png'} alt={'chair'} width={170} height={172}/></div>
                    <p className='col-span-1'>Eugene Accent Table 18.9 inches Espresso</p>
                    <div className='col-span-1 flex flex-row items-center'><BiCheckCircle/>In Stock</div>
                    <p className='col-span-1'>$765.99</p>
                    <a href='#' className='bg-black w-[200px] h-[60px] text-white flex items-center justify-center'>
                        Add to Cart
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}