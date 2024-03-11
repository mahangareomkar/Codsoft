import React from 'react';

function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center w-full px-4 py-4 max-sm:hidden">
      <div className="flex flex-row justify-start items-center gap-6 text-white text-md font-bold">
        <a href="/" className="hover:text-emerald-600">Home</a>
        <a href="/" className="hover:text-emerald-600">Skills</a>
        <a href="/" className="hover:text-emerald-600">InternShip</a>
        <a href="/" className="hover:text-emerald-600">Roles</a>
      </div>
      <div>
        <a href="mailto: omkarmahangare.computertcoer@kjei.edu.in" className="relative z-[1] border-solid border-emerald-600 bg-none border-2 rounded-none text-white text-md p-1 px-2 my-2 mr-2 w-fit button-effect">Contact Me</a>
        <span className="border-solid border-emerald-600 bg-emerald-600 border-2 rounded-none text-white text-md p-1 px-2 my-2 mr-2 w-fit hover:bg-emerald-900 hover:cursor-pointer">Download CV</span>
      </div>
    </nav>
  );
}

export default NavBar;