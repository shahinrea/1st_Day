import React from 'react';

const TopHeader = () => {
  return (
    <div className='max-w-7xl mx-auto flex bg-[#9E5BBA] justify-between py-2 px-2 text-white items-center border-b-2 border-red-600'>
      <p>বাংলাদেশ জাতীয় তথ্য বাতায়ন</p>
      <div className='flex gap-4 items-center'>
        <p className='border-r-2 border-white p-2'>১ কার্তিক, ১৪৩১  </p>
        <p>English</p>
      </div>
    </div>
  );
};

export default TopHeader;
