import React from 'react'
import { EyeClosedIcon, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import googleLogo from '../images/page-images/google-logo.png'

const SignUp = () => {
    return (
        <div>
            <div className='flex container'>
                <section className='mx-auto w-[450px] max-md:my-[50px] h-auto bg-white shadow border-[0.1px] border-gray-200 my-[50px] p-[30px] rounded-[10px]'>
                    <div className=''>
                        <form action="" className='w-full flex flex-col gap-[15px] '>
                            <h1 className='font-bold text-[22px] text-center'>SignUp</h1>
                            <input type="text" placeholder='Username' className='text-[15px] border-[0.1px] border-gray-400 shadow-sm bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]' />

                            <input type="email" placeholder='Email Address' className='text-[15px] border-[0.1px] border-gray-400 shadow-sm bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]' />

                            <div className="group text-[15px] flex justify-between border-[0.1px] border-gray-400 shadow-sm items-center bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]">
                                <input type="password" placeholder='Create password' className='w-[80%] h-full outline-none ' />
                                <span className='group cursor-pointer'>
                                    <EyeOff size={18} />
                                </span>
                            </div>

                            <div className="text-[15px] flex justify-between border-[0.1px] border-gray-400 shadow items-center bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]">
                                <input type="password" placeholder='Confirm password' className='w-[80%] h-full outline-none' />
                                <span className='group cursor-pointer'>
                                    <EyeOff size={18} />
                                </span>
                            </div>

                            <button type="submit" className='w-full py-[10px] bg-[var(--royalblue)] font-light text-white rounded-[5px] hover:bg-[var(--royalblue-hover)] hover:-translate-y-1 cursor-pointer transition-all duration-300 ease'>Signup</button>
                            <p className='text-[15px] text-center text-gray-500'>Already have an account? <Link to='/login' className='text-[var(--royalblue)] hover:text-[var(--royalblue-hover)]'>Login</Link></p>

                            <fieldset class="border-t border-gray-300 my-[5px] text-center">
                                <legend class="px-4 text-sm font-medium text-gray-500 uppercase">
                                    or
                                </legend>
                            </fieldset>
                            <button type="submit" className='group w-full py-[10px] border-[0.1px] border-gray-400 font-light text-gray-500 rounded-[5px] hover:-translate-y-1 cursor-pointer transition-all duration-300 ease flex items-center justify-center'>
                                <span className='w-[50px] h-full rounded-full overflow-hidden'>
                                    <img src={googleLogo} alt="" />
                                </span>
                                <span className='text-[15px]'>Signup with Google</span>
                            </button>


                        </form>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignUp