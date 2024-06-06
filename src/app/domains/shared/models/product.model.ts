import { Category } from "./category"

export interface Product {
  id: number,
  title: string,
  price: number,
  image: string,
  images: string[]
  creationAt: string,
  description: string,
  category: Category
}
