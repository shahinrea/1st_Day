import Govtlogo from './Assests/govtlogo.png';
import Logo from './Assests/logo_bn.png';
import Twitterlogo from './Assests/twitterlogo.png';

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row justify-between items-center font-notobangla">
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <div>
        <div className="flex flex-row bg-[#8CC643] gap-2 items-center shadow-md shadow-gray-400">
          <div className="flex  text-white p-2 border-r-2 border-white">
            <a className="text-3xl font-bold" href="">
              ৫৮
            </a>
            <a className="" href="">
              মন্ত্রণালয় <br /> ও বিভাগ
            </a>
          </div>
          <div className="flex  text-white p-2  border-r-2 border-white">
            <a className="text-3xl font-bold" href="">
              ৩৫৩
            </a>
            <a className="" href="">
              অধিদপ্তর <br /> ও অন্যান্য
            </a>
          </div>
          <div className="flex  text-white p-2  border-r-2 border-white">
            <a className="text-3xl font-bold" href="">
              ৮
            </a>
            <a className="" href="">
              বিভাগ
            </a>
          </div>
          <div className="flex  text-white p-2  border-r-2 border-white">
            <a className="text-3xl font-bold" href="">
              ৬৪
            </a>
            <a className="" href="">
              জেলা
            </a>
          </div>
          <div className="flex  text-white p-2  border-r-2 border-white">
            <a className="text-3xl font-bold" href="">
              ৪৯৫
            </a>
            <a className="" href="">
              উপেজলা
            </a>
          </div>
          <div className="flex  text-white p-2">
            <a className="text-3xl font-bold" href="">
              ৪৫৫৪
            </a>
            <a className="" href="">
              ইউনিয়ন
            </a>
          </div>
        </div>
        {/* search button */}
        <div className="gap-2 flex justify-between items-center mt-2">
          <input
            className="border-2 border-gray-100 p-2 w-[400px] rounded-md"
            placeholder="খুজুন"
            type="text"
          />
          <button className="bg-gray-100 p-2 border-2 border-gray-200 rounded-md">
            অনুসন্ধান
          </button>
          <a href="">
            <img src={Govtlogo} alt="" />
          </a>
          <a className="border-l-2 border-gray-100" href="">
            <img src={Twitterlogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
