"use client";
import { addToBasket, checkoutSingleItem } from "@/app/service/cart-service";
import { Product } from "@/app/types";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const OrderButtons = ({ grocery }: { grocery: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState(false);
  const userId = "hsyn";
  const handleAddToCart = async () => {
    if (quantity < 1 || grocery.stock < quantity) return;
    setLoading(true);
    try {
      await addToBasket(userId, grocery._id, quantity);
      toast.success(
        `${quantity} ${grocery.unit} ${grocery.name} sepete eklendi`
      );
      setQuantity(1);
    } catch (error) {
      console.log(error);
      toast.error("Ürün sepete eklenemedi");
    } finally {
      setLoading(false);
    }
  };
  const handleBuyNow = async () => {
    if (quantity < 1 || grocery.stock < quantity) return;
    setLoadingBuy(true);
    try {
      const { url } = await checkoutSingleItem(grocery, quantity);
      //satın alım sayfasına yönlendir
      window.open(url, "_blank");

      //state sıfırla
      setQuantity(1);
    } catch (error) {
      console.log(error);
      toast.error("Ödeme işlemi başlatılamadı");
    } finally {
      setLoadingBuy(false);
    }
  };
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <FaMinus />
          </button>
          <span className="min-w-[40px] px-3 py-2 border-x border-gray-300 text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity >= grocery.stock}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
        <span className="text-gray-500">Stok: {grocery.stock}</span>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          disabled={loading}
          onClick={handleAddToCart}
          className="flex-1 bg-white border-2 border-green-600 text-green-600 hover:bg-green-100 transition h-10 px-4 rounded-md font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 cursor-pointer"
        >
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <>
              <FaShoppingCart />
              Sepete Ekle
            </>
          )}
        </button>
        <button
          disabled={loadingBuy}
          onClick={handleBuyNow}
          className="flex-1 bg-green-600 text-white flex justify-center items-center hover:bg-green-700 h-10 px-4 rounded-md disabled:opacity-85 disabled:cursor-not-allowed cursor-pointer"
        >
          {loadingBuy ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <>Hemen Satın Al</>
          )}
        </button>
      </div>
    </div>
  );
};

export default OrderButtons;
