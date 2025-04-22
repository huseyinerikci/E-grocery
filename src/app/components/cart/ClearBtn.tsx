"use client";
import { FaTrash } from "react-icons/fa";

const ClearBtn = () => {
  return (
    <button className="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm cursor-pointer">
      <FaTrash />
      <p>Sepeti Boşalt</p>
    </button>
  );
};

export default ClearBtn;
