import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mail, Phone, PhoneCall, Van } from 'lucide-react'

const Contact = () => {
    return (
        <div>
            <Nav />

            <section className='py-[50px]'>
                <div className="container">
                    <div className="w-full flex">
                        <div className="flex flex-col mx-auto items-center py-[50px]">
                            <h3 className='capitalize text-[45px]'>contact us</h3>
                            <span className='font-thin text-gray-500 text-[16px] w-[60%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </span>

                            {/* the form*/}

                            <form action="" className='my-[50px] border-[0.1px] border-gray-200 rounded-[20px] w-[600px] h-auto shadow-lg px-[40px] py-[60px] flex flex-col gap-[30px] items-center'>

                                {/* form controls*/}
                                <div className="flex items-center w-full gap-[30px]">
                                    {/* label and input*/}
                                    <div className="flex flex-col gap-[7px] w-[50%]">
                                        <h3 className='capitalize text-[14px] font-bold'>name</h3>
                                        <input type="text" name="" id="" placeholder='John Carter' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[25px] outline-none transition duration-500 hover:border-black' />

                                    </div>

                                    <div className="flex flex-col gap-[7px] w-[50%]">
                                        <h3 className='capitalize text-[14px] font-bold'>email</h3>
                                        <input type="email" name="" id="" placeholder='example@gmail.com' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[25px] outline-none transition duration-500 hover:border-black' />

                                    </div>

                                </div>

                                <div className="flex items-center w-full gap-[30px]">
                                    {/* label and input*/}
                                    <div className="flex flex-col gap-[7px] w-[50%]">
                                        <h3 className='capitalize text-[14px] font-bold'>phone</h3>
                                        <input type="tel" name="" id="" placeholder='(123) 456 -789' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[25px] outline-none transition duration-500 hover:border-black' />

                                    </div>

                                    <div className="flex flex-col gap-[7px] w-[50%]">
                                        <h3 className='capitalize text-[14px] font-bold'>subject</h3>
                                        <input type="text" name="" id="" placeholder='Support' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[25px] outline-none transition duration-500 hover:border-black' />

                                    </div>

                                </div>

                                <div className="flex items-center w-full">
                                    {/* label and input*/}
                                    <div className="flex flex-col gap-[7px] w-full">
                                        <h3 className='text-[14px] font-bold'>Leave us a message</h3>
                                        <textarea name="" id="" cols="30" rows="8" placeholder='Please type your message here' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[15px] outline-none transition duration-500 hover:border-black'></textarea>
                                    </div>


                                </div>

                                <div className="flex justify-between w-full items-center">
                                    <button type="submit" className='w-fit capitalize border-[0.1px] text-white border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[20px] rounded-[25px] text-sm font-semibold transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>
                                        send message
                                    </button>

                                    <div className="flex items-center gap-[10px]">
                                        <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" className='group flex items-center justify-center p-[10px] h-[30px] w-[30px] bg-gray-200 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--royalblue)]'>
                                            <FontAwesomeIcon icon={['fab', 'facebook-f']} className='text-gray-500 group-hover:text-white' size='sm' />
                                        </a>

                                        <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" className='group flex items-center justify-center p-[10px] h-[30px] w-[30px] bg-gray-200 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--royalblue)]'>
                                            <FontAwesomeIcon icon={['fab', 'twitter']} className='text-gray-500 group-hover:text-white' size='sm' />
                                        </a>

                                        <a href="https:/instagram.com" target='_blank' rel="noopener noreferrer" className='group flex items-center justify-center p-[10px] h-[30px] w-[30px] bg-gray-200 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--royalblue)]'>
                                            <FontAwesomeIcon icon={['fab', 'instagram']} className='text-gray-500 group-hover:text-white' size='sm' />
                                        </a>
                                        <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer" className='group flex items-center justify-center p-[10px] h-[30px] w-[30px] bg-gray-200 rounded-full transition-all duration-300 ease-in-out hover:bg-[var(--royalblue)]'>
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} className='text-gray-500 group-hover:text-white' size='sm' />
                                        </a>
                                    </div>

                                </div>
                            </form>


                            {/* call and email box*/}
                            <div className="flex flex-col items-center gap-[5px] py-[20px]">
                                <h3 className='capitalize text-[24px] font-semibold'>Want to reach out directly?</h3>
                                <span className='font-thin text-gray-500 text-[16px] w-[50%] text-center'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
                                </span>

                                <div className="mx-auto my-[30px] flex p-[50px] justify-between gap-[30px] border-[0.1px] border-gray-100 shadow bg-[var(--white)] rounded-[10px]">
                                    {/* each icon*/}
                                    <div className="px-[40px] border-r border-r-[0.9px] border-gray-400 flex items-center gap-[15px]">
                                        <Mail className='text-[var(--royalblue)]' size={50} />
                                        <a href='mailto:help@storewave.com' className="group flex flex-col transition-all duration-300 ease-in-out">
                                            <span className="text-[16px] text-gray-600 capitalize group-hover:text-[var(--royalblue)] transition duration-300 ease-in-out">email:</span>
                                            <span className="text-[18px] text-gray-500 font-light group-hover:text-[var(--royalblue)] transition duration-300 ease-in-out">help@storewave.com</span>
                                        </a>
                                    </div>

                                    <div className="px-[40px] flex items-center gap-[15px]">
                                        <Phone className='text-[var(--royalblue)]' size={50} />
                                        <a href='tel:+1(414)580-0473' className="group flex flex-col transition-all duration-300 ease-in-out">
                                            <span className="text-[16px] text-gray-600 capitalize group-hover:text-[var(--royalblue)] transition duration-300 ease-in-out">phone:</span>
                                            <span className="text-[18px] text-gray-500 font-light group-hover:text-[var(--royalblue)] transition duration-300 ease-in-out">+1 (414) 580 - 0473</span>
                                        </a>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[30px]">
                <div className="container">

                </div>
            </section>



            <Footer />
        </div>
    )
}

export default Contact