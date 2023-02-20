import { Dimensions, View } from "react-native"

import { Button } from "../../../../core/presentation/components"

import { ProductRepositoryMockApiImpl } from "../../infrastructure"
import { Header, Points, TransfersList } from "../components"
import { useProducts } from "../hooks"

export const ProductsDashboard = () => {
  const { products } = useProducts(new ProductRepositoryMockApiImpl())
  const { height } = Dimensions.get("window")

  return (
    <View>
      <View style={{ height: height - 175 }}>
        <Header />
        <Points />
        <TransfersList data={products} />
      </View>
      <View style={{ height: 150 }}>
        <Button onPress={() => console.log("hey")} text="Todos" />
      </View>
    </View>
  )
}
