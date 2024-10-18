import React from 'react';
import menuData from './constant/menuData';

const MenuBar = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row items-center bg-gray-100 p-2 mt-4 font-notobangla">
      {menuData.map((menu) => (
        <div className="" key={menu.id}>
          <div className="py-1 px-3 border-r-2 border-r-gray-300 transaction-all duration-500 hover:bg-black hover:text-white cursor-pointer text-xl">
            {menu.item}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
