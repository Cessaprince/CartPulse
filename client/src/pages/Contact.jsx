import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Mail, Phone, PhoneCall, Van, ChevronRight } from 'lucide-react'

const Contact = () => {
    return (
        <div>
            <Nav />

            <section className='py-[50px] bg-gradient-to-b from-white from-50% to-gray-50 to-50%'>
                <div className="container">
                    <div data-aos="fade-up"  className="w-full flex max-md:w-full">
                        <div className="flex flex-col mx-auto items-center py-[50px] max-md:w-full">
                            <h3 className='capitalize text-[45px] max-md:text-[30px]'>contact us</h3>
                            <span className='font-thin text-gray-500 text-[16px] w-[60%] text-center max-md:w-[80%] max-md:text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </span>

                            {/* the form*/}

                            <form action="" className='my-[50px] border-[0.1px] border-gray-200 rounded-[20px] w-[600px] max-md:w-full h-auto shadow-lg px-[40px] py-[60px] flex flex-col gap-[30px] items-center bg-white'>

                                {/* form controls*/}
                                <div className="flex items-center w-full gap-[30px] max-md:flex-col">
                                    {/* label and input*/}
                                    <div className="flex flex-col gap-[7px] w-[50%] max-md:w-full">
                                        <h3 className='capitalize text-[14px] font-bold'>name</h3>
                                        <input type="text" name="" id="" placeholder='John Carter' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[25px] outline-none transition duration-500 hover:border-black' />

                                    </div>

                                    <div className="flex flex-col gap-[7px] w-[50%] max-md:w-full">
                                        <h3 className='capitalize text-[14px] font-bold'>email</h3>
                                        <input type="email" name="" id="" placeholder='example@gmail.com' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[25px] outline-none transition duration-500 hover:border-black' />

                                    </div>

                                </div>

                                <div className="flex items-center w-full gap-[30px] max-md:flex-col">
                                    {/* label and input*/}
                                    <div className="flex flex-col gap-[7px] w-[50%] max-md:w-full">
                                        <h3 className='capitalize text-[14px] font-bold'>phone</h3>
                                        <input type="tel" name="" id="" placeholder='(123) 456 -789' className='text-xs text-gray-600 shadow-sm py-[15px] px-[20px] border-[0.1px] border-gray-400 rounded-[25px] outline-none transition duration-500 hover:border-black' />

                                    </div>

                                    <div className="flex flex-col gap-[7px] w-[50%] max-md:w-full">
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
                                <h3 className='capitalize text-[24px] font-semibold max-d:text-[22px]'>Want to reach out directly?</h3>
                                <span className='font-thin text-gray-500 text-[16px] w-[50%] text-center max-md:w-[80%]'>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
                                </span>

                                <div className="mx-auto my-[30px] flex max-md:flex-col p-[50px] justify-between gap-[30px] border-[0.1px] border-gray-100 shadow bg-[var(--white)] rounded-[10px]">
                                    {/* each icon*/}
                                    <div className="px-[40px] max-md:px-[20px] border-r border-r-[0.9px] max-md:border-[0px] border-gray-400 flex items-center gap-[15px]">
                                        <Mail className='text-[var(--royalblue)]' size={50} />
                                        <a href='mailto:help@storewave.com' className="group flex flex-col transition-all duration-300 ease-in-out">
                                            <span className="text-[16px] text-gray-600 capitalize group-hover:text-[var(--royalblue)] transition duration-300 ease-in-out">email:</span>
                                            <span className="text-[18px] text-gray-500 font-light group-hover:text-[var(--royalblue)] transition duration-300 ease-in-out">help@storewave.com</span>
                                        </a>
                                    </div>

                                    <div className="px-[40px] max-md:px-[20px] flex items-center gap-[15px]">
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

            <section className="py-[120px]">
                <div data-aos="fade-up" className="container flex flex-col gap-[50px]">
                    <div className='mx-auto flex flex-col items-center gap-[15px]'>
                        <h3 className='capitalize text-[36px] max-md:text-[24px]'>frequently asked questions</h3>
                        <span className='font-thin text-gray-500 text-[16px] w-[60%] text-center max-md:w-[80%] max-md:text-[13px]'>
                            Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie atole elementum eu facilisis faucibus interdum posuere.
                        </span>
                    </div>

                    {/* the frequently asked questions*/}
                    <div className="grid grid-cols-2 gap-[30px] items-center max-md:grid-cols-1">

                        {/*each question*/}

                        {/* question1*/}
                        <div className="cursor-pointer flex flex-col items-center gap-[10px] shadow-xs border-[0.1px] rounded-[10px] p-[30px] border-gray-200 transition-all duration-300 ease hover:scale-99">
                            <div className="flex w-full justify-between items-center gap-[30px]">
                                <p className='font-semibold text-[18px] max-md:text-[16px]'>Do you offer international shipping?</p>
                                <ChevronRight size={30} />
                            </div>

                            {/* text to display when the chevronRight will change to chevron down */}

                            <div className='hidden w-full'>
                                <p className='font-light text-gray-500 text-[16px] max-md:text-[13px] w-full leading-[25px] break-words whitespace-normal'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                </p>
                            </div>
                        </div>

                        {/* question2*/}
                        <div className="cursor-pointer flex flex-col items-center gap-[10px] shadow-xs border-[0.1px] rounded-[10px] p-[30px] border-gray-200 transition-all duration-300 ease hover:scale-99">
                            <div className="flex w-full justify-between items-center gap-[30px]">
                                <p className='font-semibold text-[18px] max-md:text-[16px]'>Do you offer international shipping?</p>
                                <ChevronRight size={30} />
                            </div>

                            {/* text to display when the chevronRight will change to chevron down */}

                            <div className='hidden w-full'>
                                <p className='font-light text-gray-500 text-[16px] max-md:text-[13px] w-full leading-[25px] break-words whitespace-normal'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                </p>
                            </div>
                        </div>

                        {/* question3*/}
                        <div className="cursor-pointer flex flex-col items-center gap-[10px] shadow-xs border-[0.1px] rounded-[10px] p-[30px] border-gray-200 transition-all duration-300 ease hover:scale-99">
                            <div className="flex w-full justify-between items-center gap-[30px]">
                                <p className='font-semibold text-[18px] max-md:text-[16px]'>Do you offer international shipping?</p>
                                <ChevronRight size={30} />
                            </div>

                            {/* text to display when the chevronRight will change to chevron down */}

                            <div className='hidden w-full'>
                                <p className='font-light text-gray-500 text-[16px] max-md:text-[13px] w-full leading-[25px] break-words whitespace-normal'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                </p>
                            </div>
                        </div>

                        {/* question4*/}
                        <div className="cursor-pointer flex flex-col items-center gap-[10px] shadow-xs border-[0.1px] rounded-[10px] p-[30px] border-gray-200 transition-all duration-300 ease hover:scale-99">
                            <div className="flex w-full justify-between items-center gap-[30px]">
                                <p className='font-semibold text-[18px] max-md:text-[16px]'>Do you offer international shipping?</p>
                                <ChevronRight size={30} />
                            </div>

                            {/* text to display when the chevronRight will change to chevron down */}

                            <div className='hidden w-full'>
                                <p className='font-light text-gray-500 text-[16px] max-md:text-[13px] w-full leading-[25px] break-words whitespace-normal'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                </p>
                            </div>
                        </div>

                        {/* question5*/}
                        <div className="cursor-pointer flex flex-col items-center gap-[10px] shadow-xs border-[0.1px] rounded-[10px] p-[30px] border-gray-200 transition-all duration-300 ease hover:scale-99">
                            <div className="flex w-full justify-between items-center gap-[30px]">
                                <p className='font-semibold text-[18px] max-md:text-[16px]'>Do you offer international shipping?</p>
                                <ChevronRight size={30} />
                            </div>

                            {/* text to display when the chevronRight will change to chevron down */}

                            <div className='hidden w-full'>
                                <p className='font-light text-gray-500 text-[16px] max-md:text-[13px] w-full leading-[25px] break-words whitespace-normal'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                </p>
                            </div>
                        </div>

                        {/* question6*/}
                        <div className="cursor-pointer flex flex-col items-center gap-[10px] shadow-xs border-[0.1px] rounded-[10px] p-[30px] border-gray-200 transition-all duration-300 ease hover:scale-99">
                            <div className="flex w-full justify-between items-center gap-[30px]">
                                <p className='font-semibold text-[18px] max-md:text-[16px]'>Do you offer international shipping?</p>
                                <ChevronRight size={30} />
                            </div>

                            {/* text to display when the chevronRight will change to chevron down */}

                            <div className='hidden w-full'>
                                <p className='font-light text-gray-500 text-[16px] max-md:text-[13px] w-full leading-[25px] break-words whitespace-normal'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut.
                                </p>
                            </div>
                        </div>


                    </div>


                </div>
            </section>



            <Footer />
        </div>
    )
}

export default Contact