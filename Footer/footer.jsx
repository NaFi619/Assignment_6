const Footer = () => {
  return (
    <>

<footer className="bg-[#101727] text-white ">

  <div className="mx-auto px-60 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
  <nav className="flex flex-col gap-3 lg:col-span-1">
    <h6 className="footer-title text-3xl font-bold text-white">DigiTools</h6>
    <p className="text-sm text-gray-400">Premium digital tools for creators,<br /> professionals, and businesses. Work smarter<br /> with our suite of powerful tools.</p>
  </nav>
  <nav className="flex flex-col gap-3">
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav className="flex flex-col gap-3">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About </a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav className="flex flex-col gap-3">
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <div className="flex flex-col gap-3">
          <h6 className="footer-title text-gray-400 text-sm font-bold ">Social Links</h6>
          <div className="flex gap-4">
            <a className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center w-10 h-10">
              <img src="../assets/Instagram.png" alt="instagram" className="w-5 h-5" />
            </a>
            <a className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center w-10 h-10">
              <img src="../assets/Facebook.png" alt="facebook" className="w-5 h-5" />
            </a>
            <a className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center w-10 h-10">
              <img src="../assets/fi_5968958.png" alt="twitter" className="w-5 h-5" />
            </a>
          </div>
    </div>

  </div>


   <div className="container mx-auto px-10 py-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <div>
          © 2026 Digitools. All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a className="link link-hover hover:text-white">Privacy policy</a>
          <a className="link link-hover hover:text-white">Terms of Service</a>
          <a className="link link-hover hover:text-white">Cookies</a>
        </div>
      </div>
</footer>

    </>
  )
}
export default Footer