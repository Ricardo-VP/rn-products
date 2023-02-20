import { GetProductsUseCase } from ".."
import {
  Product,
  ProductRepository,
} from "../../domain"

describe("GetProductsUseCase", () => {
  let productRepository: ProductRepository
  let getProductsUseCase: GetProductsUseCase

  beforeEach(() => {
    productRepository = {
      getProducts: jest.fn(),
      getProductById: jest.fn(),
    }
    getProductsUseCase = new GetProductsUseCase(productRepository)
  })

  describe("execute", () => {
    test("should return products from repository", async () => {
      const expectedProducts: Product[] = [
        {
          id: "1",
          product: "Product 1",
          points: 100,
          image: "image1.png",
          isRedemption: false,
          createdAt: new Date("2022-01-01"),
        },
        {
          id: "2",
          product: "Product 2",
          points: 200,
          image: "image2.png",
          isRedemption: true,
          createdAt: new Date("2022-01-02"),
        },
      ]
      jest
        .spyOn(productRepository, "getProducts")
        .mockResolvedValue(expectedProducts)

      const result = await getProductsUseCase.execute()

      expect(result).toEqual(expectedProducts)
      expect(productRepository.getProducts).toHaveBeenCalled()
    })
  })
})
