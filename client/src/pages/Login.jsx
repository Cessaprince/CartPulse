import React from 'react'
import { EyeClosedIcon, EyeOff, Eye } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import googleLogo from '../images/page-images/google-logo.png'
import { useState } from 'react'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import shoppingCart from '../images/page-images/shoppingCart.jpg'
import { ShoppingBag } from 'lucide-react'

//for the firebase authentication
import { auth } from '../firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


const Login = () => {

    //to track email change and password 
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    //for loading and to track password eye icon
    const [isLoading, setIsLoading] = useState(false);

    const [seePassword, setSeePassword] = useState(false);

    //to navigate to the home page after login
    const navigate = useNavigate();

    //function to track typing in mail, password typing and toggling of eye icon
    const emailTyping = (e) => {
        setEmail(e.target.value)
    }

    const passwordTyping = (e) => {
        setPassword(e.target.value)
    }

    const toggleSeePassword = () => {
        setSeePassword(!seePassword)
    }

    //when the button with submit type is clicked
    const buttonClicked = async (e) => {

        e.preventDefault()

        if (isLoading === true) {
            return
        }

        if (!email.trim() || !password.trim()) {
            iziToast.error({
                title: 'Validation Error',
                message: 'Email and password are required!',
                position: 'topRight',
                timeout: 3000,
            });
            return;
        }

        setIsLoading(true)

        try {
            await signInWithEmailAndPassword(auth, email, password)

            iziToast.success({
                title: 'Success!',
                message: 'Login Successful!',
                position: 'topRight',
                timeout: 3000,
            })

            navigate('/')
        } catch (error) {
            iziToast.error({
                title: 'Login Failed',
                message: error.code.split('/')[1].toUpperCase(),
                position: 'topRight',
                timeout: 3000,
            })
        } finally {
            setIsLoading(false)
        }
    }

    const googleLogin = async () => {

        if (isLoading === true) {
            return
        }

        setIsLoading(true)

        try {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)

            iziToast.success({
                title: 'Success!',
                message: 'Login Successful!',
                position: 'topRight',
                timeout: 3000,
            })

            navigate('/')
        } catch (error) {
            iziToast.error({
                title: 'Login Failed',
                message: error.message,
                position: 'topRight',
                timeout: 3000,
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen max-lg:px-[30px]'>

            <section className='w-[900px] flex h-[450px] bg-white shadow border-[0.1px] border-gray-200 rounded-[15px]'>
                <div className="w-[50%] overflow-hidden rounded-l-[15px] max-md:hidden">
                    <img src={shoppingCart} alt="" className='w-full h-full object-cover' />

                </div>
                <form action="" className='w-[50%] max-md:w-full flex flex-col gap-[15px] p-[40px]'>
                    <h1 className='font-bold text-[22px] text-center flex justify-center items-center gap-[5px]'>
                        <ShoppingBag className='text-[var(--royalblue)] hidden max-md:block' size={25} />
                        Login
                    </h1>
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={emailTyping}
                        className='text-[15px] border-[0.1px] border-gray-400 shadow-sm bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]'
                    />

                    <div className="text-[15px] flex justify-between border-[0.1px] border-gray-400 shadow items-center bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]">
                        <input
                            type={seePassword ? 'text' : 'password'}
                            placeholder='Password'
                            className='w-[80%] h-full outline-none'
                            value={password}
                            onChange={passwordTyping}
                        />
                        <span className='group cursor-pointer' onClick={toggleSeePassword}>
                            {seePassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </span>
                    </div>

                    <button
                        type="submit"
                        onClick={buttonClicked}
                        disabled={isLoading}
                        className='w-full py-[10px] bg-[var(--royalblue)] font-light text-white rounded-[5px] hover:bg-[var(--royalblue-hover)] hover:-translate-y-1 cursor-pointer transition-all duration-300 ease'
                    >
                        {isLoading ? 'Logging in..' : 'Login'}
                    </button>
                    <p className='text-[15px] text-center text-gray-500'>Don't have an account? <Link to='/signup' className='text-[var(--royalblue)] hover:text-[var(--royalblue-hover)]'>Signup</Link></p>

                    <fieldset className="border-t border-gray-300 my-[5px] text-center">
                        <legend className="px-4 text-sm font-medium text-gray-500 uppercase">
                            or
                        </legend>
                    </fieldset>
                    <button
                        type="button"
                        onClick={googleLogin}
                        disabled={isLoading}
                        className='group w-full py-[10px] border-[0.1px] border-gray-400 font-light text-gray-500 rounded-[5px] hover:-translate-y-1 cursor-pointer transition-all duration-300 ease flex items-center justify-center'
                    >
                        <span className='w-[50px] h-full rounded-full overflow-hidden'>
                            <img src={googleLogo} alt="" />
                        </span>
                        <span className='text-[15px]'>Login with Google</span>
                    </button>


                </form>


            </section>
        </div>
    )
}

export default Login