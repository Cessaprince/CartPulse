import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Phone, Mail, ShoppingBag, Search, Handbag, ChevronDown, ChevronRight, Shirt, Menu, X, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import sneakers from '../images/product-images/sneakers.png'



const Nav = () => {


  {/* for category dropdown display and close*/ }
  const [showCategories, setShowCategories] = useState(false);
  const categoriesTimeout = useRef(null);

  const openCategories = () => {
    clearTimeout(categoriesTimeout.current);
    setShowCategories(true);
  };

  const closeCategories = () => {
    categoriesTimeout.current = setTimeout(() => {
      setShowCategories(false);
    }, 50);
  };

  {/* for join Us display and close (when not authenticated)*/ }

  const [showJoinUs, setShowJoinUs] = useState(false);
  const joinUsTimeout = useRef(null); //stores Id for the timer

  const openJoinUs = () => {
    clearTimeout(joinUsTimeout.current); //pends any pending close timer and sets join us to true and reveals UI
    setShowJoinUs(true)
  }

  const closeJoinUs = () => {
    joinUsTimeout.current = setTimeout(
      () => { setShowJoinUs(false) },
      50)
    //updates .current property from null to active timer ID then sets join us to false and hides UI
  }

  {/* for the menu tag */ }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //for clicking the cart link
  const [isClicked, setIsClicked] = useState(false);


  //when the link is clicked, the useState will change
  const clickedCartLink = () => {
    setIsClicked(true)
  }
  const notClickedCartLink = () => {
    setIsClicked(false)
  }



  return (
    <div className='relative'>

      {/* top page description*/}
      <section className='bg-[var(--navyblue-grayish)] py-[15px] max-md:hidden'>

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

      {/* main nav bar with logo*/}
      <section className="w-full bg-[var(--navyblue)] pt-[35px] pb-[15px] h-auto">
        <div className="container">
          <div className="max-md:flex-wrap flex justify-between items-center gap-[20px]">
            {/* CartPulse logo */}
            <div className='max-md:order-1 flex gap-[5px] items-center'>
              <ShoppingBag className='text-[var(--royalblue)]' />
              <span className='text-white text-[22px] font-semi-bold'>CartPulse</span>
            </div>

            {/* search bar */}
            <form className='max-md:order-3 max-md:w-full flex justify-between items-center px-[5px] py-[9px] bg-[var(--white)] rounded-[25px] border-[1px] hover:border-[var(--royalblue)] w-[500px]'>
              <input type="search" name="" id="" placeholder='Search...' className='[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none outline-none text-xs text-gray-600 w-[80%] px-[15px]' />
              <button type='submit' className='rounded-full bg-[var(--royalblue)] flex items-center justify-center h-[30px] w-[30px] p-[2px] transition-transform duration-300 ease-in-out hover:scale-95 hover:bg-[var(--royalblue-hover)] hover:cursor-pointer'>
                <Search size={[15]} className='text-[var(--white)]' />
              </button>
            </form>

            {/* Cart Link */}
            <div className="max-md:order-2 flex gap-[7px] items-center">
              <Link
                className='flex items-center gap-[7px] group'
                onClick={clickedCartLink}
              >
                <span className="h-[25px] w-[25px] rounded-full bg-[var(--royalblue)] p-[5px] flex items-center justify-center text-[var(--white)] group-hover:text-gray-200 group-hover:bg-[var(--royalblue-hover)]">1</span>
                <Handbag className='text-[var(--white)] group-hover:text-gray-200 h-10 w-10 max-md:h-7 max-md:w-7' />
                <div className='max-md:hidden flex flex-col ml-[4px]'>
                  <span className="text-[var(--white)] group-hover:text-gray-200 font-light text-sm">Your Cart</span>
                  <span className="text-[var(--white)] group-hover:text-gray-200 font-bold text-sm">$ 39.99 USD</span>
                </div>
              </Link>

              {/* menu when in mobile or ipad view*/}
              <span
                className='lg:hidden flex justify-center items-center h-[40px] w-[40px] p-[3px] rounded-full bg-[var(--royalblue)] cursor-pointer'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className='font-bold text-white h-5 w-5' />
                ) : (
                  <Menu className='font-bold text-white h-5 w-5' />
                )}
              </span>
            </div>


          </div>

          {/* nav on desktop view*/}
          <nav className='max-md:hidden mx-auto mt-5 max-w-[550px] flex'>

            <div className="w-full flex items-center justify-between py-2">
              <Link to='/' className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                home
              </Link>

              <Link to='/shop' className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                products
              </Link>

              <Link
                className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out group flex items-center'
                onMouseEnter={openCategories}
                onMouseLeave={closeCategories}
              >
                <span>categories</span>
                {showCategories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}              </Link>

              <Link to='/contact-us' className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                contact
              </Link>

              <Link to='/blog' className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
                blog
              </Link>

              <Link className='capitalize text-[var(--white)] text-sm hover:text-[var(--royalblue)] transition duration-300 ease-in-out group flex items-center'
                onMouseEnter={openJoinUs}
                onMouseLeave={closeJoinUs}
              >
                <span>join us</span>
                {showJoinUs ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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

      {/* Mobile full-screen menu */}
      <section className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 right-0 z-50 bg-[var(--navyblue)] flex-col min-h-screen`}>        <div className="container">
        <nav className='flex flex-col gap-[25px] pt-[30px]'>
          <Link to='/' className='capitalize text-[var(--white)] text-lg hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
            home
          </Link>
          <Link to='/shop' className='capitalize text-[var(--white)] text-lg hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
            products
          </Link>
          <Link
            className='capitalize text-[var(--white)] text-lg hover:text-[var(--royalblue)] transition duration-300 ease-in-out flex items-center gap-[5px]'
            onClick={() => setShowCategories(!showCategories)}
          >
            categories
            {showCategories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Link>

          {/* mobile inline version of the categories dropdown links */}


          {showCategories && (
            <div className='w-full grid grid-cols-3 gap-[20px] py-[5px]'>

              {/* 1*/}
              <div className='flex flex-col gap-[2px] text-[10px]'>
                <h3 className='text-white font-bold py-[10px] border-b-[0.1px] border-white'>Products by category</h3>

                {/* categories 1*/}
                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

              </div>

              {/* 2*/}
              <div className='flex flex-col gap-[2px] text-[10px]'>
                <h3 className='text-white font-bold py-[10px] border-b-[0.1px] border-white'>Products by category</h3>

                {/* categories 1*/}
                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>


              </div>

              {/* 3*/}
              <div className='flex flex-col gap-[2px] text-[10px]'>
                <h3 className='text-white font-bold py-[10px] border-b-[0.1px] border-white'>Products by category</h3>

                {/* categories 1*/}
                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

                <Link className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

                  <div className='flex items-center gap-[5px]'>
                    <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={12} />

                    <span className='text-white py-[10px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                      fashion
                    </span>
                  </div>

                  <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' size={12} />

                </Link>

              </div>
            </div>
          )}

          <Link to='/contact-us' className='capitalize text-[var(--white)] text-lg hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
            contact
          </Link>
          <Link to='/blog' className='capitalize text-[var(--white)] text-lg hover:text-[var(--royalblue)] transition duration-300 ease-in-out'>
            blog
          </Link>

          <Link
            className='capitalize text-[var(--white)] text-lg hover:text-[var(--royalblue)] transition duration-300 ease-in-out flex items-center gap-[5px]'
            onClick={() => setShowJoinUs(!showJoinUs)}
          >
            join us
            {showJoinUs ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </Link>

          {/* mobile inline version of the join us dropdown links */}
          {showJoinUs && (
            <div className='w-full flex flex-col gap-[15px] text-white text-sm'>
              <Link to='/login' className='group flex items-center gap-[5px] hover:text-[var(--royalblue)] capitalize'>
                <Shirt size={16} className='text-[var(--royalblue)]' />
                login
              </Link>
              <Link to='/signup' className='group flex items-center gap-[5px] hover:text-[var(--royalblue)] capitalize'>
                <Shirt size={16} className='text-[var(--royalblue)]' />
                signup
              </Link>
            </div>
          )}
        </nav>
      </div>
      </section>


      {/* Dropdown content when hovering categories */}

      <section
        className={`${showCategories ? 'block' : 'hidden'} max-md:hidden bg-[var(--navyblue)]`}
        onMouseEnter={openCategories}
        onMouseLeave={closeCategories}
      >
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

      <section className={`${showJoinUs ? 'block' : 'hidden'} max-md:hidden bg-[var(--navyblue)]`}
        onMouseEnter={openJoinUs}
        onMouseLeave={closeJoinUs}
      >
        <div className="container flex justify-center">
          <div className='w-[50%] flex flex-col gap-[10px] pt-[30px] pb-[50px] px-[30px] text-sm'>
            <Link to='/login' className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

              <div className='flex items-center gap-[5px]'>
                <Shirt className='text-[var(--royalblue)] transition-colors duration-500 ease-in-out' size={18} />

                <span className='text-white py-[15px] capitalize group-hover:text-[var(--royalblue)] transition-colors duration-500 ease-in-out'>
                  login
                </span>
              </div>

              <ChevronRight className='text-white transition-all duration-500 ease-in-out group-hover:translate-x-[10px] group-hover:text-[var(--royalblue)] transition-all' />

            </Link>
            <Link to='/signup' className='group flex items-center justify-between border-b-[0.1px] border-white transition-colors duration-500 ease-in-out'>

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

      {/* Cart Modal */}
      {isClicked && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm px-[15px]'
          onClick={notClickedCartLink}
        >
          <div
            className='bg-[var(--white)] rounded-[15px] flex flex-col items-center w-full gap-[30px] max-w-[450px] shadow-lg h-auto overflow-hidden py-[10px]'
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center w-full border-b-[0.1px] border-gray-300 px-[25px] py-[10px]">
              <h3 className='text-lg font-semibold'>Your Cart</h3>
              <X size={22} className='hover:text-red-600 cursor-pointer text-gray-500' onClick={notClickedCartLink} />
            </div>

            {/* the div that will show when there is nothing in the cart*/}
            <div className="hidden flex flex-col justify-center items-center gap-[30px] py-[60px] px-[25px]">
              <p className='text-gray-400'>No items found.</p>
              <Link to='' className='capitalize px-[20px] py-[15px] bg-[var(--royalblue)] text-white text-sm rounded-[25px] hover:bg-[var(--royalblue-hover)] transition-all ease duration-300 hover:-translate-y-1'>start shopping</Link>
            </div>

            {/* the div that wil show when there is atleast one item in cart */}
            <div className="flex flex-col gap-[10px] w-full pb-[15px]">
              <div className="px-[25px] flex justify-between items-start w-full border-b-[0.1px] border-gray-300 px-[25px] pb-[30px]">
                {/* image and name*/}
                <div className="flex items-start gap-[15px]">
                  <div className="w-[100px] h-[100px] border-[0.1px] rounded-[15px] border-gray-500 overflow-hidden hover:border-[var(--royalblue)] hover:border-[1px] transition-colors ease-in-out cursor-pointer">
                    <img src={sneakers} alt="" />
                  </div>
                  {/* text */}
                  <div className="flex flex-col">
                    <h3 className='text-[16px] font-semibold capitalize'>vintage wall decor</h3>
                    <span className="text-sm text-gray-700">$ 82.00 USD</span>

                    <span className="text-[14px]">color: <span className="text-sm text-black">Wood</span>
                    </span>

                    <button className="text-sm text-[var(--royalblue)] mt-[10px] text-white bg-red-500 text-center py-[10px] px-[20px] rounded-[25px] w-fit hover:bg-red-700 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-300">Remove</button>
                  </div>
                </div>

                <div className="rounded-[25px] p-[3px] border-[0.1px] border-gray-500 w-[100px]">
                  <input type="number" name="" id="" defaultValue={1} className='w-full h-full outline-none px-[10px] py-[3px]' />
                </div>

              </div>

              <div className="flex justify-between items-center w-full px-[25px] py-[10px]">
                <h3 className="text-[16px] text-gray-500 capitalize">subtotal: </h3>
                <span className="text-[16px] font-semibold text-black">$ 82.00 USD</span>
              </div>
              <Link
                to='/checkout'
                className='w-[90%] self-center flex items-center justify-center capitalize text-white border-[0.1px] border-[var(--royalblue)] outline-none bg-[var(--royalblue)] py-[12px] rounded-[25px] text-sm transition duration-500 ease hover:-translate-y-1 cursor-pointer hover:bg-[var(--royalblue-hover)] font-semibold'
              >
                continue to checkout
              </Link>
            </div>


          </div>
        </div>
      )}

    </div>
  )
}

export default Nav