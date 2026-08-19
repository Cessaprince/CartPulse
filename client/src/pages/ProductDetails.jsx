import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import products from '../data/product.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { productId } = useParams();

  const product = products.find(p => p.id === productId);

  /* only adds to cart if someone is logged in, otherwise toasts them instead of silently doing nothing */
  const handleAddToCart = (item) => {
    if (!user) {
      iziToast.warning({
        title: 'Please log in',
        message: 'You need to be logged in to add items to your cart.',
        position: 'topCenter',
      });
      return;
    }

    addToCart(item);

    iziToast.success({
      title: 'Added to cart!',
      message: `${item.name} was added to your cart.`,
      position: 'topRight',
      timeout: 2000,
    });
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <Nav />
      {/* grey link stuff */}
      <section className='bg-gray-100 py-[22px]'>
        <div className="container">
          <div className="flex gap-[7px] items-center">
            <NavLink to='/'
              className={
                ({ isActive }) =>
                  `capitalize text-sm transition duration-300 ease-in-out ${isActive ? 'text-[var(--royalblue)]' : ' text-gray-500 hover:text-[var(--royalblue)]'}`
              }>              home
            </NavLink>

            <span className='text-gray-500'>/</span>

            <NavLink to='#'
              className={
                ({ isActive }) =>
                  `capitalize text-sm transition duration-300 ease-in-out ${isActive ? 'text-[var(--royalblue)]' : ' text-gray-500 hover:text-[var(--royalblue)]'}`
              }>
              shop
            </NavLink>

            <span className='text-gray-500'>/</span>

            <NavLink to={`/shop/product/${product.id}`} className={
              ({ isActive }) =>
                `capitalize text-sm transition duration-300 ease-in-out ${isActive ? 'text-[var(--royalblue)]' : ' text-gray-500 hover:text-[var(--royalblue)]'}`
            }>
              {product.name}
            </NavLink>

          </div>
        </div>
      </section>

      {/* product details section*/}
      <section className="py-[30px]">
        <div className="container">
          <div className="flex max-md:flex-col justify-center items-start h-auto gap-[30px]">
            {/* product image */}
            <div className="w-[60%] max-md:w-full h-[500px] rounded-[15px] overflow-hidden">
              <img src={product.image} alt="" className='object-cover w-full h-full' />
            </div>

            {/* product details*/}
            <div className="flex flex-1 flex-col gap-[20px] p-[30px] border-[0.1px] rounded-[15px] h-auto border-gray-400">
              <span className="w-fit px-[12px] py-[5px] bg-[var(--royalblue)] text-white text-sm font-light capitalize rounded-[15px]">
                hot
              </span>

              {/* box with description*/}
              <div className="flex flex-col gap-[7px] pb-[30px] border-b-[0.1px] border-b-gray-400">
                <h3 className="text-[22px] font-semibold capitalize">{product.name}</h3>
                <span className="text-gray-500 text-[13px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quidem molestias ad asperiores error enim pariatur deserunt impedit molestiae velit!
                </span>
                <del className='text-gray-500 text-[16px]'>$ {product.originalPrice}</del>
                <span className='text-[22px] font-semibold'>$ {product.price}</span>
              </div>

              {/* box with something shared amongst all*/}
              <div className="flex flex-col gap-[7px] pb-[30px] border-b-[0.1px] border-b-gray-400 capitalize">
                <h3 className="text-[16px] font-semibold">product details</h3>
                <div className="flex flex-col gap-[5px]">
                  <div className="flex items-center gap-[5px]">
                    <span className="text-[14px] font-semibold">category:</span>
                    <span className='text-gray-500 text-[14px]'>{product.category}</span>
                  </div>

                  <div className="flex items-center gap-[5px]">
                    <span className="text-[14px] font-semibold">model name:</span>
                    <span className='text-gray-500 text-[14px]'>{product.name}</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                className='capitalize text-white text-[16px] font-semibold w-full py-[10px] px-[20px] bg-[var(--royalblue)] hover:bg-[var(--royalblue-hover)] transition-all duration-300 ease-in-out hover:-translate-y-1 rounded-[25px] cursor-pointer'>add to cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* product information section*/}
      <section className="py-[70px]">
        <div className="container pb-[60px] border-b-[0.1px] border-b-gray-400 ">
          <div className="flex max-md:w-full flex-col gap-[50px] w-[60%]">
            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[30px] capitalize">product information</h3>
              <span className="text-gray-500 text-[16px] leading-[25px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae quidem qui deserunt et animi aspernatur blanditiis fugit nulla praesentium, temporibus rerum, ipsa dolor ex reiciendis itaque vero ratione corporis.
              </span>

              <span className="text-gray-500 text-[16px] leading-[25px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae quidem qui deserunt et animi aspernatur blanditiis fugit nulla praesentium, temporibus rerum, ipsa dolor ex reiciendis itaque vero ratione corporis.
              </span>

              <div className="pl-[20px] text-gray-500 text-[16px] leading-[30px]">
                <ol className="list-decimal list-inside">
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, qui?</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, qui?</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, qui?</li>
                </ol>
              </div>

              <span className="text-gray-500 text-[16px] leading-[25px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae quidem qui deserunt et animi aspernatur blanditiis fugit nulla praesentium, temporibus rerum,
              </span>
            </div>

            <div className="flex flex-col gap-[15px]">
              <h3 className="text-[30px] capitalize">shipping information</h3>
              <span className="text-gray-500 text-[16px] leading-[25px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae quidem qui deserunt et animi aspernatur blanditiis fugit nulla praesentium, temporibus rerum, ipsa dolor ex reiciendis itaque vero ratione corporis.
              </span>

              <span className="text-gray-500 text-[16px] leading-[25px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae quidem qui deserunt et animi aspernatur blanditiis fugit nulla praesentium, temporibus rerum, ipsa dolor ex reiciendis itaque vero ratione corporis.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProductDetails