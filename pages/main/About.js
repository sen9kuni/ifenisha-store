import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

function About() {
    return (
        <>
            <Header />
            <div>
                <div className='pattern py-10'>
                    <nav className='flex ml-10' aria-label='Breadcrumb'>
                        <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                            <li>
                                <div className='flex items-center'>
                                    <a href='#' className='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'>About</a>
                                </div>
                            </li>
                            <li aria-current='page'>
                                <div className='flex items-center'>
                                    <svg className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd'></path></svg>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className='text-center'>
                        <h3 className='text-5xl font-semibold'>About Us</h3>
                    </div>
                </div>
                <div className='flex justify-center my-20'>
                    <div className='flex flex-col gap-8 mr-16 tracking-wide'>
                        <span className='text-3xl font-semibold'>RAZ- Modern Furniture</span>
                        <p>Quisque at justo sagittis, semper lacus a, iaculis tellus. Fusce tempor, leo vel iaculis aliquet, <br/> dui turpis maximus tellus, commodo congue Nam fermentum, augue eget pulvinar <br/> ullamcorper, dui purus ornare nibh, eu congue ligula felis nec diam liquam mollis nibh eu</p>
                        <ul type='disc'>
                            <li className='mb-8'>&bull; Fusce risus ligula, semper et ultricies vitae</li>
                            <li>&bull; Vivamus eget ante id velit varius lacinia</li>
                        </ul>
                        <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis <br/> congue molestie eu et velit. Praesent gravida magna eget interdum iaculis. Aliquam erat <br/> volutpat. Integer placerat ipsum quis malesuada vehicula. Vestibulum</p>
                    </div>
                    <video controls>
                        <source src='https://youtu.be/d2ZAQyJ-W08' />
                    </video>
                </div>
            
                <div className='flex mx-20 my-8 justify-center flex-col gap-14 text-center'>
                    <span className='text-3xl font-semibold'>Why Should Choose Us?</span>
                    <div className='flex gap-x-16'>
                        <div>
                            <h5 className='font-bold text-xl mb-3'>Unique Design</h5>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div>
                            <h5 className='font-bold text-xl mb-3'>Good Wararanty Policy</h5>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div>
                            <h5 className='font-bold text-xl mb-3'>Handcrafted Quality</h5>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                    </div>
                    <div className='flex gap-x-16'>
                        <div>
                            <h5 className='font-bold text-xl mb-3'>Dedicated Support</h5>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div>
                            <h5 className='font-bold text-xl mb-3'>Amazing Features</h5>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div>
                            <h5 className='font-bold text-xl mb-3'>Easy Customized</h5>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                    </div>
                </div>

                <div className='flex mx-14 my-16 justify-center flex-col'>
                    <h3 className='text-3xl text-center font-semibold'>Meet Our Team</h3>
                    <div className='flex justify-center gap-7 my-16'> 
                        <div>
                            <Image
                                src='/ainsley.png'
                                alt='ainsley'
                                width={250}
                                height={300} />
                            <h5 className='font-semibold'>Ainsley Amanda</h5>
                            <small className='text-gray-500'>CEO-Founder</small>
                        </div>
                        <div>
                            <Image
                                src='/maudey.png'
                                alt='maudey'
                                width={250}
                                height={300} />
                            <h5 className='font-semibold'>Maude Norman</h5>
                            <small className='text-gray-500'>Art Director</small>
                        </div>
                        <div>
                            <Image
                                src='/connor.png'
                                alt='connor'
                                width={250}
                                height={300} />
                            <h5 className='font-semibold'>Connor Shelton</h5>
                            <small className='text-gray-500'>Products Manager</small>
                        </div>
                    </div>

                    <div className='flex flex-col text-center gap-7'>
                        <span className='mx-80'>
                        &quot; Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work. &quot;
                        </span>
                        <div>
                            <Image
                                src='/Oval.png'
                                alt='connor'
                                width={50}
                                height={50}/>
                        </div>
                        <span className='font-semibold'>Trevor Rivera - Calinofrnia</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
