import { Product } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import ItemActions from "./ItemActions";

export type CartItemProps = {
  item: {
    grocery: Product;
    quantity: number;
    price: number;
    name: string;
    _id: string;
  };
};

const CartItem = ({ item }: CartItemProps) => {
  console.log(item);
  return (
    <li className="flex items-center p-4">
      {item.grocery && (
        <div className="overflow-hidden rounded-md mr-4">
          <Image
            src={item.grocery.photo}
            alt={item.grocery.name}
            width={100}
            height={100}
          />
        </div>
      )}

      <div className="flex-1">
        <Link
          href={`/grocery/${item.grocery?._id}`}
          className="text-lg font-medium text-gray-800 hover:text-gray-600"
        >
          {item.name}
        </Link>

        {item.grocery && (
          <p className="text-gray-600 text-sm">{item.grocery.unit}</p>
        )}
        <p className="text-green-600 font-medium">{item.price}₺</p>
      </div>

      <ItemActions item={item} />
    </li>
  );
};

export default CartItem;
