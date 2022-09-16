import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import BgBanner from '../public/images/bg-banner.png';

function Banner({basePath, basePathUrl, targetPath, targetPathUrl, titleBanner, subtitleBanner}) {
    return (
        <>
            <div className='w-full -z-10'>
                <div className='flex'>
                    <div className='w-full bg-white h-64 flex justify-center'>
                        <div className='absolute z-0 h-64 w-full px-20'>
                            <Image src={BgBanner} alt='img-background-banner' layout='fill' />
                        </div>
                        <div className='my-10 relative z-10 w-full'>
                            <nav className='flex px-5 py-3 ml-20'>
                                <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                                    <li className='inline-flex items-center'>
                                        <Link href={basePathUrl??'#'} >
                                            <a className='text-sm font-medium text-gray-700 hover:text-gray-900 dark:hover:text-white'>
                                                {basePath??<br/>}
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className='flex items-center'>
                                            {targetPath ? <FiChevronRight/> : null}
                                            <Link href={targetPathUrl??'#'}>
                                                <a className='ml-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:hover:text-white'>{targetPath}</a>
                                            </Link>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <div className='flex flex-col justify-center items-center gap-5'>
                                <span className='text-4xl md:text-6xl'>{titleBanner}</span>
                                <span className='text-base'>{subtitleBanner}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;