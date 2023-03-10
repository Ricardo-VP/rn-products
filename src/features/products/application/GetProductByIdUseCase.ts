import { Product, ProductRepository } from "../domain"

export class GetProductByIdUseCase {
  private productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async execute(id: string): Promise<Product> {
    return await this.productRepository.getProductById(id)
  }
}
