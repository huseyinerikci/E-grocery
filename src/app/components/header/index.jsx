import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm">
      <Link
        href="/"
        className="flex items-center gap-2 text-green-600 text-2xl lg:text-3xl font-bold "
      >
        <MdOutlineLocalGroceryStore />
        <span>MANAV</span>
      </Link>

      <SearchForm />

      <div className="flex items-center gap-5">
        <Link
          href="/orders"
          className="relative flex items-center gap-2 text-gray-700 hover:text-green-600 text-lg  "
        >
          <RiFileList3Line className="text-2xl" />
          <span className="max-md:hidden">Siparişlerim</span>
        </Link>
        <Link
          href="/cart"
          className="relative flex items-center gap-2 text-gray-700 hover:text-green-600 text-lg "
        >
          <FaShoppingCart className="text-2xl" />
          <span className="max-md:hidden">Sepetim</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
