import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Notebook, SearchCodeIcon, SearchIcon } from 'lucide-react'
import blogCloth from '../images/page-images/blog-cloth.jpg'
import blogBed from '../images/page-images/bedBlogImg.jpg'
import { Link } from 'react-router-dom'
import fb from '../images/page-images/fb-logo.svg'
import twitter from '../images/page-images/twitter-logo.svg'
import ig from '../images/page-images/ig-logo.png'
import linkedin from '../images/page-images/linkedin-logo.svg'
import youtube from '../images/page-images/youtube-logo.svg'
import pinterest from '../images/page-images/pinterest.svg'

const Blog = () => {
    return (
        <div>
            <Nav />

            {/*blog body*/}
            <section className='pt-[50px] pb-[150px] max-md:pb-[100px] bg-gray-50'>

                <div className="container">

                    <div className="w-full flex justify-between items-center py-[30px] max-md:flex-col max-md:gap-[10px]">
                        <h3 className='capitalize text-[45px] max-md:text-[30px]'>our blog</h3>

                        {/* search button */}
                        <form action="" className='flex justify-between items-center w-[40%] max-md:w-full group py-[12px] max-md:py-[7px] px-[25px] border-[0.1px] border-gray-300 shadow-md rounded-[45px] hover:border-black transition-all duration-300 ease'>
                            <div className="flex gap-[10px] items-center">
                                <SearchIcon className='text-gray-500' />
                                <input placeholder='Search on blog...' type="search" name="" id="" className='text-gray-600 text-sm [&::-webkit-search-cancel-button]:appearance-none outline-none w-full ' />
                            </div>

                            <div className="">
                                <button type='submit' className='py-[12px] max-md:py-[10px] px-[20px] text-white text-sm font-bold bg-[var(--royalblue)] rounded-[25px] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[var(--royalblue-hover)]'>Search</button>
                            </div>
                        </form>

                    </div>

                    {/* cloth area*/}
                    <div className="w-full flex items-center gap-[40px] relative py-[30px] max-md:flex-col max-md:gap-[100px]">
                        {/* left side */}

                        <div className="flex flex-col w-[50%] relative group cursor-pointer max-md:w-full">
                            <div className='relative h-[550px] overflow-hidden rounded-[15px] '>
                                <img src={blogCloth} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                            </div>

                            <div className="absolute bottom-[-70px] shadow-sm left-[50px] max-md:left-1/2 max-md:-translate-x-1/2 bg-white border-[0.1px] border-gray-200 flex flex-col gap-[7px] p-[35px] w-[85%] h-auto rounded-[15px] group-hover:-translate-y-2 transition duration-300 ease-in-out">
                                <div className='inline-flex justify-between w-[30%] max-md:w-[60%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                    <span>tips</span>
                                    <span>—</span>
                                    <span>aug 16, 2022</span>
                                </div>
                                <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>How to choose the perfect sweater for this fall 2022</Link>

                                <span className="text-gray-500 leading-[25px] max-md:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quis libero aut consequuntur,</span>
                            </div>
                        </div>


                        {/* right side */}

                        <div className="flex-1 flex flex-col gap-[20px] max-md:w-full">

                            {/* each image*/}

                            {/* image1*/}
                            <div className="flex gap-[25px] items-center group cursor-pointer">
                                <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                    <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                </div>

                                <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                    <div className='inline-flex justify-between w-[50%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                        <span>tips</span>
                                        <span>—</span>
                                        <span>aug 16, 2022</span>
                                    </div>
                                    <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                </div>
                            </div>

                            {/* image2*/}
                            <div className="flex gap-[25px] items-center group cursor-pointer">
                                <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                    <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                </div>

                                <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                    <div className='inline-flex justify-between w-[50%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                        <span>tips</span>
                                        <span>—</span>
                                        <span>aug 16, 2022</span>
                                    </div>
                                    <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                </div>
                            </div>

                            {/* image3*/}
                            <div className="flex gap-[25px] items-center group cursor-pointer">
                                <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                    <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                </div>

                                <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                    <div className='inline-flex justify-between w-[50%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                        <span>tips</span>
                                        <span>—</span>
                                        <span>aug 16, 2022</span>
                                    </div>
                                    <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>


            <section className='py-[100px] max-md:py-[30px]'>
                <div className="container border-b-[0.1px] border-gray-200 py-[100px]">

                    <div className="w-full flex gap-[150px] items-stretch max-md:flex-col">
                        {/* left */}
                        <div className="flex flex-col gap-[30px] w-[50%] max-md:w-full">
                            <h3 className='capitalize text-[30px] max-md:text-[24px]'>latest post</h3>

                            <div className="flex flex-col gap-[30px]">
                                {/* image1*/}
                                <div className="flex gap-[25px] items-center group cursor-pointer">
                                    <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <div className='inline-flex justify-between w-[50%] max-md:w-[60%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                            <span>tips</span>
                                            <span>—</span>
                                            <span>aug 16, 2022</span>
                                        </div>
                                        <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>

                                {/* image2*/}
                                <div className="flex gap-[25px] items-center group cursor-pointer">
                                    <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <div className='inline-flex justify-between w-[50%] max-md:w-[60%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                            <span>tips</span>
                                            <span>—</span>
                                            <span>aug 16, 2022</span>
                                        </div>
                                        <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>

                                {/* image3*/}
                                <div className="flex gap-[25px] items-center group cursor-pointer">
                                    <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <div className='inline-flex justify-between w-[50%] max-md:w-[60%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                            <span>tips</span>
                                            <span>—</span>
                                            <span>aug 16, 2022</span>
                                        </div>
                                        <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>

                                {/* image4*/}
                                <div className="flex gap-[25px] items-center group cursor-pointer">
                                    <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <div className='inline-flex justify-between w-[50%] max-md:w-[60%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                            <span>tips</span>
                                            <span>—</span>
                                            <span>aug 16, 2022</span>
                                        </div>
                                        <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>

                                {/* image5*/}
                                <div className="flex gap-[25px] items-center group cursor-pointer">
                                    <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <div className='inline-flex justify-between w-[50%] max-md:w-[60%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                            <span>tips</span>
                                            <span>—</span>
                                            <span>aug 16, 2022</span>
                                        </div>
                                        <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>

                                {/* image6*/}
                                <div className="flex gap-[25px] items-center group cursor-pointer">
                                    <div className="w-[200px] h-[150px] rounded-[15px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <div className='inline-flex justify-between w-[50%] max-md:w-[60%] capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>
                                            <span>tips</span>
                                            <span>—</span>
                                            <span>aug 16, 2022</span>
                                        </div>
                                        <Link to='//' className='text-[22px] max-md:text-[18px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* right */}
                        <div className="flex-1 flex flex-col gap-[35px]">
                            <div className="p-[30px] h-auto w-full flex flex-col gap-[20px] border-[0.1px] shadow-md border-gray-100 rounded-[10px]">
                                <h3 className='capitalize text-[18px] font-bold'>category</h3>

                                <div className="w-full inline-flex gap-[80px]">
                                    <span className='items-center flex gap-[5px] group'>
                                        <Notebook className='text-[var(--royalblue)]' size={27} />
                                        <Link to='//' className='capitalize text-[14px] group-hover:text-[var(--royalblue)] group-hover:translate-x-1 transition duration-300 ease'>articles</Link>
                                    </span>

                                    <span className='items-center flex gap-[5px] group'>
                                        <Notebook className='text-[var(--royalblue)]' size={27} />
                                        <Link to='//' className='capitalize text-[14px] group-hover:text-[var(--royalblue)] group-hover:translate-x-1 transition duration-300 ease'>articles</Link>
                                    </span>
                                </div>

                                <div className="w-full inline-flex gap-[80px]">
                                    <span className='items-center flex gap-[5px] group'>
                                        <Notebook className='text-[var(--royalblue)]' size={27} />
                                        <Link to='//' className='capitalize text-[14px] group-hover:text-[var(--royalblue)] group-hover:translate-x-1 transition duration-300 ease'>articles</Link>
                                    </span>

                                    <span className='items-center flex gap-[5px] group'>
                                        <Notebook className='text-[var(--royalblue)]' size={27} />
                                        <Link to='//' className='capitalize text-[14px] group-hover:text-[var(--royalblue)] group-hover:translate-x-1 transition duration-300 ease'>articles</Link>
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[18px] shadow-md border-[0.1px] border-gray-100 rounded-[15px] h-auto w-full p-[30px]">
                                <h3 className='capitalize text-[18px] font-bold'>recent post</h3>

                                {/* each img*/}
                                {/* img 1*/}
                                <div className="flex gap-[20px] items-center group cursor-pointer w-full">
                                    <div className="w-[120px] h-[80px] rounded-[5px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <span className='capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>aug 16, 2022</span>

                                        <Link to='//' className='text-[16px] max-md:text-[14px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>

                                {/* img 2*/}
                                <div className="flex gap-[20px] items-center group cursor-pointer w-full">
                                    <div className="w-[120px] h-[80px] rounded-[5px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <span className='capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>aug 16, 2022</span>

                                        <Link to='//' className='text-[16px] max-md:text-[14px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>

                                {/* img 3*/}
                                <div className="flex gap-[20px] items-center group cursor-pointer w-full">
                                    <div className="w-[120px] h-[80px] rounded-[5px] overflow-hidden">
                                        <img src={blogBed} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300 ease' />
                                    </div>

                                    <div className="flex flex-col gap-[7px] h-auto rounded-[15px] transition duration-300 ease-in-out">
                                        <span className='capitalize text-gray-400 font-light text-[15px] max-md:text-[13px]'>aug 16, 2022</span>

                                        <Link to='//' className='text-[16px] max-md:text-[14px] text-black group-hover:text-[var(--royalblue)] transition duration-300 ease'>Stylish furniture to redecor your bedroom on a budget</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[18px] shadow-md border-[0.1px] border-gray-100 rounded-[15px] h-auto w-full p-[30px]">
                                <h3 className='capitalize text-[18px] font-bold'>follow us</h3>
                                <div className="flex gap-[20px] items-center">
                                    <a href="https://facebook.com" className='group hover:-translate-y-1 transition duration-300 ease h-[30px] w-[30px] rounded-full overflow-hidden'>
                                        <img src={fb} alt="" className=' w-full h-full object-cover' />
                                    </a>
                                    <a href="https://facebook.com" className='group hover:-translate-y-1 transition duration-300 ease h-[30px] w-[30px] rounded-full overflow-hidden'>
                                        <img src={twitter} alt="" className=' w-full h-full object-cover' />
                                    </a>
                                    <a href="https://facebook.com" className='group hover:-translate-y-1 transition duration-300 ease h-[30px] w-[30px] rounded-full overflow-hidden'>
                                        <img src={ig} alt="" className=' w-full h-full object-cover' />
                                    </a>
                                    <a href="https://facebook.com" className='group hover:-translate-y-1 transition duration-300 ease h-[30px] w-[30px] rounded-full overflow-hidden'>
                                        <img src={linkedin} alt="" className=' w-full h-full object-cover' />
                                    </a>
                                    <a href="https://facebook.com" className='group hover:-translate-y-1 transition duration-300 ease h-[30px] w-[30px] rounded-full overflow-hidden'>
                                        <img src={youtube} alt="" className=' w-full h-full object-cover' />
                                    </a>
                                    <a href="https://facebook.com" className='group hover:-translate-y-1 transition duration-300 ease h-[30px] w-[30px] rounded-full overflow-hidden'>
                                        <img src={pinterest} alt="" className=' w-full h-full object-cover' />
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}

export default Blog