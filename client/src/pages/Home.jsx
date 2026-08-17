//standard imports
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ChevronRight, Shirt, Star, Amphora, Birdhouse, Van } from 'lucide-react';
import { Link } from 'react-router-dom';
import hoodie from '../images/product-images/basic-hoodies.webp'
import grayShirt from '../images/product-images/gray-tshirt.png'
import grayCoat from '../images/product-images/gray-coat.webp'
import sneakers from '../images/product-images/sneakers.png'
import Discount from '../components/Discount';
import indoorPlant11 from '../images/product-images/indoor-plant.png';
import wallDecor from '../images/product-images/vintage-decor-wall.webp';
import dinnerWareSets from '../images/product-images/dinnerware-sets.png'
import pinkSweater from '../images/product-images/pink-shirt.webp';
import grayCap from '../images/product-images/gray-cap.png';
import wallClock from '../images/product-images/wood-wall-clock.png'
import ceramicVase from '../images/product-images/ceramic-vases.png'
import naturalPlant from '../images/product-images/natural-plant.png'

//import the products list of object from product.js
import products from '../data/product.js';

//import the useCart context
import { useCart } from '../context/CartContext'

//import the useAuth context
import { useAuth } from '../context/AuthContext'

//import iziToast for the toast notification of when you have to login
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

const Home = () => {

    //calling the usecart function and naming it the addtocart name that is returned by the provider
    const { addToCart } = useCart();

    //calling the useAuth function
    const { user } = useAuth();


    /* only adds to cart if someone is logged in, otherwise toasts them instead of silently doing nothing */
    const handleAddToCart = (product) => {
        if (!user) {
            iziToast.warning({
                title: 'Please log in',
                message: 'You need to be logged in to add items to your cart.',
                position: 'topCenter',
            });
            return;
        }

        addToCart(product);

        iziToast.success({
            title: 'Added to cart!',
            message: `${product.name} was added to your cart.`,
            position: 'topRight',
            timeout: 2000,
        });
    };

    return (
        <div>

            <Nav />
            <section className='py-[50px] max-md:pt-[50px] max-md:pb-[0px]'>
                <div className="container flex flex-col gap-[5px] max-md:gap-[30px]">

                    <div className="max-md:contents max-md:items-center max-md:h-[50vh] flex items-stretch gap-[30px] pb-[50px]">

                        {/* box at the left */}
                        <div className='max-md:order-3 max-md:w-full p-[22px] border-[0.1px] border-gray-300 flex flex-col gap-[10px] w-[330px] rounded-[18px]'>
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
                        <div className="max-md:h-full max-md:items-stretch max-md:pt-[50px] max-md:pb-[0px] max-md:flex-col  max-md:gap-[20px] flex gap-[50px] items-center justify-between flex-1 py-[20px] pl-[50px] bg-orange-50">
                            <div className="flex flex-col gap-[10px] w-[50%] max-md:w-[100%]">
                                <p className='text-[16px] font-bold'>New arrival</p>
                                <h3 className='capitalize text-[30px]'>2x1 in basic hoodies</h3>
                                <span className='font-thin text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorem quam voluptate </span>
                                <Link to='' className='mt-[30px] flex justify-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-black py-[15px] px-[15px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-gray-800'>buy now</Link>

                            </div>

                            <div className="h-full w-[70%] overflow-hidden max-md:ml-auto ">
                                <img src={hoodie} alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>

                    <Discount stackOnMobile={true} className='max-md:order-2' />

                </div>

            </section>


            <section className='py-[70px]'>
                <div className="container">
                    <div className="flex justify-between items-center gap-[10px] py-[20px]">
                        <h3 className='text-[25px] max-md:text-[16px]'>Latest products</h3>
                        <Link to='' className='flex justify-center items-center font-light w-fit whitespace-nowrap border-[0.1px] outline-none py-[15px] px-[25px] max-md:py-[8px] max-md:px-[12px] rounded-[25px] text-sm max-md:text-[10px] transition duration-500 ease border-gray-200 hover:border-[var(--royalblue)] hover:-translate-y-1 hover:text-[var(--royalblue)] cursor-pointer'>Explore products</Link>
                    </div>


                    {/* latest products and using the products variable name and mapping it*/}
                    <div className="grid grid-cols-4 max-md:grid-cols-2 gap-[40px] max-md:gap-[25px] py-[10px]">

                        {products.map((product) => (
                            <div key={product.id} data-id={product.id} className="group cursor-pointer flex flex-col pb-[18px] overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1">
                                <div className="w-full h-[80%] overflow-hidden">
                                    <img src={product.image} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                </div>
                                <div className='flex flex-col gap-[5px] py-[15px] px-[20px]'>
                                    <span className="text-[var(--royalblue)] text-[14px] capitalize">{product.category}</span>
                                    <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)]'>{product.name}</h3>
                                    <div className="flex gap-[15px]">
                                        <span className="text-[14px] text-gray-600 capitalize">$ {product.price} USD</span>
                                        <del className="text-[14px] text-gray-400 capitalize font-semibold">$ {product.originalPrice} USD</del>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* graycoat area */}
            <section className="py-[50px]">
                <div className="container">
                    <div className="w-full flex justify-between bg-gray-100 rounded-[10px] p-[100px] max-md:py-[70px] max-md:px-[50px] relative">
                        {/* graycoat and text area*/}
                        <div className="flex flex-col w-[50%] max-md:w-[60%] gap-[25px]">

                            <div className="flex gap-[30px] items-center">
                                <div className="self-stretch p-[1.5px] bg-[var(--royalblue)]"></div>

                                <div className='flex flex-col justify-center'>
                                    <span className='capitalize group-hover:text-[var(--royalblue)] text-[30px] leading-tight'>save</span>
                                    <span className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-[100px] max-md:text-[70px] leading-none my-2'>20% OFF</span>
                                    <span className='capitalize group-hover:text-[var(--royalblue)] text-[30px] leading-tight'>in fashion</span>
                                </div>
                            </div>

                            <span className='font-light text-gray-700 text-[16px]'>Use the discount code</span>


                        </div>

                        <div className="w-[40%] max-md:w-[50%] overflow-hidden absolute left-[50%] -top-10 max-md:h-full ">
                            <img src={grayCoat} alt="" className='' />
                        </div>


                    </div>
                </div>
            </section>

            {/* horizontal scroll of products*/}
            <section className='py-[70px]'>
                <div className="container">
                    <div className="flex justify-between items-center gap-[10px] py-[20px]">
                        <h3 className='text-[25px] max-md:text-[16px]'>Popular products</h3>
                        <Link to='' className='flex justify-center items-center font-light w-fit whitespace-nowrap border-[0.1px] outline-none py-[15px] px-[25px] max-md:py-[8px] max-md:px-[12px] rounded-[25px] text-sm max-md:text-[10px] transition duration-500 ease border-gray-200 hover:border-[var(--royalblue)] hover:-translate-y-1 hover:text-[var(--royalblue)] cursor-pointer'>Explore popular products</Link>
                    </div>

                    {/* latest products (mapping the product) */}

                    <div className="w-full overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex items-stretch gap-[40px] py-[10px]">

                            {products.map((product) => (
                                <div key={product.id} data-id={product.id} className="min-w-[25%] max-w-[25%] max-md:min-w-[60%] max-md:max-w-[60%] pb-[30px]  group cursor-pointer flex flex-col overflow-hidden rounded-[20px] border-[0.1px] border-gray-100 h-auto transition-transform duration-300 hover:-translate-y-1 relative">
                                    <div className="w-full h-[60%] overflow-hidden">
                                        <img src={product.image} alt="" className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 relative' />
                                    </div>
                                    <button onClick={() => handleAddToCart(product)} className='absolute right-4 mt-[15px] flex items-center capitalize  w-fit border-[0.1px] border-gray-300 outline-none py-[10px] px-[15px] bg-[var(--white)] rounded-[25px] text-xs'>add to cart</button>

                                    <div className='flex flex-col gap-[5px] mt-[20px] px-[30px]'>
                                        <h3 className='font-semibold text-[18px] max-md:text-[16px] capitalize group-hover:text-[var(--royalblue)]'>{product.name}</h3>
                                        <span className='font-light text-gray-500 text-[16px] max-md:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui qu</span>

                                        <button onClick={() => handleAddToCart(product)} className='mt-[15px] flex items-center capitalize text-white w-fit border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[15px] px-[18px] rounded-[25px] text-xs transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)]'>add to cart</button>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>


                </div>
            </section>


            <section className="py-[40px] max-md:w-full">
                <div className="container flex pb-[100px] border-b-[0.1px] border-gray-300 max-md:w-full">
                    <div className="mx-auto flex flex-col gap-[40px] items-center">
                        <h3 className='text-[25px] max-md:text-[22px]'>Top categories this month</h3>
                        <div className="flex gap-[50px] justify-between items-center max-md:w-full">
                            <div className="flex flex-col gap-[10px] items-center group cursor-pointer max-md:w-[33%]">
                                <div className="overflow-hidden w-[120px] h-[120px] max-md:w-full max-md:h-[33%] rounded-full transition-transform duration-300 group-hover:scale-105">
                                    <img src={sneakers} alt="" className='w-full h-full object-cover' />
                                </div>
                                <Link className='font-semibold text-[18px] max-md:text-[14px] capitalize group-hover:text-[var(--royalblue)] transition duration-300 max-w-[120px] text-center'>Fashion</Link>
                            </div>

                            <div className="flex flex-col gap-[10px] items-center group cursor-pointer max-md:w-[33%]">
                                <div className="overflow-hidden w-[120px] h-[120px] max-md:w-full max-md:h-[33%] rounded-full transition-transform duration-300 group-hover:scale-105">
                                    <img src={wallClock} alt="" className='w-full h-full object-cover' />
                                </div>
                                <Link className='font-semibold text-[18px] max-md:text-[14px] capitalize group-hover:text-[var(--royalblue)] transition duration-300 max-w-[120px] text-center'>Decoration</Link>
                            </div>

                            <div className="flex flex-col gap-[10px] items-center group cursor-pointer max-md:w-[33%]">
                                <div className="overflow-hidden w-[120px] h-[120px] max-md:w-full max-md:h-[33%] rounded-full transition-transform duration-300 group-hover:scale-105">
                                    <img src={ceramicVase} alt="" className='w-full h-full object-cover' />
                                </div>
                                <Link className='font-semibold text-[18px] max-md:text-[14px] capitalize group-hover:text-[var(--royalblue)] transition duration-300 max-w-[120px] text-center'>Garden</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[100px]">
                <div className="container">
                    <div className="grid grid-cols-3 gap-[40px] max-md:grid-cols-1 ">
                        {/* each table*/}

                        <div className="flex flex-col gap-[40px] max-md:w-full">
                            <h3 className='text-[25px] max-md:text-[22px]'>Popular products</h3>
                            <div className="flex flex-col gap-[20px]">

                                {/* each product */}
                                <div data-id='11-inch-indoor-plant' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={indoorPlant11} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>11-Inch indoor plant</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 16.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 19.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div data-id='vintage-wall-decor' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={wallDecor} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>vintage wall decor</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div data-id='dinnerware-sets' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={dinnerWareSets} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>dinnerware sets</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[40px] max-md:w-full">
                            <h3 className='text-[25px] max-md:text-[22px]'>Top rated products</h3>
                            <div className="flex flex-col gap-[20px]">

                                {/* each product */}
                                <div data-id='solid-wood-wall-clock' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={wallClock} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>solid wood wall clock</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div data-id='ceramic-flower-vases' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={ceramicVase} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>Ceramic Flower vases</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 19.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 21.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div data-id='12-inch-natural-plant' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={naturalPlant} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>12-Inch natural plant</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 29.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 39.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[40px] max-md:w-full">
                            <h3 className='text-[25px] max-md:text-[22px]'>Top selling products</h3>
                            <div className="flex flex-col gap-[20px]">

                                {/* each product */}
                                <div data-id='basic-gray-tshirt' className="flex gap-[15px] items-center group cursor-pointer">
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

                                <div data-id='white-sneakers' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={sneakers} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>white sneakers</h3>
                                            <div className="flex gap-[15px]">
                                                <span className="text-[16px] text-gray-600 capitalize">$ 49.99 USD</span>
                                                <del className="text-[16px] text-gray-400 capitalize font-semibold">$ 99.99 USD</del>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div data-id='pink-sweater' className="flex gap-[15px] items-center group cursor-pointer">
                                    <div className="w-[100px] h-[100px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={pinkSweater} alt="" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-col gap-[5px]">
                                            <h3 className='font-semibold capitalize group-hover:text-[var(--royalblue)] text-lg transition-colors duration-300'>pink sweater</h3>
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

            <section className='bg-gray-50 py-[80px] max-md:py-[40px]'>
                <div className="container flex">
                    <div className="mx-auto flex p-[50px] max-md:p-[20px] justify-evenly gap-[30px] max-md:gap-[10px] border-[0.1px] border-gray-200 bg-[var(--white)] rounded-[10px] max-md:w-full max-md:flex-col">

                        {/* each icon*/}
                        <div className="px-[20px] border-r border-r-[0.10px] border-gray-300 max-md:border-none flex items-center gap-[15px]">
                            <Van className='text-[var(--royalblue)]' size={50} />
                            <div className="flex flex-col">
                                <span className="text-[16px] text-gray-600 capitalize">Free shiping</span>
                                <span className="text-[12px] text-gray-400 font-light">on all orders over $99 USD</span>
                            </div>
                        </div>

                        <div className="px-[20px] border-r border-r-[0.10px] border-gray-300 max-md:border-none flex items-center gap-[15px]">
                            <Van className='text-[var(--royalblue)]' size={50} />
                            <div className="flex flex-col">
                                <span className="text-[16px] text-gray-600 capitalize">Free shiping</span>
                                <span className="text-[12px] text-gray-400 font-light">on all orders over $99 USD</span>
                            </div>
                        </div>

                        <div className="px-[20px] flex items-center gap-[15px]">
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