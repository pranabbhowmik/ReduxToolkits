import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="text-center text-xl font-bold mb-4">
        Welcome, to Redux World
      </div>
      <h1 className="text-2xl text-center font-semibold mb-6">Admin Table</h1>

      <section className="text-center">
        <div className="mb-6 text-lg font-medium">
        Donot Look back
        </div>
        <nav className="bg-gray-50 py-4">
          <ul className="flex flex-wrap justify-center space-x-10">
            <li>
              <a
                href="/"
                data-item="Home"
                className="relative text-gray-500 text-lg font-medium uppercase hover:text-purple-500 transition-all duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                data-item="About"
                className="relative text-gray-500 text-lg font-medium uppercase hover:text-purple-500 transition-all duration-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                data-item="Projects"
                className="relative text-gray-500 text-lg font-medium uppercase hover:text-purple-500 transition-all duration-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/"
                data-item="Code"
                className="relative text-gray-500 text-lg font-medium uppercase hover:text-purple-500 transition-all duration-500"
              >
                Code
              </a>
            </li>
            <li>
              <a
                href="/"
                data-item="Contact"
                className="relative text-gray-500 text-lg font-medium uppercase hover:text-purple-500 transition-all duration-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
