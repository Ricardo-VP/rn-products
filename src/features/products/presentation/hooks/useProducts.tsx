import { useEffect, useState } from "react"
import { Product, ProductRepository } from "../../domain"

export enum Category {
  All = "all",
  Won = "won",
  Redeemed = "redeemed",
}

export const useProducts = (productRepository: ProductRepository) => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [category, setCategory] = useState<Category>(Category.All)

  const getProductById = async (id: string) => {
    return await productRepository.getProductById(id)
  }

  const filterProductsByCategory = (category: Category) => {
    setCategory(category)
    switch (category) {
      case Category.All:
        setFilteredProducts(products)
        break
      case Category.Won:
        setFilteredProducts(
          products.filter((product) => !product.isRedemption)
        )
        break
      case Category.Redeemed:
        setFilteredProducts(
          products.filter((product) => product.isRedemption)
        )
        break
      default:
        setFilteredProducts(products)
        break
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productRepository.getProducts()
      setProducts(products)
      setFilteredProducts(products)
    }
    fetchProducts()
  }, [])

  return {
    category,
    products,
    getProductById,
    filteredProducts,
    filterProductsByCategory,
  }
}
