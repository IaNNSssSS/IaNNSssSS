import { Product } from '@/types/products';

export function otherProducts(prods: Product[]) {
  var otherProds = prods.slice(0, 6);
  return otherProds;
}

export function filterProducts(prods: Product[], tags: string[]) {
  var similarProds = prods.filter((product: Product) =>
    tags.every((tag: string) => product.tags.includes(tag))
  );
  return similarProds;
}

export function searchProducts(prods: Product[], name: string) {
  var searchProds = prods.filter((product: Product) => product.name.includes(name));
  return searchProds;
}

export function recentProducts(recentProducts: Product[], prod: Product) {
  recentProducts.push(prod);
  if (recentProducts.length > 4){
    recentProducts.shift();
  }
}

// Carrinho

export function addCart(prodsCart: Product[], prodAdd: Product) {
  prodsCart.push(prodAdd);
}

export function removeCart(prodsCart: Product[], prodId: number) {
  var removedCart = prodsCart.filter((prodCart: Product) => prodCart.id != prodId);
  return removedCart
}

export function clearCart(prodsCart: Product[]) {
  prodsCart.length = 0;
}

