import { useEffect, useState } from "react"
import { Product, ProductRepository } from "../../domain"

export const useProducts = (productRepository: ProductRepository) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productRepository.getProducts()
      setProducts(products)
    }

    fetchProducts()
  }, [])

  const getProductById = async (id: string) => {
    return await productRepository.getProductById(id)
  }

  return {
    products,
    getProductById,
  }
}
