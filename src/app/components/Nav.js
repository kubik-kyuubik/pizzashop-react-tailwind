'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)
  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        {/* logo */}
        <Link href="#" className="max-w-[160px] lg:max-w-max">
          <Image src={'logo.svg'} width={180} height={180} alt="" />
        </Link>
        {/* phone and cart */}
        <div className="flex gap-x-8 items-center">
          {/* phone */}
          <div className="flex gap-x-3 items-center">
            <Image src={'phone.svg'} width={42} height={42} alt="" />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
                24/7 Pizza delivery service
              </div>
              <div className="text-3xl font-robotoCondensed font-extralight leading-none tracking-wide">
                920 234 5768
              </div>
            </div>
          </div>
          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden lg:flex"
          >
            <Image src={'bag.svg'} width={38} height={38} alt="" />
            {/* amount */}
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
