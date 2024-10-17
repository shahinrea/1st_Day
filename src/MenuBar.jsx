import React from 'react';
import menuData from './constant/menuData';

const MenuBar = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row items-center hover:bg-blue-200 cursor-pointer justify-between bg-gray-100 p-2 mt-4 font-notobangla">
      {menuData.map((menu) => (
        <div className="" key={menu.id}>
          {menu.item}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
