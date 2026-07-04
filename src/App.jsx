import  { useState } from 'react'; 

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
      setIsCartOpen(true); 
    }
  };

  
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Banner />
      <ExtraPart />
      
      {/* Pass the functions and cart state down to your Cards */}
      <FunctionalButton 
        cart={cart} 
        onAddToCart={handleAddToCart} 
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <OptionCards />
      <Pricing />
      <Habijabi />
      <Footer />

      {/* 4. Conditionally render the Cart page as an Overlay/Modal */}
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

export default App