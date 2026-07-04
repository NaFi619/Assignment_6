import { useState } from 'react'; 

import Navbar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import ExtraPart from '../extraparts/extraParts'
import FunctionalButton from '../functionalButton/functionalButton'
import Footer from '../Footer/footer';
import Habijabi from '../habijabi/habijhabi';
import Pricing from '../Pricing/pricing';
import OptionCards from '../optionCards/optionCards';
import CartPage from '../cart/cart'; 

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]); 

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (!existingItem) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. PASS THE PROPS TO NAVBAR HERE */}
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      
      <Banner />
      <ExtraPart />
      
      <FunctionalButton 
        cart={cart} 
        onAddToCart={handleAddToCart} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <OptionCards />
      <Pricing />
      <Habijabi />
      <Footer />

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <CartPage 
            cart={cart} 
            onRemoveFromCart={handleRemoveFromCart} 
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      )}
    </div>
  )
}

export default App;