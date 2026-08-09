import React from 'react'
import { Link } from 'react-router-dom'

const Discount = ({ stackOnMobile = true }) => {
    return (
        <div className='w-full'>
            <div className={`grid ${stackOnMobile ? 'grid-cols-2 max-md:grid-cols-1' : 'grid-cols-2'} gap-[30px] w-full max-md:gap-[20px]`}>
                <div className='h-[400px] rounded-[15px]' id='flower-vase'>
                    <div className="flex flex-col gap-[10px] w-[70%] p-[30px] max-md:w-[100%]">
                        <h3 className='capitalize text-[25px]'>Get 40% OFF in plants</h3>
                        <span className='font-light text-gray-700 text-[16px] max-md:text-[18px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        <Link to='' className='mt-[10px] flex justify-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-black py-[15px] px-[25px] rounded-[25px] max-md:rounded-[30px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-gray-800 max-md:text-[18px]'>buy now</Link>
                    </div>
                </div>

                <div className='h-[400px] rounded-[15px]' id='flower-pot'>
                    <div className="flex flex-col gap-[10px] w-[70%] p-[30px] max-md:w-[100%]">
                        <h3 className='capitalize text-[25px]'>Get 15% OFF in decoration</h3>
                        <span className='font-light text-gray-700 text-[16px] max-md:text-[18px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        <Link to='' className='mt-[10px] flex justify-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-black py-[15px] px-[25px] rounded-[25px] max-md:rounded-[30px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-gray-800 max-md:text-[18px]'>buy now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount