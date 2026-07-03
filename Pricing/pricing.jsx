import PricingCard from "../pricingJson/pricing.json";
const pricing = () => {
  return (
    <div className=" py-16">
      <h1 className="text-5xl font-bold text-center text-black py-8">Simple, Transparent Pricing</h1>
      <p className="text-center text-gray-600 py-3">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>



      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
        
        {PricingCard.map((item) => (
          <div 
            key={item.id} 
            
            className={`relative rounded-2xl p-8 shadow-sm border flex flex-col ${
              item.isPopular 
                ? 'bg-[#8b36f9] text-white border-transparent transform scale-105 shadow-2xl' 
                : 'bg-white text-gray-900 border-gray-200' 
            }`}
          >
            
            
            {item.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffe9a6] text-[#8b36f9] text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                Most Popular
              </div>
            )}

           
            <div className="mb-6">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className={`mt-1 text-sm ${item.isPopular ? 'text-purple-200' : 'text-gray-500'}`}>
                {item.description}
              </p>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight">{item.price}</span>
                <span className={`ml-1 text-xl font-medium ${item.isPopular ? 'text-purple-200' : 'text-gray-500'}`}>
                  {item.billingPeriod}
                </span>
              </div>
            </div>

            
            <ul className="space-y-3 mb-8 flex-1">
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  
                  <svg className={`h-5 w-5 flex-shrink-0 mr-2 ${item.isPopular ? 'text-white' : 'text-green-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`text-sm ${item.isPopular ? 'text-purple-100' : 'text-gray-600'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            
            <button 
              className={`w-full py-3 px-4 rounded-full font-semibold transition-colors duration-200 ${
                item.isPopular 
                  ? 'bg-white text-[#8b36f9] hover:bg-gray-100' 
                  : 'bg-[#8b36f9] text-white hover:bg-[#722ad4]' 
              }`}
            >
              {item.buttonText}
            </button>

          </div>
        ))}
      </div>

    
      </div>

     

    
  )
}

export default pricing