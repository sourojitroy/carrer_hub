import { } from "./fakedb"


export const productsAndCartData = async () => {
  const productsData = await fetch('data.json')
  const products = await productsData.json()

  const savedCart = getShoppingCart();
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return { products, initialCart }
}