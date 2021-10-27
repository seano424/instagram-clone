import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import {
  SearchIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center bg-white max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="w-24 h-10 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden flex-shrink-0 cursor-pointer">
          <FaInstagram className="h-10 w-10" />
        </div>

        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full flex items-center justify-center text-white text-xs w-5 h-5">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            className="w-10 rounded-full cursor-pointer"
            src="https://scontent.fmid3-1.fna.fbcdn.net/v/t1.6435-9/241495548_10201717680202413_1665311185021220494_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pcKpvkRj8NEAX-Hz8fz&_nc_ht=scontent.fmid3-1.fna&oh=500640eb74de81ef996df5674e59ce9c&oe=619E8E71"
            alt="profile image"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
