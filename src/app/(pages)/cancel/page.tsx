import Link from "next/link";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Cancel = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-[50%] grid place-items-center bg-red-600 text-white ">
        <div className="flex flex-col items-center gap-10">
          <IoIosCloseCircle className="text-[70px]" />
          <p className="font-semibold text-4xl text-center">
            Ödeme Başarısız Oldu
          </p>
        </div>
      </div>

      <div className="h-[50%] p-10 mt-5 text-center text-black">
        <p className="text-lg">Ödeme işlemi sırasında bir hata oluştu</p>
        <p className="mt-5 mb-10 text-zinc-800">
          Lütfen daha sonra tekrar deneyiniz
        </p>

        <Link
          href={"/"}
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
