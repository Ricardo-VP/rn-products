import { Product, ProductRepository } from "../domain"

export class GetProductsUseCase {
  private productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async execute(): Promise<Product[]> {
    return await this.productRepository.getProducts()
  }
}
