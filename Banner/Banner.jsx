
import iconImg from '../assets/Group 5 (1).png';
import playImg from '../assets/Play.png';
import bannerImg from '../assets/banner.png';

const Banner = () => {
    return (
        <div className="banner flex justify-center items-center gap-30 py-20 ">
            <div>
                <div className="flex items-center gap-2 mb-4 bg-[#E0F2FF] w-max px-4 py-2 rounded-2xl text-violet-500">
                 
                   <img src={iconImg} alt="Icon" className="w-5 h-5 object-contain" />
                   <p>New: AI-Powered Tools Available</p>
                </div>
                <div>
                    <h1 className="text-6xl font-bold mb-4">Supercharge Your <br /> Digital Workflow</h1>
                </div>
                <div>
                    <p className="text-lg text-gray-500 mb-6">
                        Access premium AI tools, design assets, templates, and productivity<br />
                        software—all in one place. Start creating faster today.<br />
                        Explore Products
                    </p>
                </div>
                <div className="flex gap-4">
                    <a className="btn bg-violet-700 text-white hover:bg-violet-800 active:bg-violet-900 rounded-3xl p-5">Explore Products</a>

                    <div className="btn text-violet-700 hover:bg-violet-800 active:bg-violet-900 rounded-3xl p-5 flex items-center gap-2">
                        <img src={playImg} alt="Play Icon" className="w-5 h-5 object-contain" />
                        <a>Watch Demo</a>
                    </div>

                </div>
            </div>

            <div>
               
                <img src={bannerImg} alt="Banner" className="max-w-full h-auto object-contain" />
            </div>
        </div>
    );
};

export default Banner;