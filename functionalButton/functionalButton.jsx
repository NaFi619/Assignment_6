import cardInfo from "../CardsJson/cards.json";

const functionalButton = () => {
  return (
    <>    
      
      <div className="functionalButton flex justify-center items-center pt-20 px-72 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-extrabold text-center text-black">Premium Digital Tools</h1>
          <p className="text-center mt-4 text-[#627382] text-base">
            Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
          </p>
        </div>
      </div>

      
      <div className="flex justify-center pt-5">
        <div className="inline-flex items-center p-1.5 bg-white border border-gray-100 rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <button className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 rounded-full shadow-md shadow-purple-500/20 transition-all hover:opacity-90">
            Products
          </button>
          <button className="px-8 py-3 text-base font-medium text-slate-800 bg-transparent rounded-full transition-colors hover:bg-slate-50">
            Cart (2)
          </button>
        </div>
      </div>

      {/* card section */}
      <div className="flex justify-center pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl px-4">
          
          
          {cardInfo.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              
              
              <div className="flex justify-between items-start">
                <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
                  {item.id === 1 && "📄"}
                  {item.id === 2 && "🎨"}
                  {item.id === 3 && "🖼️"}
                  {item.id === 4 && "⚙️"}
                  {item.id === 5 && "📝"}
                  {item.id === 6 && "📱"}
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              
              <h3 className="text-xl font-bold mt-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>

              
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                <span className="text-gray-500 text-sm">{item.billingPeriod}</span>
              </div>

              
              <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              
              <button className="w-full mt-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors">
                Buy Now
              </button>

            </div>
          ))}
          
        </div>
      </div>

    </>
  )
}

export default functionalButton;