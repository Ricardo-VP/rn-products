import { GetProductByIdUseCase } from ".."
import {
  Product,
  ProductRepository,
} from "../../domain"

describe("GetProductByIdUseCase", () => {
  let productRepository: ProductRepository
  let getProductByIdUseCase: GetProductByIdUseCase

  beforeEach(() => {
    productRepository = {
      getProducts: jest.fn(),
      getProductById: jest.fn(),
    }
    getProductByIdUseCase = new GetProductByIdUseCase(productRepository)
  })

  it("should call getProductById method of product repository with correct id", async () => {
    const product: Product = {
      id: "123",
      product: "Product 1",
      points: 100,
      image: "product1.png",
      isRedemption: false,
      createdAt: new Date(),
    }

    // Arrange
    jest
      .spyOn(productRepository, "getProductById")
      .mockResolvedValue(product)

    // Act
    const result = await getProductByIdUseCase.execute("123")

    // Assert
    expect(productRepository.getProductById).toHaveBeenCalledWith("123")
    expect(result).toEqual(product)
  })
})
