"use client";
import { CartItemProps } from "./CartItem";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const ItemActions = ({ item }: CartItemProps) => {
  const handleUpdateQuantity = (quantity: number) => {};
  const handleRemoveItem = () => {};
  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded mr-4">
        <button
          className="px-2 py-2 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer"
          onClick={() => handleUpdateQuantity(item.quantity - 1)}
        >
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-[36px] text-center">
          {item.quantity}
        </span>

        <button
          onClick={() => handleUpdateQuantity(item.quantity + 1)}
          className="px-2 py-2 text-gray-600 hover:bg-gray-200 transition disabled:opacity-50 cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>

      <button
        onClick={handleRemoveItem}
        className="text-red-600 hover:text-red-700 cursor-pointer disabled:opacity-50"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
