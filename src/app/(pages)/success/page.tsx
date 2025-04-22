import Link from "next/link";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Success = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-[50%] grid place-items-center bg-green-500 text-white ">
        <div className="flex flex-col items-center gap-10">
          <IoIosCheckmarkCircle className="text-[70px]" />
          <p className="font-semibold text-4xl text-center">
            Ödeme Başarılı Oldu
          </p>
        </div>
      </div>

      <div className="h-[50%] p-10 mt-5 text-center text-black">
        <p className="text-lg">Siparişiniz yakında teslim edilecektir</p>
        <p className="mt-5 mb-10 text-zinc-800">
          Detaylar için mailinizi kontrol edebilirsiniz
        </p>
        <Link
          href={"/order"}
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
        >
          Siparişlerim
        </Link>
        <br />
        <br />
        <br />
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

export default Success;
