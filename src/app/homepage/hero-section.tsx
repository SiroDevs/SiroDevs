"use client";

import { bio } from "@/data/bio";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaHashnode, FaStrava, FaBlogger } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] space-y-2">
  <span className="block">
    Hi there, welcome here. I am{" "}
    <Link href={bio.linkedIn} target="_blank" className="hover:underline hover:text-[#f97316] transition-colors">
      <span className="text-[#22c55e]">Siro</span>
    </Link>, a{" "}
    <Link href={bio.github} target="_blank" className="hover:underline hover:text-[#fb923c] transition-colors">
      <span className="text-[#f97316]">{bio.designation1}</span>
    </Link>
    , a{" "}
    <Link href={bio.hashnode} target="_blank" className="hover:underline hover:text-[#4ade80] transition-colors">
      <span className="text-[#f97316]">{bio.designation4}</span>
    </Link> and a{" "}
    <Link href={bio.mentor} target="_blank" className="hover:underline hover:text-[#4ade80] transition-colors">
      <span className="text-[#f97316]">{bio.designation5}</span>
    </Link>!
  </span>
</h1>


          <div className="my-12 flex items-center gap-5">
            <Link
              href={bio.github}
              target="_blank"
              className="transition-all text-orange-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={bio.hashnode}
              target="_blank"
              className="transition-all text-orange-500 hover:scale-125 duration-300"
            >
              <FaHashnode size={30} />
            </Link>
            <Link
              href={bio.medium}
              target="_blank"
              className="transition-all text-orange-500 hover:scale-125 duration-300"
            >
              <FaMedium size={30} />
            </Link>
            <Link
              href={bio.blogger}
              target="_blank"
              className="transition-all text-orange-500 hover:scale-125 duration-300"
            >
              <FaBlogger size={30} />
            </Link>
            <Link
              href={bio.strava}
              target="_blank"
              className="transition-all text-orange-500 hover:scale-125 duration-300"
            >
              <FaStrava size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact-me"
              className="bg-gradient-to-r to-orange-500 from-red-600 p-[1px] rounded-full transition-all duration-300 hover:from-orange-500 hover:to-red-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={bio.resume}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              target="_blank"
              role="button"
            >
              <span>My Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500 to-red-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src={bio.profile}
              width={280}
              height={280}
              alt={`${bio.name}'s Profile Picture`}
              className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
