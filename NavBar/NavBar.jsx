import { ShoppingCart } from 'lucide-react';

const NavBar = ({ cart, onOpenCart }) => {
  return (
    <>    
      <div className="navbar bg-base-100 shadow-sm px-28 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
            <a className="text-3xl font-bold text-violet-600">DigiTools</a>
          </div>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-4">
          {/* 2. Cart Button with badge */}
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            
            {/* Red Badge */}
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cart.length}
              </span>
            )}
          </button>

          <a className="text-gray-700 font-medium">Login</a>
          <a className="btn bg-violet-700 text-white hover:bg-violet-800 active:bg-violet-900 rounded-3xl">Get Started</a>
        </div>
      </div>
    </>
  )
}

export default NavBar;