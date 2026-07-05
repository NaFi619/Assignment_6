import NavBar from '../NavBar/NavBar'; 

const CartPage = ({ cart, onRemoveFromCart, onClose }) => {
  
  const totalPrice = cart.reduce((sum, item) => {
    return sum + parseFloat(item.price.replace('$', ''));
  }, 0);

  const iconMap = { 
    1: "📄", 2: "🎨", 3: "🖼️", 4: "⚙️", 5: "📝", 6: "📱",
    7: "🔍", 8: "🎬", 9: "🖌️", 10: "☁️", 11: "📧", 12: "📊",
    13: "🤖", 14: "🌐", 15: "📈", 16: "🛒", 17: "🎙️", 18: "🔒",
    19: "📑", 20: "💬" 
  };

  return (
    <div className="min-h-screen bg-white pb-20 px-4 relative">
      
     
      <NavBar cart={cart} onOpenCart={onClose} />

      
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-3xl text-gray-800 hover:text-gray-600 z-50"
      >
        &times;
      </button>

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>
        
        {cart.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Your cart is currently empty.</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-sm border border-gray-100">
                      {iconMap[item.id]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-pink-500 text-sm font-semibold hover:text-pink-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 text-lg">Total:</span>
                <span className="text-3xl font-bold text-gray-900">${totalPrice}</span>
              </div>
              <button className="w-full bg-purple-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/30">
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;