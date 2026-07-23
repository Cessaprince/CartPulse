import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Phone, Mail, ShoppingBag, Search, Handbag, ChevronDown, ChevronRight, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <div className=''>
      <section className='bg-[var(--navyblue-grayish)] py-[15px]'>

        {/* the short container */}
        <div className="container">

          <div className='flex justify-between items-center text-[var(--white)] text-[13px]' >

            {/* email and tel line */}

            <div className='flex gap-[20px] items-center'>
              <div>
                <a href="tel:+14145800473" className='flex  gap-[10px] hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                  <span><Phone size={[20]} /></span>
                  <span>Support: +1 (414) 580 - 0473</span>
                </a>
              </div>

              <span>|</span>

              <div>
                <a href="mailto:help@cartpulse.com" className='flex items-center gap-[10px] hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                  <span><Mail size={[20]} /></span>
                  <span>Email us: help@storewave.com</span>
                </a>
              </div>
            </div>

            {/* quick links */}

            <div className='flex items-center gap-[10px] '>
              <a href="" className='hover:text-[var(--royalblue)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95'>
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="" className='hover:text-[var(--royalblue)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95'>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="" className='hover:text-[var(--royalblue)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95'>
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="" className='hover:text-[var(--royalblue)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a href="" className='hover:text-[var(--royalblue)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95'>
                <FontAwesomeIcon icon={['fab', 'youtube']} />

              </a>

              <a href="" className='hover:text-[var(--royalblue)] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95'>
                <FontAwesomeIcon icon={['fab', 'whatsapp']} />
              </a>

            </div>
          </div>
        </div>

      </section>

      <section className="w-full bg-[var(--navyblue)] pt-[35px] pb-[15px] h-auto">
        <div className="container">
          <div className="flex justify-between items-center gap-[20px]">
            {/* CartPulse logo */}
            <div className='flex gap-[5px] items-center'>
              <ShoppingBag className='text-[var(--royalblue)]' />
              <span className='text-white text-[22px] font-semi-bold'>CartPulse</span>
            </div>

            {/* search bar */}
            <form className='flex justify-between items-center px-[5px] py-[9px] bg-[var(--white)] rounded-[25px] border-[1px] hover:border-[var(--royalblue)] w-[500px]'>
              <input type="search" name="" id="" placeholder='Search...' className='[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none outline-none text-xs text-gray-600 w-[80%] px-[15px]' />
              <button type='submit' className='rounded-full bg-[var(--royalblue)] flex items-center justify-center h-[30px] w-[30px] p-[2px] transition-transform duration-300 ease-in-out hover:scale-95 hover:bg-[var(--royalblue-hover)] hover:cursor-pointer'>
                <Search size={[15]} className='text-[var(--white)]' />
              </button>
            </form>

            {/* Cart Link */}
            <Link className='flex items-center gap-[7px] group'>
              <span className="h-[25px] w-[25px] rounded-full bg-[var(--royalblue)] p-[5px] flex items-center justify-center text-[var(--white)] group-hover:text-gray-200 group-hover:bg-[var(--royalblue-hover)]">1</span>
              <Handbag className='text-[var(--white)] group-hover:text-gray-200' size={[40]} />
              <div className='flex flex-col ml-[4px]'>
                <span className="text-[var(--white)] group-hover:text-gray-200 font-light text-sm">Your Cart</span>
                <span className="text-[var(--white)] group-hover:text-gray-200 font-bold text-sm">$ 39.99 USD</span>
              </div>
            </Link>

          </div>

          {/* nav */}
          <nav className='mx-auto mt-5 max-w-[550px] flex flex-col'>

            <div className="w-full flex items-center justify-between py-2">
              <Link to='/' className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                home
              </Link>

              <Link to='/shop' className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                products
              </Link>

              <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out group flex items-center'>
                <span>categories</span>
                <ChevronDown size={16} />
              </Link>

              <Link to='/contact-us' className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                contact
              </Link>

              <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                blog
              </Link>

              <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out group flex items-center'>
                <span>join us</span>
                <ChevronDown size={16} />
              </Link>

              {/* change join us to account after authentication*/}
              <Link className='hidden capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out group flex items-center'>
                <span>account</span>
                <ChevronDown size={16} />
              </Link>
            </div>

          </nav>

        </div>
      </section>
      {/* Dropdown content when hovering categories */}

      <section className="hidden bg-[var(--navyblue)]">
        <div className="container">
          <div className='w-full grid grid-cols-3 gap-[35px] pt-[30px] pb-[50px] px-[30px]'>

            {/* 1*/}
            <div className='flex flex-col gap-[5px] text-xs'>
              <h3 className='text-white font-bold py-[15px] border-b-[0.1px] border-white'>Products by category</h3>

              {/* categories 1*/}
              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

            </div>

            {/* 2*/}
            <div className='flex flex-col gap-[5px] text-xs'>
              <h3 className='text-white font-bold py-[15px] border-b-[0.1px] border-white'>Products by category</h3>

              {/* categories 3*/}
              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>


            </div>

            {/* 3*/}
            <div className='flex flex-col gap-[5px] text-xs'>
              <h3 className='text-white font-bold py-[15px] border-b-[0.1px] border-white'>Products by category</h3>

              {/* products 3*/}
              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

              <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                <div className='flex items-center gap-[5px]'>
                  <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                  <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                    fashion
                  </span>
                </div>

                <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* Dropdown content when hovering Join Us*/}

      <section className="hidden bg-[var(--navyblue)]">
        <div className="container flex justify-center">
          <div className='w-[50%] flex flex-col gap-[10px] pt-[30px] pb-[50px] px-[30px] text-sm'>
            <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

              <div className='flex items-center gap-[5px]'>
                <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                  login
                </span>
              </div>

              <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

            </Link>
            <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

              <div className='flex items-center gap-[5px]'>
                <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                  signup
                </span>
              </div>

              <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

            </Link>
          </div>
        </div>
      </section>


      {/* Dropdown content when hovering Join Us as account*/}
      <section className="hidden bg-[var(--navyblue)]">
        <div className="container flex justify-center">
          <div className='w-[50%] flex flex-col gap-[10px] pt-[30px] pb-[50px] px-[30px] text-sm'>
            <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

              <div className='flex items-center gap-[5px]'>
                <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                  cart
                </span>
              </div>

              <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

            </Link>
            <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

              <div className='flex items-center gap-[5px]'>
                <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                  logout
                </span>
              </div>

              <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

            </Link>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Nav