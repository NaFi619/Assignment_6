const cart = () => {
    return(
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
        
    </>

    )
}
export default cart