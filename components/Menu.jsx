
import React from 'react';
import { TbChevronDown } from 'react-icons/tb';
import Link from "next/link"

export default function Menu(){
    const [order, setOrder] = React.useState({active: false, left: 0, top: 0})
    const [product, setProduct] = React.useState({active: false, left: 0, top: 0})

    const menuOrder = (e) => {
        setOrder({active: !order.active, left: e.pageX - 60, top: e.pageY + 30})
    }
    const menuProduct = (e) => {
        setProduct({active: !product.active, left: e.pageX - 60, top: e.pageY + 30})
    }
    return(
        <div className="flex justify-center w-full">
            <div className="flex flex-col items-center py-10 bg-gray-200 max-w-[1400px] flex-1">
                <div className='flex w-full justify-evenly text-2xl'>
                    <Link href={'/order?#'}><span className='cursor-pointer'>Profile</span></Link>
                    <div className="flex items-center gap-2" onClick={(e)=> menuProduct(e)}>
                        <span className='cursor-pointer'>My Product</span>
                        <TbChevronDown />
                    </div>
                    {
                        product.active&&
                        <div style={{top: product.top, left: product.left}} className={`absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
                            </div>
                        </div>
                    }
                    <Link href={'/order?#'}><span className='cursor-pointer'>Selling Product</span></Link>
                    <div className="flex items-center gap-2" onClick={(e)=> menuOrder(e)}>
                        <span className='cursor-pointer'>My Order</span>
                        <TbChevronDown />
                    </div>
                    {
                        order.active&&
                        <div style={{top: order.top, left: order.left}} className={`absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                            <div className="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}