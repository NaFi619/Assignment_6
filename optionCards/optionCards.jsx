import optionCardsjson from '../optionCardsJson/optionCardsjson.json';
import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const imageMap = {
  '../assets/user.png': userImg,
  '../assets/package.png': packageImg,
  '../assets/rocket.png': rocketImg,
};
const optionCards = () =>{
    return(
        <>
        <h1 className="text-5xl font-bold text-center text-black py-8">Get Started in 3 Steps</h1>
      <p className="text-center text-gray-600 py-3">Start using premium digital tools in minutes, not hours.</p>

     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto px-4 py-12 w-3/4 h-80 ">
        {optionCardsjson.map((item) => (
        <div key={item.id} className='card flex flex-col gap-4 justify-center items-center bg-white text-black'>
             
             <div className="absolute top-6 right-6 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
            {item.step}
            </div>



            <div className="bg-purple-100 p-4 rounded-full mb-6 my-10">
            <img 
              src={imageMap[item.icon]} 
              alt={item.title} 
              className="w-12 h-12 object-contain"
            />
          </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
           <p className="text-gray-500 text-sm leading-relaxed text-center pb-8">{item.id === 1 ? (
    <>
      <span>Sign up for free in seconds. No credit card</span>
      <br />
      <span>required to get started.</span>
    </>
  ) : item.id === 2 ? (
    <>
      <span>Browse our catalog and select the tools</span>
      <br />
      <span>that fit your needs.</span>
    </>
  ) : (
    <>
      <span>Download and start using your premium</span>
      <br />
      <span>tools immediately.</span>
    </>
  )}</p>


          
        </div>


        ))}
        
    </div>




        </>
    )
}
export default optionCards