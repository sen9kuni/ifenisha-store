import Link from 'next/link';
import React from 'react';

function CardProduct({productUrl, img, title, subtitle}) {
    return (
        <Link href={productUrl}>
            <a className='mt-10'>
                <div className='flex flex-col gap-4 shadow-lg'>
                    <div className='bg-orange-100 rounded-lg'>
                        {img}
                    </div>
                    <div className='flex flex-col justify-center items-center pb-3'>
                        <span>{title}</span>
                        <span className='font-semibold'>{subtitle}</span>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default CardProduct;