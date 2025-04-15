import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";

const Categories = () => {
  const options = [
    {
      icon: <MdLocalShipping className="text-4xl text-blue-600" />,
      title: "Hızlı Teslimat",
      description: "Aynı gün teslimat",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "Taze Ürünler",
      description: "Günlük taze ürünler",
      bgColor: "bg-green-50",
    },
    {
      icon: <BiSolidOffer className="text-4xl text-orange-600" />,
      title: "En İyi Kalite",
      description: "Seçkin ürünler",
      bgColor: "bg-orange-50",
    },
    {
      icon: <TbDiscount className="text-4xl text-purple-600" />,
      title: "İndirimli Fiyatlar",
      description: "Uygun fiyatlar",
      bgColor: "bg-purple-50",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mb-8">
      {options.map((option, key) => (
        <div
          key={key}
          className={`flex items-center gap-3 p-4 rounded-lg ${option.bgColor}`}
        >
          {option.icon}

          <div>
            <h3 className="text-gray-800 font-medium">{option.title}</h3>
            <p className="text-gray-600 text-sm">{option.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Categories;
