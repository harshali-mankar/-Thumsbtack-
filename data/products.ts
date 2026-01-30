import { getAssetPath } from "../utils/basePath";

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  priceColor: string;
  image: string;
  supports: string[];
  buttonText: string;
  buttonVariant?: "outlined" | "contained";
}

export const products: ProductItem[] = [
  {
    id: "unlock",
    name: "UN-LOCK+",
    description: "Horse race performance muscle formula for endurance & recovery.",
    price: 149.00,
    priceColor: "custom.shopOrange",
    image: getAssetPath("/assets/products/unlock.png"),
    supports: ["Endurance", "Recovery"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
  {
    id: "flexify",
    name: "Flexify-HA",
    description: "Joint support formula for cartilage, flexibility and joint health.",
    price: 149.00,
    priceColor: "custom.shopBlue",
    image: getAssetPath("/assets/products/flexify.png"),
    supports: ["Joint Health"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
  {
    id: "epo",
    name: "EPO-Equine",
    description: "All-natural blood builder optimises oxygen levels.",
    price: 149.00,
    priceColor: "custom.shopEquine",
    image: getAssetPath("/assets/products/epo.png"),
    supports: ["Oxygen Levels"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
  {
    id: "bleeder",
    name: "Bleeder Shield",
    description: "One-of-a-kind respiratory formula. Now comes in a powder.",
    price: 149.00,
    priceColor: "custom.shopBleeder",
    image: getAssetPath("/assets/products/bleeder.png"),
    supports: ["Lungs Support"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
  // Duplicates for scrolling
  {
    id: "unlock-2",
    name: "UN-LOCK+",
    description: "Horse race performance muscle formula for endurance & recovery.",
    price: 149.00,
    priceColor: "custom.shopOrange",
    image: getAssetPath("/assets/products/unlock.png"),
    supports: ["Endurance", "Recovery"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
  {
    id: "flexify-2",
    name: "Flexify-HA",
    description: "Joint support formula for cartilage, flexibility and joint health.",
    price: 149.00,
    priceColor: "custom.shopBlue",
    image: getAssetPath("/assets/products/flexify.png"),
    supports: ["Joint Health"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
  {
    id: "epo-2",
    name: "EPO-Equine",
    description: "All-natural blood builder optimises oxygen levels.",
    price: 149.00,
    priceColor: "custom.shopEquine",
    image: getAssetPath("/assets/products/epo.png"),
    supports: ["Oxygen Levels"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
  {
    id: "bleeder-2",
    name: "Bleeder Shield",
    description: "One-of-a-kind respiratory formula. Now comes in a powder.",
    price: 149.00,
    priceColor: "custom.shopBleeder",
    image: getAssetPath("/assets/products/bleeder.png"),
    supports: ["Lungs Support"],
    buttonText: "Shop Now",
    buttonVariant: "outlined",
  },
];
