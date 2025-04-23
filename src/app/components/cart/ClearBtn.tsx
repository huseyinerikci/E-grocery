"use client";
import { FaTrash } from "react-icons/fa";
import { userId } from "@/app/utils/constants";
import { clearCart } from "@/app/service/cart-service";
import { useState } from "react";
import Loader from "../loader";
import { useRouter } from "next/navigation";

const ClearBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClearCart = async () => {
    setIsLoading(true);
    await clearCart(userId);
    router.refresh();
    setIsLoading(false);
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleClearCart}
      className="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm cursor-pointer"
    >
      {isLoading ? (
        <Loader designs="text-red-600" />
      ) : (
        <>
          <FaTrash />
          <p>Sepeti Boşalt</p>
        </>
      )}
    </button>
  );
};

export default ClearBtn;
