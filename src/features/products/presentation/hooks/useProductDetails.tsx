import { useEffect, useState } from "react"

import { Product, ProductRepository } from "../../domain"

export const useProductDetails = (
  productId: string,
  productRepository: ProductRepository
) => {
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await productRepository.getProductById(productId)
      setProduct(product)
    }

    fetchProduct()
  }, [])

  return {
    product,
  }
}
