import { Text, View, StyleSheet, Image } from "react-native"

import { useProductDetails } from "../hooks"
import { ProductRepositoryMockApiImpl } from "../../infrastructure"
import { formatDate } from "../utils"
import { Button } from "../../../../core/presentation/components"
import { DetailsHeader } from "../components"

export const ProductDetails = ({
  navigation,
  route,
}: {
  navigation: any
  route: any
}) => {
  const { productId } = route.params

  const { product } = useProductDetails(
    productId,
    new ProductRepositoryMockApiImpl()
  )

  return (
    <View>
      <DetailsHeader productName={product?.product as string} />
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: product?.image }} />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.caption}>Detalles del producto:</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.detailsText}>{`Comprado el ${formatDate(
            product?.createdAt as Date
          )}`}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.caption}>Con esta compra acumulaste:</Text>
        </View>
        <View style={{ marginTop: 32 }}>
          <Text>
            <Text style={styles.pointsText}>{`${product?.points} puntos`}</Text>
          </Text>
        </View>
        <View style={{ marginTop: 37, marginBottom: 20 }}>
          <Button
            text="Aceptar"
            onPress={() => navigation.navigate("Products Dashboard")}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "white",
    height: 350,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.6,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginHorizontal: 75,
    marginVertical: 75,
  },

  caption: {
    fontSize: 14,
    lineHeight: 19.12,
    color: "#9B9898",
    fontWeight: "800",
  },
  detailsText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 21.86,
  },
  pointsText: {
    fontSize: 24,
    fontWeight: "600",
  },
})
