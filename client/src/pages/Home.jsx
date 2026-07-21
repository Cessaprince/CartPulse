import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ChevronRight, Shirt, Star, Amphora, Birdhouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import hoodie from '../images/product-images/basic-hoodies.webp'


const Home = () => {
    return (
        <div>
            <Nav />


            <section className='py-[50px]'>
                <div className="container">

                    <div className="flex items-stretch gap-[30px] pb-[50px]">

                        {/* box at the left */}
                        <div className='p-[22px] border-[0.1px] border-gray-300 flex flex-col gap-[10px] w-[330px] rounded-[18px]'>
                            <div className='flex items-center gap-[10px] border-b-[0.1px] border-gray-300'>
                                <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                                <h3 className='font-bold py-[15px]'>Products by category</h3>

                            </div>

                            {/* links */}
                            <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                <div className='flex items-center gap-[10px]'>
                                    <Star className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                                    <span className='py-[15px] font-light text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                        Popular products
                                    </span>

                                    <span className='bg-[var(--royalblue)] py-[3px] px-[10px] rounded-[25px] text-white text-xs'>Hot</span>
                                </div>

                                <ChevronRight className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                            </Link>

                            <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                <div className='flex items-center gap-[10px]'>
                                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                                    <span className='py-[15px] font-light text-gray-500 group-hover:text-[var(--royalblue)] capitalize transition-colors duration-500 ease-in-out'>
                                        Fashion
                                    </span>

                                </div>

                                <ChevronRight className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                            </Link>

                            <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                <div className='flex items-center gap-[10px]'>
                                    <Amphora className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                                    <span className='py-[15px] font-light text-gray-500 group-hover:text-[var(--royalblue)] capitalize transition-colors duration-500 ease-in-out'>
                                        decoration
                                    </span>

                                </div>

                                <ChevronRight className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                            </Link>

                            <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                <div className='flex items-center gap-[10px]'>
                                    <Birdhouse className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                                    <span className='py-[15px] font-light text-gray-500 group-hover:text-[var(--royalblue)] capitalize transition-colors duration-500 ease-in-out'>
                                        garden
                                    </span>

                                </div>

                                <ChevronRight className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                            </Link>

                            <Link className='mt-[30px] flex justify-center capitalize text-white w-full border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[15px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>all products</Link>


                        </div>

                        {/* t shirt on the left*/}
                        <div className="flex gap-[50px] items-center justify-between flex-1 py-[20px] pl-[50px] bg-orange-50">
                            <div className="flex flex-col gap-[10px] w-[50%]">
                                <p className='text-[16px] font-bold'>New arrival</p>
                                <h3 className='capitalize text-[30px]'>2x1 in basic hoodies</h3>
                                <span className='font-thin text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorem quam voluptate </span>
                                <Link to='' className='mt-[30px] flex justify-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-black py-[15px] px-[15px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-gray-800'>buy now</Link>

                            </div>

                            <div className="h-full flex-1 overflow-hidden">
                                <img src={hoodie} alt="" className='w-full h-full object-cover' />

                            </div>
                        </div>
                    </div>


                    {/*other products*/}
                    <div className="grid grid-cols-2 gap-[30px]">
                        <div className='h-[400px] rounded-[15px]' id='flower-vase'>
                            <div className="flex flex-col gap-[10px] w-[70%] p-[30px]">
                                <h3 className='capitalize text-[25px]'>Get 40% OFF in plants</h3>
                                <span className='font-light text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                                <Link to='' className='mt-[10px] flex justify-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-black py-[15px] px-[25px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-gray-800'>buy now</Link>

                            </div>
                        </div>

                        <div className='h-[400px] rounded-[15px]' id='flower-pot'>
                            <div className="flex flex-col gap-[10px] w-[70%] p-[30px]">
                                <h3 className='capitalize text-[25px]'>Get 15% OFF in decoration</h3>
                                <span className='font-light text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                                <Link to='' className='mt-[10px] flex justify-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-black py-[15px] px-[25px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-gray-800'>buy now</Link>

                            </div>
                        </div>

                    </div>

                </div>


            </section>

            <Footer />
        </div>
    )
}

export default Home