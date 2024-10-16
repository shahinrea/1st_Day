import Logo from './Assests/logo_bn.png';

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <div className="flex flex-row bg-[#8CC643] gap-2 items-center">
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
    </div>
  );
};

export default Navbar;
