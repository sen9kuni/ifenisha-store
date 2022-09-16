import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';
import { GrTasks } from 'react-icons/gr';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

function Faq() {
    return (
        <>
            <Header />
            <div className='mx-12'>
                <div>
                    <div className='text-center my-10'>
                        <MdOutlineLocalGroceryStore className='mx-auto text-5xl border-2 border-current rounded-full p-2'/>
                        <div className='flex items-center justify-center'>
                            <Image
                                src='/list.png'
                                alt='list'
                                width={50}
                                height={5}/>
                            <span className='px-5 text-4xl font-normal'>Shopping Questions</span>
                            <Image
                                src='/list.png'
                                alt='list'
                                width={50}
                                height={5} />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mb-7'>
                            <div className='text-2xl mb-5 font-normal'>Do you ship worldwide?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div>
                            <div className='text-2xl mb-5 font-normal'>How can I use a coupon code?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mb-7'>
                            <div className='text-2xl mb-5 font-normal'>Do you offer gift-vouchers?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div>
                            <div className='text-2xl mb-5 font-normal'>How can I request a refund?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                    </div>

                    <div className='text-center my-8'>
                        <FaWallet className='mx-auto text-5xl border-2 border-current rounded-full p-2'/>
                        <div className='flex items-center justify-center'>
                            <Image
                                src='/list.png'
                                alt='list'
                                width={50}
                                height={5} />
                            <span className='px-5 text-4xl font-normal'> Payment Questions </span>
                            <Image
                                src='/list.png'
                                alt='list'
                                width={50}
                                height={5} />
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mb-7'>
                            <div className='text-2xl mb-5 font-normal'>Do you ship worldwide?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div>
                            <div className='text-2xl mb-5 font-normal'>How can I use a coupon code?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mb-7'>
                            <div className='text-2xl mb-5 font-normal'>Do you offer gift-vouchers?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div>
                            <div className='text-2xl mb-5 font-normal'>How can I request a refund?</div>
                            <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                    </div>

                    <div className='text-center my-10'>
                        <GrTasks className='mx-auto text-5xl border-2 border-current rounded-full p-2' />
                        <div className='flex items-center justify-center'>
                            <Image
                                src='/list.png'
                                alt='list'
                                width={50}
                                height={5} />
                            <span className='px-5 text-4xl font-normal'> Miscellaneous Questions</span>
                            <Image
                                src='/list.png'
                                alt='list'
                                width={50}
                                height={5} />
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mb-7'>
                        <div className='text-2xl mb-5 font-normal'>Do you ship worldwide?</div>
                        <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                    </div>
                    <div>
                        <div className='text-2xl mb-5 font-normal'>How can I use a coupon code?</div>
                        <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <div className='text-2xl mb-5 font-normal'>Do you offer gift-vouchers?</div>
                        <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                    </div>
                    <div>
                        <div className='text-2xl mb-5 font-normal'>How can I request a refund?</div>
                        <p>This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                    </div>

                </div>
                <div className='flex flex-col text-center mx-auto my-10'>
                    <span className='text-4xl mb-4 font-normal'>You Still Need Help?</span>
                    <Link href='#'><a>
                        <button className='text-white bg-black h-10 w-40 text-center mx-auto font-semibold'>
                            Contact Us
                        </button>
                    </a></Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Faq;