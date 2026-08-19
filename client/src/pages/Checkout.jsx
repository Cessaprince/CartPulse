import React from 'react'
import { ShoppingBag, X } from 'lucide-react'
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const navigate = useNavigate(); 

    //add to cart
    const { cartItems, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();

    //reduce has two params: accumulator, element looked at and then starting value (in this case 0)
    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    //controls whether the payment-success popup is showing
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    //runs when "make payments" is clicked
    const handlePayment = () => {
        setPaymentSuccessful(true);
    };

    //runs when "continue shopping" is clicked, it empties the cart and sends user home
    const continueShopping = () => {
        clearCart();
        setPaymentSuccessful(false);
        navigate('/');
    };

    return (
        <div>
            <div className='flex gap-[5px] items-center justify-center py-[10px] border-b-[0.1px] border-b-gray-300 max-md:py-[20px]'>
                <ShoppingBag className='text-[var(--royalblue)]' size={30} />
                <span className='text-[24px] font-semi-bold'>CartPulse</span>
            </div>
            <section className='py-[30px] max-md:min-h-screen'>
                <div className="flex max-md:flex-col items-start gap-[30px]">
                    {/* form field*/}
                    <form action="" className="flex flex-col gap-[20px] w-[50%] max-md:w-full">

                        {/* account deatils*/}
                        <div className="flex flex-col gap-[15px] pl-[100px] pr-[20px] pb-[50px] max-md:px-[60px] border-b-gray-300 border-b-[0.1px]">
                            <h3 className="text-[18px] capitalize font-semibold">1. account details</h3>
                            <div className="flex items-center gap-[20px] w-full">
                                <div className="flex flex-col w-full gap-[5px]">
                                    <span className='text-gray-600 text-sm capitalize'>email ID</span>
                                    <input type="email" name="" id="" placeholder='example@gmail.com' className='outline-none py-[10px] px-[15px] bg-gray-100  rounded-[7px] border-gray-300 border-[0.1px] text-sm' />
                                </div>
                                <div className="flex flex-col w-full gap-[5px]">
                                    <span className='text-gray-600 text-sm capitalize'>mobile number</span>
                                    <input type="tel" name="" id="" placeholder='0807-000-0000' className='outline-none py-[10px] px-[15px] bg-gray-100  rounded-[7px] border-gray-300 border-[0.1px] text-sm' />
                                </div>

                            </div>
                        </div>

                        {/* delivery address*/}
                        <div className="flex flex-col gap-[15px] pl-[100px] pr-[20px] pb-[50px] max-md:px-[60px] border-b-gray-300 border-b-[0.1px]">
                            <h3 className="text-[18px] capitalize font-semibold">2. Delivery details</h3>
                            <input type="text" name="" id="" placeholder='Plot 221 deeper life bible church road, rivers state university, mile3, port-harcourt' className='w-full outline-none py-[10px] px-[15px] bg-gray-100 capitalize rounded-[7px] border-gray-300 border-[0.1px] text-sm' />

                        </div>

                        {/* payment details*/}
                        <div className="flex flex-col gap-[20px] pl-[100px] pr-[20px] pb-[50px] max-md:px-[60px] border-b-gray-300 border-b-[0.1px]">
                            <h3 className="text-[18px] capitalize font-semibold">3. payment details</h3>
                            <div className="flex flex-col w-full gap-[5px]">
                                <span className='text-gray-600 text-sm capitalize'>name on credt card</span>
                                <input type="text" name="" id="" placeholder='enter fullname on card' className='w-full outline-none py-[10px] px-[15px] bg-gray-100 capitalize rounded-[7px] border-gray-300 border-[0.1px] text-sm' />
                            </div>
                            <div className="flex items-center gap-[20px] w-full max-md:flex-col">
                                <div className="flex flex-col w-full gap-[5px]">
                                    <span className='text-gray-600 text-sm capitalize'>expiry date</span>

                                    <input type='month' name="" id="" className='outline-none py-[10px] px-[15px] bg-gray-100  rounded-[7px] border-gray-300 border-[0.1px] text-sm' />
                                </div>
                                <div className="flex flex-col w-full gap-[5px]">
                                    <span className='text-gray-600 text-sm capitalize'>security code</span>
                                    <input type="number" name="" id="" placeholder='000' className='outline-none py-[10px] px-[15px] bg-gray-100  rounded-[7px] border-gray-300 border-[0.1px] text-sm' />
                                </div>
                                <div className="flex flex-col w-full gap-[5px]">
                                    <span className='text-gray-600 text-sm capitalize'>poster code</span>
                                    <input type="text" name="" id="" placeholder='UK' className='outline-none py-[10px] px-[15px] bg-gray-100  rounded-[7px] border-gray-300 border-[0.1px] text-sm' />
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* details */}
                    <div className="flex flex-col flex-1 max-md:w-full py-[30px] px-[60px] gap-[30px]">
                        <h3 className="text-[18px] capitalize font-semibold">order summary</h3>

                        <div
                            className='bg-[var(--white)] rounded-[15px] flex flex-col items-center w-full gap-[30px] max-w-[450px] shadow-lg h-auto overflow-hidden py-[10px]'

                        >
                            <div className="flex justify-between items-center w-full border-b-[0.1px] border-gray-300 px-[25px] py-[10px]">
                                <h3 className='text-lg font-semibold'>Your Cart</h3>
                            </div>

                            <div className="flex flex-col gap-[10px] w-full pb-[15px]">

                                {/* one block per item in the cart, instead of one hardcoded item */}
                                {cartItems.map((item) => (
                                    <div key={item.id} className="px-[25px] flex justify-between items-start w-full border-b-[0.1px] border-gray-300 pb-[30px]">
                                        {/* image and name*/}
                                        <div className="flex items-start gap-[15px]">
                                            <div className="w-[100px] h-[100px] border-[0.1px] rounded-[15px] border-gray-500 overflow-hidden hover:border-[var(--royalblue)] hover:border-[1px] transition-colors ease-in-out cursor-pointer">
                                                <img src={item.image} alt="" />
                                            </div>
                                            {/* text */}
                                            <div className="flex flex-col">
                                                <h3 className='text-[16px] font-semibold capitalize'>{item.name}</h3>
                                                <span className="text-sm text-gray-700">$ {item.price} USD</span>

                                                <button
                                                    /* use the arrow function to pass it since it has an arguement */
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-sm text-[var(--royalblue)] mt-[10px] text-white bg-red-500 text-center py-[10px] px-[20px] rounded-[25px] w-fit hover:bg-red-700 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-300"
                                                >Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className="rounded-[25px] p-[3px] border-[0.1px] border-gray-500 w-[100px]">
                                            <input
                                                type="number"
                                                name="" id=""
                                                defaultValue={item.quantity}
                                                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                                className='w-full h-full outline-none px-[10px] py-[3px]' />
                                        </div>

                                    </div>
                                ))}

                                <div className="flex justify-between items-center w-full px-[25px] py-[10px]">
                                    <h3 className="text-[16px] text-gray-500 capitalize">subtotal: </h3>
                                    <span className="text-[16px] font-semibold text-black">$ {cartTotal.toFixed(2)} USD</span>
                                </div>
                                <button
                                    type='button'
                                    onClick={handlePayment}
                                    className='w-[90%] self-center flex items-center justify-center capitalize text-white border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[12px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)] font-semibold'
                                >
                                    make payments
                                </button>
                            </div>


                        </div>

                    </div>
                </div>

                {paymentSuccessful && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm px-[15px]'>
                        <div
                            className='bg-[var(--white)] rounded-[15px] flex flex-col items-center gap-[20px] w-full max-w-[400px] shadow-lg p-[40px]'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className='text-[22px] font-semibold text-center'>Payment successful!</h3>
                            <p className='text-gray-500 text-sm text-center'>Thank you for your order. Your items are on their way.</p>
                            <button
                                onClick={continueShopping}
                                className='w-full flex items-center justify-center capitalize text-white border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[12px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)] font-semibold'
                            >
                                continue shopping
                            </button>
                        </div>
                    </div>
                )}



            </section>
        </div>
    )
}

export default Checkout