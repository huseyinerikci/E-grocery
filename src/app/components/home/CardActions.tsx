"use client";
import { addToBasket } from "@/app/service/cart-service";
import React, { useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const CardActions = ({ productId }: { productId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userId = "hsyn";

  const handleAddToCart = () => {
    setIsLoading(true);
    addToBasket(userId, productId, 1)
      .then(() => toast.success("Ürün sepete eklendi"))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <button
      disabled={isLoading}
      onClick={handleAddToCart}
      className="bg-green-500 text-white shadow-sm rounded-full  p-2 hover:bg-green-600 transition hover:shadow-md  disabled:brightness-85 cursor-pointer"
    >
      {isLoading ? <FaSpinner className="animate-spin" /> : <FaPlus />}
    </button>
  );
};

export default CardActions;
