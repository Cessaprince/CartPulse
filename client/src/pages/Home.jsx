import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ChevronRight, Shirt, Star, Amphora, Birdhouse, Van } from 'lucide-react';
import { Link } from 'react-router-dom';
import hoodie from '../images/product-images/basic-hoodies.webp'
import grayShirt from '../images/product-images/gray-tshirt.png'
import grayCoat from '../images/product-images/gray-coat.webp'
import sneakers from '../images/product-images/sneakers.png'

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

                                <h3 className='font-bold py-[15px]'>Categories</h3>

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


            <section className='py-[70px]'>
                <div className="container">
                    <div className="flex justify-between gap-[20px] py-[20px]">
                        <h3 className='text-[25px]'>Latest products</h3>
                        <Link to='' className='flex justify-center font-light w-fit border-[0.1px] outline-none py-[15px] px-[25px] rounded-[25px] text-sm transition duration-500 ease border-gray-200 hover:border-[var(--royalblue)] hover:-translate-y-1 hover:text-[var(--royalblue)] cursor-pointer'>Explore products</Link>
                    </div>

                    {/* latest products */}

                    <div className="grid grid-cols-4 gap-[40px] py-[10px]">

                        {/* product 1*/}
                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>

                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>

                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>

                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>

                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>

                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>

                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>

                        <div className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-full h-[80%] overflow-hidden">
                                <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                <span className="text-[var(--royalblue)] text-[14px] capitalize">Fashion</span>
                                <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                <div className="flex gap-[15px]">
                                    <span className="text-[14px] text-gray-600 capitalize">$ 29.99 USD</span>
                                    <del className="text-[14px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[50px]">
                <div className="container">
                    <div className="w-full flex justify-between bg-gray-100 rounded-[10px] p-[100px] relative">
                        <div className="flex flex-col w-[50%] gap-[25px]">
                            <div className="flex gap-[30px] items-center">
                                <div className="self-stretch p-[1.5px] bg-[var(--royalblue)]"></div>

                                <div className='flex flex-col justify-center'>
                                    <span className='capitalize group-hover:text-[var(--royalblue)] text-[30px] leading-tight'>save</span>
                                    <span className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-[100px] leading-none my-2'>20% OFF</span>
                                    <span className='capitalize group-hover:text-[var(--royalblue)] text-[30px] leading-tight'>in fashion</span>
                                </div>
                            </div>

                            <span className='font-light text-gray-700 text-[16px]'>Use the discount code</span>


                        </div>

                        <div className="flex-1 w-[40%] overflow-hidden absolute left-[50%] -top-10 ">
                            <img src={grayCoat} alt="" className='' />
                        </div>


                    </div>
                </div>
            </section>

            <section className='py-[70px]'>
                <div className="container">
                    <div className="flex justify-between gap-[20px] py-[20px]">
                        <h3 className='text-[25px]'>Latest products</h3>
                        <Link to='' className='flex justify-center font-light w-fit border-[0.1px] outline-none py-[15px] px-[25px] rounded-[25px] text-sm transition duration-500 ease border-gray-200 hover:border-[var(--royalblue)] hover:-translate-y-1 hover:text-[var(--royalblue)] cursor-pointer'>Explore products</Link>
                    </div>

                    {/* latest products */}

                    <div className="w-full overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex items-stretch gap-[40px] py-[10px]">
                            {/* product 1*/}
                            <div className="min-w-[25%] max-w-[25%] pb-[30px]  group cursor-pointer flex flex-col overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1 relative">
                                <div className="w-full h-[60%] overflow-hidden">
                                    <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative' />
                                </div>
                                <Link className='absolute right-4 mt-[15px] flex items-center capitalize  w-fit border-[0.1px] border-gray-300 outline-none py-[10px] px-[15px] bg-[var(--white)] rounded-[25px] text-xs'>add to cart</Link>


                                <div className='flex flex-col gap-[5px] mt-[20px] px-[30px]'>
                                    <h3 className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                    <span className='font-light text-gray-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui qu</span>

                                    <Link className='mt-[15px] flex items-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[18px] rounded-[25px] text-xs transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>add to cart</Link>

                                </div>
                            </div>

                            <div className="min-w-[25%] max-w-[25%] pb-[30px] group cursor-pointer flex flex-col overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1 relative">
                                <div className="w-full h-[60%] overflow-hidden">
                                    <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative' />
                                </div>
                                <Link className='absolute right-4 mt-[15px] flex items-center capitalize  w-fit border-[0.1px] border-gray-300 outline-none py-[10px] px-[15px] bg-[var(--white)] rounded-[25px] text-xs'>add to cart</Link>


                                <div className='flex flex-col gap-[5px] mt-[20px] px-[30px]'>
                                    <h3 className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                    <span className='font-light text-gray-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui qu</span>

                                    <Link className='mt-[15px] flex items-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[18px] rounded-[25px] text-xs transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>add to cart</Link>

                                </div>
                            </div>

                            <div className="min-w-[25%] max-w-[25%] pb-[30px] group cursor-pointer flex flex-col overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1 relative">
                                <div className="w-full h-[60%] overflow-hidden">
                                    <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative' />
                                </div>
                                <Link className='absolute right-4 mt-[15px] flex items-center capitalize  w-fit border-[0.1px] border-gray-300 outline-none py-[10px] px-[15px] bg-[var(--white)] rounded-[25px] text-xs'>add to cart</Link>


                                <div className='flex flex-col gap-[5px] mt-[20px] px-[30px]'>
                                    <h3 className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                    <span className='font-light text-gray-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui qu</span>

                                    <Link className='mt-[15px] flex items-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[18px] rounded-[25px] text-xs transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>add to cart</Link>

                                </div>
                            </div>

                            <div className="min-w-[25%] max-w-[25%] pb-[30px] group cursor-pointer flex flex-col overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1 relative">
                                <div className="w-full h-[60%] overflow-hidden">
                                    <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative' />
                                </div>
                                <Link className='absolute right-4 mt-[15px] flex items-center capitalize  w-fit border-[0.1px] border-gray-300 outline-none py-[10px] px-[15px] bg-[var(--white)] rounded-[25px] text-xs'>add to cart</Link>


                                <div className='flex flex-col gap-[5px] mt-[20px] px-[30px]'>
                                    <h3 className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                    <span className='font-light text-gray-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui qu</span>

                                    <Link className='mt-[15px] flex items-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[18px] rounded-[25px] text-xs transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>add to cart</Link>

                                </div>
                            </div>

                            <div className="min-w-[25%] max-w-[25%] pb-[30px] group cursor-pointer flex flex-col overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1 relative">
                                <div className="w-full h-[60%] overflow-hidden">
                                    <img src={grayShirt} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative' />
                                </div>
                                <Link className='absolute right-4 mt-[15px] flex items-center capitalize  w-fit border-[0.1px] border-gray-300 outline-none py-[10px] px-[15px] bg-[var(--white)] rounded-[25px] text-xs'>add to cart</Link>


                                <div className='flex flex-col gap-[5px] mt-[20px] px-[30px]'>
                                    <h3 className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)]'>Basic gray t-shirt</h3>
                                    <span className='font-light text-gray-500 text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui qu</span>

                                    <Link className='mt-[15px] flex items-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[18px] rounded-[25px] text-xs transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>add to cart</Link>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <section className="py-[40px]">
                <div className="container flex pb-[100px] border-b-[0.1px] border-gray-300">
                    <div className="mx-auto flex flex-col gap-[40px] items-center">
                        <h3 className='text-[25px]'>Top categories this month</h3>
                        <div className="flex gap-[50px] justify-between items-center">
                            <div className="flex flex-col gap-[10px] items-center group cursor-pointer">
                                <div className="overflow-hidden w-[120px] h-[120px] rounded-full transition-transform duration-300 group-hover:scale-105">
                                    <img src={sneakers} alt="" className='w-full h-full object-cover' />
                                </div>
                                <Link className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)] transition duration-300'>Basic gray t-shirt</Link>

                            </div>

                            <div className="flex flex-col gap-[10px] items-center group cursor-pointer">
                                <div className="overflow-hidden w-[120px] h-[120px] rounded-full transition-transform duration-300 group-hover:scale-105">
                                    <img src={sneakers} alt="" className='w-full h-full object-cover' />
                                </div>
                                <Link className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)] transition duration-300'>Basic gray t-shirt</Link>

                            </div>

                            <div className="flex flex-col gap-[10px] items-center group cursor-pointer">
                                <div className="overflow-hidden w-[120px] h-[120px] rounded-full transition-transform duration-300 group-hover:scale-105">
                                    <img src={sneakers} alt="" className='w-full h-full object-cover' />
                                </div>
                                <Link className='font-semibold text-[18px] capitalize group-hover:text-[var(--royalblue)] transition duration-300'>Basic gray t-shirt</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[100px]">
                <div className="container">
                    <div className="grid grid-cols-3">
                        {/* each table*/}

                        <div className="flex flex-col gap-[40px]">
                            <h3 className='text-[25px] '>Popular products</h3>
                            <div className="flex flex-col gap-[20px]">

                                {/* each product */}
                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[40px]">
                            <h3 className='text-[25px] '>Top rated products</h3>
                            <div className="flex flex-col gap-[20px]">

                                {/* each product */}
                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[40px]">
                            <h3 className='text-[25px] '>Top selling products</h3>
                            <div className="flex flex-col gap-[20px]">

                                {/* each product */}
                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={grayShirt} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Basic gray t-shirt</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-gray-100 py-[80px]'>
                <div className="container flex">
                    <div className="mx-auto flex p-[50px] justify-between gap-[30px] border-[0.1px] border-gray-200 bg-[var(--white)] rounded-[10px]">
                        {/* each icon*/}
                        <div className="px-[20px] border-r border-r-[0.10px] border-gray-300 flex items-center gap-[15px]">
                            <Van className='text-[var(--royalblue)]' size={50} />
                            <div className="flex flex-col">
                                <span className="text-[16px] text-gray-600 capitalize">Free shiping</span>
                                <span className="text-[12px] text-gray-400 font-light">on all orders over $99 USD</span>
                            </div>
                        </div>

                        <div className="px-[20px] border-r border-r-[0.10px] border-gray-300 flex items-center gap-[15px]">
                            <Van className='text-[var(--royalblue)]' size={50} />
                            <div className="flex flex-col">
                                <span className="text-[16px] text-gray-600 capitalize">Free shiping</span>
                                <span className="text-[12px] text-gray-400 font-light">on all orders over $99 USD</span>
                            </div>
                        </div>

                        <div className="px-[20px] border-r border-r-[0.10px] border-gray-300 flex items-center gap-[15px]">
                            <Van className='text-[var(--royalblue)]' size={50} />
                            <div className="flex flex-col">
                                <span className="text-[16px] text-gray-600 capitalize">Free shiping</span>
                                <span className="text-[12px] text-gray-400 font-light">on all orders over $99 USD</span>
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