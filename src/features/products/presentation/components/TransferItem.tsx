import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { Product } from "../../domain"
import { formatDate } from "../utils"

export const TransferItem = ({ product }: { product: Product }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container]}>
        <View style={{ flex: 0.2 }}>
          <Image
            source={{
              uri: product.image,
            }}
            style={styles.image}
          />
        </View>
        <View style={{ flex: 0.6, marginLeft: 11 }}>
          <Text style={[styles.title]}>{product.product}</Text>
          <Text style={[styles.subtitle]}>{formatDate(product.createdAt)}</Text>
        </View>
        <View style={{ alignItems: "flex-end", flex: 0.2, marginLeft: 50 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.points,
                  product.isRedemption
                    ? styles.negativePoints
                    : styles.positivePoints,
                ]}
              >
                {product.isRedemption ? "-" : "+"}
              </Text>
              <Text style={styles.points}>{product.points}</Text>
            </View>
            <View style={{ marginLeft: 12.17 }}>
              <Text style={{ fontWeight: "500" }}>{">"}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: 60,
    marginBottom: 4,
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    marginVertical: 3.5,
  },
  subtitle: {
    color: "gray",
    fontSize: 12,
    fontWeight: "400",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  points: {
    fontSize: 16,
    fontWeight: "600",
  },
  positivePoints: {
    color: "green",
  },
  negativePoints: {
    color: "red",
  },
})
