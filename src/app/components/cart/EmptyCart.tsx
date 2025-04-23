import Link from "next/link";
import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

const EmptyCart = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-4 py-8 text-center  min-h-[60vh]">
      <MdRemoveShoppingCart className="text-6xl text-gray-400 mb-4" />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Sepetiniz Boş</h1>
      <p className="text-gray-600">Sepetinizde henüz ürün bulunmamaktadır</p>

      <Link
        href={"/"}
        className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition mt-6"
      >
        Hemen Alışverişe Başla
      </Link>
    </div>
  );
};

export default EmptyCart;
