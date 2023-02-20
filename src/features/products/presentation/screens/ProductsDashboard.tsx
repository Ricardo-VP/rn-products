import { Dimensions, View } from "react-native"

import { Button } from "../../../../core/presentation/components"
import { AppContainer } from "../../../app"

import { ProductRepositoryMockApiImpl } from "../../infrastructure"
import { DashboardHeader, Points, TransfersList } from "../components"
import { Category, useProducts } from "../hooks"

export const ProductsDashboard = ({
  navigation,
}: { navigation: any; route: any }) => {
  const {
    products,
    filteredProducts,
    totalPoints,
    category,
    filterProductsByCategory,
  } = useProducts(new ProductRepositoryMockApiImpl())

  const { height, width } = Dimensions.get("window")

  return (
    <AppContainer>
      <View style={{ height: height - 175 }}>
        <DashboardHeader />
        <Points points={totalPoints} />
        <TransfersList
          data={filteredProducts || products}
          navigation={navigation}
        />
      </View>
      {category === "all" && (
        <View style={{ height: 150, flexDirection: "row" }}>
          <View style={{ marginRight: 13 }}>
            <Button
              style={{ width: 170 }}
              onPress={() => filterProductsByCategory(Category.Won)}
              text="Ganados"
            />
          </View>
          <View>
            <Button
              style={{ width: 170 }}
              onPress={() => filterProductsByCategory(Category.Redeemed)}
              text="Canjeados"
            />
          </View>
        </View>
      )}
      {(category === "won" || category === "redeemed") && (
        <View style={{ height: 150, flexDirection: "row" }}>
          <Button
            onPress={() => filterProductsByCategory(Category.All)}
            text="Todos"
            style={{ width: width - 40 }}
          />
        </View>
      )}
    </AppContainer>
  )
}
