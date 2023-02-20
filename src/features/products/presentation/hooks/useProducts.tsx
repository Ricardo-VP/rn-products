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
  const [totalPoints, setTotalPoints] = useState<number>(0)

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

      const totalPoints = products.reduce(
        (total, product) => total + product.points,
        0
      )
      setTotalPoints(totalPoints)
    }
    fetchProducts()
  }, [])

  return {
    category,
    products,
    totalPoints,
    getProductById,
    filteredProducts,
    filterProductsByCategory,
  }
}
