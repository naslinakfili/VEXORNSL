export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  color?: string;
  size?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Labtop Azer",
    price: 450,
    url: "/images/products/electronics/labtop/labtop-azer-main/labtop-azer-main01.png",
    color: "white,red ,blue",
    size: "Standart, pro, mini"
  },
  {
    id: 2,
    name: "Earpondes",
    price: 75,
    url: "/images/products/electronics/earphones/airphone-white-main/airphone-white-main01.png",
    color: "white,black",
  },
  {
    id: 3,
    name: "Hanset Bluetoutch",
    price: 45,
    url: "/images/products/aksessories/chargers/charger-main01.png",
  },
  {
    id: 4,
    name: "Mouse Gaming",
    price: 55,
    url: "/images/products/aksessories/keyboards/keyboard-main01.png",
  },
];
