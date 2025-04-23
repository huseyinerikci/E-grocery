"use client";
import { useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Loader from "../loader";
import { checkoutAllItem } from "@/app/service/cart-service";
import { userId } from "@/app/utils/constants";

const CheckoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const { url } = await checkoutAllItem(userId);
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleCheckout}
      className="w-full flex items-center justify-center gap-2  bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700 transition disabled:brightness-75 cursor-pointer"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MdOutlineShoppingCartCheckout />
          Ödeme Yap
        </>
      )}
    </button>
  );
};

export default CheckoutBtn;
