import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { TbTruckDelivery } from 'react-icons/tb';
import Link from 'next/link';

function TrackingDetail() {
    return (
        <>
            <Header />
            <div className='pattern py-10'>
                <nav className='flex ml-10' aria-label='Breadcrumb'>
                    <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                        <li>
                            <div className='flex items-center'>
                                <a href='#' className='ml-1 mr-2 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>Tracking</a>
                                <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path></svg>
                                <a href='#' className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>Tracking Detail</a>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className='text-center'>
                    <h3 className='text-4xl'>Tracking Detail</h3>
                    <small>Track where your order arrived</small>
                </div>
            </div>
            <div className='flex mx-14 my-8 justify-center gap-14'>
                <div>
                    <Image
                        src='/map.png'
                        alt='connor'
                        width={600}
                        height={620} />
                </div>
                <div className='my-auto'>
                    <div className='flex mb-10'>
                        <div className='flex flex-col'>
                            <small>Order ID</small>
                            <span className='text-xl font-bold mt-3 mr-16'>ABCD-EFGH-W123</span>
                        </div>
                        <div className='flex flex-col'>
                            <small>Order Item</small>
                            <span className='text-xl font-bold mt-3'>Fabric Mid Century Chair</span>
                        </div>
                    </div> <hr />
                    <div className='mt-10 mb-16'>
                        <div className='flex'>
                            <TbTruckDelivery className='text-5xl border-2 border-current rounded-full p-2'/>
                            <div className='flex flex-col ml-5'>
                                <small>On Delivery</small>
                                <span className='text-xl font-bold'>Kebun Jeruk, Jakarta Barat</span>
                            </div>
                        </div>
                        <div className='ml-3 text-5xl mb-4 font-thin text-neutral-500'>
                            <div>&#9551;</div>
                            <div>&#9551;</div>
                            <div>&#9551;</div>
                        </div>
                        <div className='flex text-neutral-400'>
                            <TbTruckDelivery className='text-5xl border-2 border-current rounded-full p-2'/>
                            <div className='flex flex-col ml-5'>
                                <small>Destination</small>
                                <span>Kebun Mangga, Jakarta Selatan</span>
                            </div>
                        </div>
                    </div>
                    <Link href='#'><a>
                        <button className='text-white bg-black h-16 w-48 text-center mx-auto font-semibold'>
                            Check on Map
                        </button>
                    </a></Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TrackingDetail;