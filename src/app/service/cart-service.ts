import {
  Cart,
  GetBasketResponse,
  MessageResponse,
  Product,
  SingleCheckoutResponse,
} from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//sepete ürün ekle
const addToBasket = async (
  userId: string,
  groceryId: string,
  quantity: number
): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

//tek ürün için ödeme sayfası url oluştur
const checkoutSingleItem = async (
  grocery: Product,
  quantity: number
): Promise<SingleCheckoutResponse> => {
  const body = {
    grocery: {
      _id: grocery._id,
      name: grocery.name,
      price: grocery.price,
      description: grocery.description,
    },
    quantity: quantity,
    customerInfo: {
      name: "hsyn",
      phone: "01234567890",
      deliveryAddress: "X mah. Y sk. no:1, İstanbul",
      isDelivery: true,
    },
  };
  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

//sepetteki ürünleri getir
const getBasket = async (userId: string): Promise<GetBasketResponse> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`);
  return res.json();
};

//ürün miktarını güncelle
const updateCartItem = async (
  userId: string,
  groceryId: string,
  quantity: number
): Promise<Cart> => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "PUT",
    body: JSON.stringify({ userId, groceryId, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

//sepetten tek ürün kaldır
const removeCartItem = async (
  userId: string,
  groceryId: string
): Promise<Cart> => {
  const res = await fetch(
    `${BASE_URL}/api/cart/item?userId=${userId}&groceryId=${groceryId}`,
    {
      method: "DELETE",
      body: JSON.stringify({ userId, groceryId }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json();
};

//sepeti temizle
const clearCart = async (userId: string): Promise<MessageResponse> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, {
    method: "DELETE",
    body: JSON.stringify({ userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

export {
  addToBasket,
  checkoutSingleItem,
  getBasket,
  updateCartItem,
  removeCartItem,
  clearCart,
};
