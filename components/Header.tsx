import Image from "next/image";
import React from "react";
// import { useSession } from 'next-auth/react'
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
import { BiSolidHome, BiSearchAlt2 } from "react-icons/bi";
import {
  HiOutlineSparkles,
  HiOutlineGlobe,
  HiOutlineVideoCamera,
  HiOutlineChat,
  HiOutlineBell,
  HiOutlineSpeakerphone,
  HiMenu,
} from "react-icons/hi";
import Link from "next/link";

function Header() {
  // const { data: session } = useSession()
  const session = true;

  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
      <div className="relative h-12 w-24 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            alt=""
            src="/Reddit-Logo-Assets/Reddit Logo/On White/SVG/Reddit_Lockup_OnWhite.svg"
            fill
          />
        </Link>
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <BiSolidHome className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <AiOutlineDown className="h-4 w-4" />
      </div>

      {/* Search box */}
      <form
        className="flex flex-1 items-center space-x-2
      rounded-sm border border-gray-200 bg-gray-100 px-3 py-1"
      >
        <BiSearchAlt2 className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div
        className="mx-5 hidden items-center space-x-2
      text-gray-500 lg:inline-flex"
      >
        <HiOutlineSparkles className="icon" />
        <HiOutlineGlobe className="icon" />
        <HiOutlineVideoCamera className="icon" />
        <hr className="h-10 border border-gray-100" />
        <HiOutlineChat className="icon" />
        <HiOutlineBell className="icon" />
        <AiOutlinePlus className="icon" />
        <HiOutlineSpeakerphone className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <HiMenu className="icon" />
      </div>

      {/* Sign in/ Sign out button */}
      {session ? (
        <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              style={{ objectFit: "contain" }}
              alt=""
              src="/outline_reddit_logo.png"
              fill
            />
          </div>

          <div className="flex-1 text-xs">
            <p className="truncate">username</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <AiOutlineDown className="h-4 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              style={{ objectFit: "contain" }}
              alt=""
              src="/outline_reddit_logo.png"
              fill
            />
          </div>

          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
