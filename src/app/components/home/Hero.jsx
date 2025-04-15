import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="text-white lg:grid  lg:grid-cols-2 lg:gap-5">
      <div className="flex flex-col justify-between p-6 rounded-lg bg-gradient-to-r from-green-600 to-green-600 bg-cover bg-no-repeat">
        <h1 className="text-3xl font-semibold">
          Taze Manav Ürünleri <br /> Kapınıza Kadar
        </h1>
        <p className="my-3">
          En taze meyve ve sebzeler elinizin altında. Sağıklı yaşamın ilk adımı
          sizden başlıyor.
        </p>
        <Link
          href="/"
          className="bg-white inline-block w-fit text-green-700 py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition"
        >
          Alışverişe Başla
        </Link>
      </div>

      <div className="flex flex-col justify-between p-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 max-lg:mt-4 max-lg:hidden bg-cover bg-no-repeat">
        <h1 className="text-3xl font-semibold">
          Organik Ürünler <br /> Uygun Fiyata
        </h1>
        <p className="my-3">
          Doğl ve organik ürünlerle salıklı beslenme artık çok kolay.
        </p>
        <Link
          href="/"
          className="bg-white inline-block w-fit text-orange-700 py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white transition"
        >
          Organik Ürünler
        </Link>
      </div>
    </div>
  );
};

export default Hero;
