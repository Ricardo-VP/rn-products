import axios from "axios"

import { Product, ProductRepository } from "../../domain"

export class ProductRepositoryMockApiImpl implements ProductRepository {
  public async getProducts(): Promise<Product[]> {
    const response = (
      await axios.get(
        "https://6222994f666291106a29f999.mockapi.io/api/v1/products"
      )
    ).data

    return response.map((product: any) => ({
      id: product.id,
      product: product.product,
      points: product.points,
      image: product.image,
      isRedemption: product.is_redemption,
      createdAt: product.createdAt,
    }))
  }

  public async getProductById(id: string): Promise<Product> {
    const response = (
      await axios.get(
        `https://6222994f666291106a29f999.mockapi.io/api/v1/products/${id}`
      )
    ).data

    return {
      id: response.id,
      product: response.product,
      points: response.points,
      image: response.image,
      isRedemption: response.is_redemption,
      createdAt: response.createdAt,
    }
  }
}
