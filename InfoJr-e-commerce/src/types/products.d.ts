import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { StaticImageData } from 'next/image';

export type Product = {
  id: number;
  name: string;
  current_price: float;
  old_price: float;
  available_quantity: int;
  size: string[];
  product_description: string;
  tags: string[];
  image: (string | StaticImageData)[];
}

export type ProductResponse = {
  name: string;
  current_price: float;
  old_price: float;
  available_quantity: int;
};
