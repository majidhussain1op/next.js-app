import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart" className="relative group">
      {/* Cart Icon */}
      <ShoppingBag className="w-6 h-6 text-white-800 transition-colors duration-200 group-hover:text-shop_light_green" />

      {/* Item Count Badge */}
      <span className="absolute -top-2 -right-2 bg-shop_light_green 
        text-black text-[11px] font-semibold w-5 h-5 
        rounded-full flex items-center justify-center 
        shadow-md ring-2 ring-white 
        transition-transform duration-200 group-hover:scale-110">
        2
      </span>
    </Link>
  )
}

export default CartIcon
