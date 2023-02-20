import {
  Product,
  ProductRepository,
} from ".."

class MockProductRepository implements ProductRepository {
  getProducts(): Promise<Product[]> {
    throw new Error("Method not implemented.")
  }

  getProductById(id: string): Promise<Product> {
    throw new Error("Method not implemented.")
  }
}

describe("Product Repository", () => {
  let mockProductRepository: ProductRepository

  beforeEach(() => {
    jest.clearAllMocks()
    mockProductRepository = new MockProductRepository()
  })

  describe("getProducts", () => {
    test("should return data", async () => {
      const expectedData = [
        {
          id: "1",
          product: "Product 1",
          points: 100,
          image: "image.png",
          isRedemption: false,
          createdAt: new Date("2022-01-01"),
        },
      ]
      jest
        .spyOn(mockProductRepository, "getProducts")
        .mockImplementation(() => Promise.resolve(expectedData))

      const result = await mockProductRepository.getProducts()
      expect(result).toBe(expectedData)
    })
  })

  describe("getProductById", () => {
    test("should return data", async () => {
      const expectedData = {
        id: "1",
        product: "Product 1",
        points: 100,
        image: "image.png",
        isRedemption: false,
        createdAt: new Date("2022-01-01"),
      }
      jest
        .spyOn(mockProductRepository, "getProductById")
        .mockImplementation(() => Promise.resolve(expectedData))

      const result = await mockProductRepository.getProductById("1")
      expect(result).toBe(expectedData)
    })
  })
})
