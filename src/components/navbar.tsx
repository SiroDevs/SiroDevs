"use client";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#ea580c] text-3xl font-bold">
            SIRO JACK
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about-me">
              <div className="text-sm text-white transition-colors duration-300 hover:text-orange-600">ABOUT ME</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-600">MY EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-600">MY PROJECTS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#blog"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-600">MY TECH BLOG</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact-me"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-600">CONTACT ME</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
