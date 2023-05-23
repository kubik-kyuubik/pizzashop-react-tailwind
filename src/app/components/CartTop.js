import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { IoCloseOutline } from 'react-icons/io5'

const CartTop = () => {
  const { setIsOpen, itemAmount } = useContext(CartContext)
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      {/* shopping bag text */}
      <div className="font-semibold">Shopping Bag({itemAmount})</div>
      {/* close icon */}
      <div onClick={() => setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline className="text-3xl group-hover:scale-110 duration-300 transition-all" />
      </div>
    </div>
  )
}

export default CartTop
