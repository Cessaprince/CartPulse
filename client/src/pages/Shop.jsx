import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { ChevronRight, Shirt } from 'lucide-react'
import grayShirt from '../images/product-images/gray-tshirt.png'
import Discount from '../components/Discount'
import Footer from '../components/Footer'

const Shop = () => {
    return (
        <div>

            <Nav />
            <section className='bg-gray-100 py-[22px]'>
                <div className="container">
                    <div className="flex gap-[7px] items-center">
                        <Link to='/' className='capitalize text-sm text-gray-500 hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                            home
                        </Link>

                        <span className='text-gray-500'>/</span>

                        <Link to='/shop' className='capitalize text-sm text-gray-500 hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                            shop
                        </Link>

                    </div>
                </div>
            </section>


            <section className='py-[30px]'>
                <div className="container ">
                    <div className="w-full bg-gray-50 flex rounded-[15px]">
                        <div className="flex flex-col mx-auto items-center gap-[7px] py-[80px]">
                            <h3 className='capitalize text-[30px]'>shop</h3>
                            <span className='font-100 text-gray-500 text-[16px] w-[60%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </span>
                        </div>
                    </div>


                </div>

            </section>

            <section className="py-[30px]">
                <div className="container">
                    <div className="w-full">

                        <div className="flex gap-[100px] items-stretch pb-[120px] border-b-[0.1px] border-gray-300">
                            {/* box at the left*/}
                            <div className="flex flex-col gap-[40px] items-center w-[20%]">
                                <form action="" className='w-full group py-[12px] px-[15px] border-[0.1px] border-gray-400 flex gap-[7px] items-center rounded-[25px] transition-colors duration-500 hover:border-black hover:border-[1px]'>
                                    <Search className='text-gray-500' size={16} />
                                    <input type="search" name="" id="" className='[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none outline-none text-[14px] text-gray-500' placeholder='Search for products' />
                                </form>

                                {/* products*/}
                                {/* products 1*/}
                                <div className="flex flex-col gap-[5px] w-full">
                                    <h3 className='font-bold text-[12px] border-b-[0.1px] border-gray-300 py-[15px]'>Products by category</h3>
                                    {/* links */}

                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                </div>

                                {/* products 2*/}
                                <div className="flex flex-col gap-[5px] w-full">
                                    <h3 className='font-bold text-[12px] border-b-[0.1px] border-gray-300 py-[15px]'>Products by category</h3>
                                    {/* links */}

                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                </div>

                                {/* products 3*/}
                                <div className="flex flex-col gap-[5px] w-full">
                                    <h3 className='font-bold text-[12px] border-b-[0.1px] border-gray-300 py-[15px]'>Products by category</h3>
                                    {/* links */}

                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                    <Link className='group flex items-center justify-between border-b-[0.1px] border-gray-300 transition-colors duration-500 ease-in-out'>

                                        <div className='flex items-center gap-[10px]'>
                                            <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={16} />

                                            <span className='py-[15px] font-light text-[12px] text-gray-500 group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                                                Popular products
                                            </span>
                                        </div>
                                        <ChevronRight size={16} className='text-gray-500 transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

                                    </Link>
                                </div>

                            </div>

                            {/* clothe son the right*/}

                            <div className="grid grid-cols-4 gap-[20px]">

                                {/* each clothes */}

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>

                                <div className="group cursor-pointer h-[280px] w-[200px] flex flex-col overflow-hidden rounded-[15px] transition-transform duration-300">
                                    <div className="w-full h-[70%] overflow-hidden rounded-[15px]">
                                        <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                    </div>
                                    <div className='flex flex-col gap-[5px] py-[15px] w-full'>
                                        <h3 className='font-light capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                        <div className="flex gap-[15px] justify-between">
                                            <span className="text-[14px] text-[var(--royalblue)] capitalize">$ 29.99 USD</span>
                                            <del className="text-[14px] text-gray-500 capitalize">$ 39.99 USD</del>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="pt-[120px] w-full pb-[50px]">
                        <Discount />
                    </div>
                </div>

            </section>

            <Footer/>
        </div>

    )
}

export default Shop