import React from 'react';
import Image from 'next/image';
import ImgSideBar from '../public/images/img-sidebar.png';
import { FiCheck } from 'react-icons/fi';

function SidebarProduct() {
    
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(200);
    const [isChecked, setIsChecked] = React.useState(0);
    return (
        <>
            <aside className='col-start-1 col-end-4'>
                <div className='flex flex-col gap-14'>
                    <div>
                        <span className='text-3xl font-semibold'>Categories</span>
                        <div className='flex flex-col gap-6 mt-7'>
                            <div className='flex justify-between cursor-pointer hover:text-gray-500'>
                                <span>Tables</span>
                                <span>5</span>
                            </div>
                            <div className='flex justify-between cursor-pointer hover:text-gray-500'>
                                <span>Brands</span>
                                <span>15</span>
                            </div>
                            <div className='flex justify-between cursor-pointer hover:text-gray-500'>
                                <span>Chairs</span>
                                <span>3</span>
                            </div>
                            <div className='flex justify-between cursor-pointer hover:text-gray-500'>
                                <span>Desks</span>
                                <span>8</span>
                            </div>
                            <div className='flex justify-between cursor-pointer hover:text-gray-500'>
                                <span>Cupboards</span>
                                <span>9</span>
                            </div>
                            <div className='flex justify-between cursor-pointer hover:text-gray-500'>
                                <span>Curtains</span>
                                <span>5</span>
                            </div>
                            <div className='flex justify-between cursor-pointer hover:text-gray-500'>
                                <span>Bookshelf</span>
                                <span>5</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='text-3xl font-semibold'>Price</span>
                        <div className='flex flex-col gap-3 mt-7'>
                            <span className='text-xs'>Price ${minPrice} - ${maxPrice}</span>
                            <div className='flex justify-center'>
                                <input name='minPrice' type='range' value={minPrice} min='0' onChange={(e)=>setMinPrice(e.currentTarget.value)} max='100'/>
                                <input name='maxPrice' type='range' value={maxPrice} onChange={(e)=>setMaxPrice(e.currentTarget.value)} min='100' max='200'/> 
                            </div>
                            <button
                                type='button'
                                className='border border-gray-700 bg-[#1a1a1a] text-white rounded-md py-2 my-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
                            >
                                    FILTER
                            </button>
                        </div>
                    </div>
                    <div >
                        <span className='text-3xl font-semibold'>Brands</span>
                        <div className='flex flex-col gap-3 mt-7'>
                            <div className='flex gap-3 ml-2 pt-3'>
                                <input type='checkbox' className='scale-150'/>
                                <span className='text-sm'>IKEA</span>
                            </div>
                            <div className='flex gap-3 ml-2 pt-3'>
                                <input type='checkbox' className='scale-150'/>
                                <span className='text-sm'>Mr Royal</span>
                            </div>
                            <div className='flex gap-3 ml-2 pt-3'>
                                <input type='checkbox' className='scale-150'/>
                                <span className='text-sm'>Sweet House</span>
                            </div>
                            <div className='flex gap-3 ml-2 pt-3'>
                                <input type='checkbox' className='scale-150'/>
                                <span className='text-sm'>North Oxford</span>
                            </div>
                            <div className='flex gap-3 ml-2 pt-3'>
                                <input type='checkbox' className='scale-150'/>
                                <span className='text-sm'>Mr.Poppin 1929</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='text-3xl font-semibold'>Colors</span>
                            
                        <div className='flex gap-3 mt-7'>
                            <div onClick={()=>setIsChecked(1)} className={`bg-yellow-800 rounded-full cursor-pointer ${isChecked != 1 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                {isChecked == 1? <FiCheck size={10} className='text-white'/> : null}
                            </div>
                            <div onClick={()=>setIsChecked(2)} className={`bg-blue-300 rounded-full cursor-pointer ${isChecked != 2 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                {isChecked == 2? <FiCheck size={10} className='text-white'/> : null}
                            </div>
                            <div onClick={()=>setIsChecked(3)} className={`bg-gray-800 rounded-full cursor-pointer ${isChecked != 3 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                {isChecked == 3? <FiCheck size={10} className='text-white'/> : null}
                            </div>
                            <div onClick={()=>setIsChecked(4)} className={`bg-purple-800 rounded-full cursor-pointer ${isChecked != 4 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                {isChecked == 4? <FiCheck size={10} className='text-white'/> : null}
                            </div>
                            <div onClick={()=>setIsChecked(5)} className={`bg-green-800 rounded-full cursor-pointer ${isChecked != 5 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                {isChecked == 5? <FiCheck size={10} className='text-white'/> : null}
                            </div>
                            <div onClick={()=>setIsChecked(6)} className={`bg-red-600 rounded-full cursor-pointer ${isChecked != 6 ? 'p-[1.1rem]' : 'p-[0.8rem]'}`}>
                                {isChecked == 6? <FiCheck size={10} className='text-white'/> : null}
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:flex justify-center'>
                        {/* <div className=' lg: flexbg-blend-overlay opacity-40 bg-black absolute w-60 h-60 z-10'></div> */}
                        <div className='z-0 w-60 h-60'>
                            <Image src={ImgSideBar} alt={'img-sidebar'} width={250} height={250}/>
                        </div>
                        <div className='absolute z-20 w-60 h-52 lg:h-60 flex items-end ml-7 mb-7 lg:mb-0'>
                            <button
                                type='button'
                                className='border text-sm border-gray-700 bg-[#1a1a1a] text-white rounded-md px-3 py-2 my-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
                            >
                                    SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default SidebarProduct;