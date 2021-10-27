import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { SearchIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <div>
      <div className="flex justify-between items-center bg-white max-w-6xl ">
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

        {/* Right */}
      </div>
    </div>
  )
}

export default Header
