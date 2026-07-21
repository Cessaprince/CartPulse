import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import paypal from '../images/page-images/paypal.png'
import stripe from '../images/page-images/stripe.png'
import mastercard from '../images/page-images/mastercard.png'

const Footer = () => {
    return (
        <div>
            <section className='bg-[var(--navyblue-grayish)] py-[15px]'>
                <div className="container">
                    <div className="flex justify-between items-center gap-[30px] text-[var(--white)] py-[50px] border-b-[0.1px] border-gray-500">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className='font-bold text-sm capitalize'>quick links</h3>
                            <div className="flex flex-col gap-[15px]">
                                <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                                    home
                                </Link>
                                <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                                    about
                                </Link>
                                <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                                    shop
                                </Link>
                                <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                                    blog
                                </Link>
                                <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                                    account
                                </Link>
                                <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                                    contact
                                </Link>
                            </div>

                        </div>


                        <div className="flex flex-col gap-[30px]">
                            <h3 className='font-bold text-sm capitalize'>popular products</h3>
                            <div className="flex flex-col gap-[15px]">

                                {/* each product*/}
                                <div className="flex gap-[10px]">
                                    <div className="h-[50px] w-[55px] overflow-hidden">
                                        <img src="" alt="" className='h-full w-full object-cover' />
                                    </div>

                                    <div className="flex flex-col">
                                        <Link className='font-bold text-sm capitalize hover:text-[var(--royalblue)] cursor-pointer'>11-inch indoor plant</Link>
                                        <div className="flex gap-[10px]">
                                            <span className='text-[var(--white)] text-sm'>$19.99</span>
                                            <del className='text-[var(--white)] text-sm'>$29.99</del>
                                        </div>
                                    </div>


                                </div>

                                <div className="flex gap-[10px]">
                                    <div className="h-[50px] w-[55px] overflow-hidden">
                                        <img src="" alt="" className='h-full w-full object-cover' />
                                    </div>

                                    <div className="flex flex-col">
                                        <Link to='' className='font-bold text-sm capitalize hover:text-[var(--royalblue)] cursor-pointer'>pink t-shirt</Link>
                                        <div className="flex gap-[10px]">
                                            <span className='text-[var(--white)] text-sm'>$19.99</span>
                                            <del className='text-[var(--white)] text-sm'>$29.99</del>
                                        </div>
                                    </div>


                                </div>

                                <div className="flex gap-[10px]">
                                    <div className="h-[50px] w-[55px] overflow-hidden">
                                        <img src="" alt="" className='h-full w-full object-cover' />
                                    </div>

                                    <div className="flex flex-col">
                                        <Link className='font-bold text-sm capitalize hover:text-[var(--royalblue)] cursor-pointer'>vintage wall decor</Link>
                                        <div className="flex gap-[10px]">
                                            <span className='text-[var(--white)] text-sm'>$19.99</span>
                                            <del className='text-[var(--white)] text-sm'>$29.99</del>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col gap-[10px] w-[400px] bg-[var(--blackgray)] h-auto p-[40px] rounded-[25px]'>
                            <h3 className='font-bold text-sm capitalize'>get 10% OFF of your first purchase</h3>
                            <form action="" className='flex flex-col gap-[15px]'>
                                <input type="email" name="" id="" className='w-full border-[0.1px] outline-none bg-white text-gray-500 py-[18px] px-[15px] rounded-[25px] text-xs' placeholder='Enter your email address' />
                                <button type="submit" className='w-full border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[15px] rounded-[25px] text-sm font-bold transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>Subscribe</button>
                            </form>
                        </div>


                    </div>


                    <div className="flex justify-between gap-[20px] py-[30px]">
                        <div className='flex gap-[20px] items-center text-white'>
                            <div className='flex gap-[5px] items-center'>
                                <ShoppingBag className='text-[var(--royalblue)]' />
                                <span className='text-white text-[22px] font-semi-bold'>CartPulse</span>
                            </div>
                            <div className=''>|</div>
                            <span className="text-xs">Copyright © Storewave X | Designed by BRIX Templates - Powered by Webflow</span>
                        </div>

                        <div className='flex gap-[10px] items-center'>
                            <div className="h-[40px] w-[60px] overflow-hidden rounded-[10px]">
                                <img src={ paypal } alt="" className='h-full w-full object-cover' />
                            </div>

                            <div className="h-[40px] w-[60px] overflow-hidden rounded-[10px]">
                                <img src={ stripe } alt="" className='h-full w-full object-cover' />
                            </div>

                            <div className="h-[40px] w-[60px] overflow-hidden rounded-[10px]">
                                <img src={mastercard} alt="" className='h-full w-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer