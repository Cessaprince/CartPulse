//all the imports

import React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import googleLogo from '../images/page-images/google-logo.png'
import shoppingCart from '../images/page-images/shoppingCart.jpg'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'


//for the firebase authentication for nornal button
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const SignUp = () => {

    {/* these variables are for tracking the eye and eyeoff icons */ }
    const [seeCreatePassword, setSeeCreatePassword] = useState(false); //useState is to track anything that is bound to change
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

    {/* these are the functions that will be made onclick of the eye icon */ }

    //for toggling of create password icon
    const toggleCreatePassword = () => {
        setSeeCreatePassword(!seeCreatePassword); //onclick, do this
    }

    //for toggling of confirm password icon
    const toggleConfirmPassword = () => {
        setSeeConfirmPassword(!seeConfirmPassword); //onclick, do this
    }

    //tracking the input of the password
    const [password, setPassword] = useState('');
    const [isTypingPassword, setIsTypingPassword] = useState(false) //to check if the use is typing

    const expectedLength = 8; //the length variable for password


    //use a function that has the 'e' argument - 'e' is the typing event
    const checkPassword = (e) => {
        setPassword(e.target.value)
        setIsTypingPassword(true) //for the typing event, target value and set isTyping to true
    }

    //the errormessage for the password
    const errorMessage = (isTypingPassword === true) && (password.length < expectedLength)


    //tracking that confirm password is equalto the password created
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isTypingConfirm, setIsTypingConfirm] = useState(false)

    //use a function that has the 'e' argument - 'e' is the typing event for confirm passsword here
    const checkComfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        setIsTypingConfirm(true)
    }

    //error message for confirm password
    const errorMessageConfirm = (isTypingConfirm === true) && (password !== confirmPassword)

    //tracking the username and email
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    //the button function
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); //used for navigation

    //normal button with submit type (remove the deafult event)
    const buttonClicked = async (e) => {

        e.preventDefault()

        if (isLoading === true) {
            return //the function wont run at al is is loading is already true
        }

        if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            iziToast.error({
                title: 'Validation Error',
                message: 'All form fields are required!',
                position: 'topRight',
                timeout: 3000,
            });
            return;
        }

        if (password.length < expectedLength || password !== confirmPassword) {
            iziToast.warning({
                title: 'Attention',
                message: 'Please resolve the password validation issues before continuing.',
                position: 'topRight',
                timeout: 3000,
            });
            return;
        }

        setIsLoading(true) //let it become true so that the button can change color and icon


        //use try catch because there might be an error
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            await updateProfile(user, {
                displayName: username
            })

            iziToast.success({
                title: 'Success!',
                message: 'Sign up Successful!',
                position: 'topRight',
                timeout: 3000,
            })

            navigate('/login')
        } catch (error) {
            iziToast.error({
                title: 'Sign Up Failed',
                message: error.message,
                position: 'topRight',
                timeout: 3000,
            })
        } finally {
            setIsLoading(false)
        }
    }

    //for the google button (use async await so that other functions can be running in the background)
    const googleSignUp = async () => {

        if (isLoading === true) {
            return
        }

        setIsLoading(true)

        try {
            const provider = new GoogleAuthProvider() //for google popup
            await signInWithPopup(auth, provider)

            iziToast.success({
                title: 'Success!',
                message: 'Sign up Successful!',
                position: 'topRight',
                timeout: 3000,
            })

            navigate('/')
        } catch (error) {
            iziToast.error({
                title: 'Sign Up Failed',
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
            <section className='w-[900px] flex h-auto bg-white shadow border-[0.1px] border-gray-200 rounded-[15px]'>
                <div className="w-[50%] overflow-hidden rounded-l-[15px] max-md:hidden">
                    <img src={shoppingCart} alt="" className='w-full h-full object-cover' />
                </div>

                <form action="" className='w-[50%] max-md:w-full flex flex-col gap-[15px] p-[40px]'>
                    <h1 className='font-bold text-[22px] text-center'>SignUp</h1>

                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={
                            (e) => setUsername(e.target.value)
                        }
                        className='text-[15px] border-[0.1px] border-gray-400 shadow-sm bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]'
                    />

                    <input
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                        className='text-[15px] border-[0.1px] border-gray-400 shadow-sm bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]'
                    />

                    <div className="flex flex-col gap-[5px]">
                        <div className="password text-[15px] flex justify-between border-[0.1px] border-gray-400 shadow-sm items-center bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]">
                            <input
                                type={seeCreatePassword ? 'text' : 'password'}
                                placeholder='Create password'
                                className='w-[80%] h-full outline-none'
                                value={password}
                                onChange={checkPassword}
                            />

                            <span className='cursor-pointer' onClick={toggleCreatePassword}>
                                {seeCreatePassword ? <Eye size={18} /> : <EyeOff size={18} />}
                            </span>
                        </div>

                        {errorMessage && (
                            <span className='text-red-400 text-xs'>
                                {`Password should be ${expectedLength} characters or more.`}
                            </span>
                        )}
                    </div>

                    <div className='flex flex-col gap-[5px]'>
                        <div className="text-[15px] flex justify-between border-[0.1px] border-gray-400 shadow items-center bg-white py-[10px] px-[15px] text-gray-500 w-full outline-none rounded-[5px]">
                            <input
                                type={seeConfirmPassword ? 'text' : 'password'}
                                placeholder='Confirm password'
                                className='w-[80%] h-full outline-none'
                                value={confirmPassword}
                                onChange={checkComfirmPassword}
                            />

                            <span className='cursor-pointer' onClick={toggleConfirmPassword}>
                                {seeConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                            </span>
                        </div>

                        {errorMessageConfirm && (
                            <span className='text-red-400 text-xs'>
                                {`Password is not similar.`}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={`${isLoading ? 'bg-[var(--royalblue-hover)]' : 'bg-[var(--royalblue)]'} w-full max-md:py-[8px] py-[10px] font-light text-white rounded-[5px] hover:bg-[var(--royalblue-hover)] hover:-translate-y-1 cursor-pointer transition-all duration-300 ease`}
                        onClick={buttonClicked}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing up..' : 'Submit'}
                    </button>

                    <p className='text-[15px] text-center text-gray-500 max-md:text-[14px]'>
                        Already have an account?
                        <Link to='/login' className='text-[var(--royalblue)] hover:text-[var(--royalblue-hover)]'>
                            Login
                        </Link>
                    </p>

                    <fieldset className="border-t border-gray-300 my-[5px] text-center">
                        <legend className="px-4 text-sm font-medium text-gray-500 uppercase">
                            or
                        </legend>
                    </fieldset>

                    <button
                        type="button"
                        onClick={googleSignUp}
                        className='group max-md:py-[7px] w-full py-[10px] border-[0.1px] border-gray-400 font-light text-gray-500 rounded-[5px] hover:-translate-y-1 cursor-pointer transition-all duration-300 ease flex items-center justify-center'
                    >
                        <span className='w-[50px] h-full rounded-full overflow-hidden'>
                            <img src={googleLogo} alt="" />
                        </span>

                        <span className='text-[15px] max-md:text-[14px]'>Signup with Google</span>
                    </button>

                </form>
            </section>
        </div>

    )
}

export default SignUp

