import React from 'react';
import logo2 from './Assests/logo2.png';
import logo3 from './Assests/logo3.png';

const FooterSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <img src={logo2} alt="" />
      </div>
      <div className="bg-[#EBEBEB] flex justify-between p-4 ">
        <div className="flex flex-col w-8/12">
          <ul className="flex font-notobangla text-sm gap-2">
            <ol className="border-r-2 border-gray-400 px-6">
              গোপনীয়তার নীতিমালা{' '}
            </ol>
            <ol className="border-r-2 border-gray-400 px-6">
              ব্যবহারের শর্তাবলি
            </ol>
            <ol className="border-r-2 border-gray-400 px-6">
              সার্বিক সহযোগিতায়
            </ol>
            <ol className="border-r-2 border-gray-400 px-6">সাইট ম্যাপ</ol>
            <ol className="border-r-2 border-gray-400 px-6">সচরাচর জিজ্ঞাসা</ol>
          </ul>
          <p className="font-notobangla p-6">
            সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-১০-০৮ ১০:৪৬:৩১
          </p>
        </div>

        <div className="w-4/12 px-6">
          <img className="w-full" src={logo3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
