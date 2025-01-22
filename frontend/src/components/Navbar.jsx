import React from 'react';
import { Link } from 'react-router-dom';
import NavDrawer from './NavDrawer';

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex justify-between mx-auto p-4">
        <div>
          <NavDrawer />
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-[#FFB400] rounded hover:text-[#FFB400] md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#FFB400] md:bg-transparent md:border-0 md:p-0"
              >
                Portfolio
              </Link>
            </li>
            {/* <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#FFB400] md:bg-transparent md:border-0 md:p-0"
              >
                About
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#FFB400] md:bg-transparent md:border-0 md:p-0"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="https://techweekle.blogspot.com/?"
                className="block py-2 px-3 text-gray-900 rounded hover:text-[#FFB400] md:bg-transparent md:border-0 md:p-0"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
