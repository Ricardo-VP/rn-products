import { Product } from ".."

describe("Product", () => {
  it("should have the correct properties", () => {
    const product: Product = {
      id: "123",
      product: "Product name",
      points: 100,
      image: "https://example.com/image.png",
      isRedemption: false,
      createdAt: new Date(),
    }
    expect(product).toHaveProperty("id")
    expect(product).toHaveProperty("product")
    expect(product).toHaveProperty("points")
    expect(product).toHaveProperty("image")
    expect(product).toHaveProperty("isRedemption")
    expect(product).toHaveProperty("createdAt")
  })
})
