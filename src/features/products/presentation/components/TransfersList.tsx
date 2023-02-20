import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Product } from "../../domain"
import { TransferItem } from "./TransferItem"

export const TransfersList = ({
  data,
  navigation,
}: { data: Product[]; navigation: any }) => {
  return (
    <View>
      <View>
        <Text style={[styles.titleText]}>Tus movimientos</Text>
      </View>

      <ScrollView style={[styles.container]}>
        <View style={{ marginTop: 15 }}>
          {data.map((product) => (
            <TransferItem
              key={product.id}
              product={product}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    color: "gray",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
    height: 320,
  },

  transfersBody: {
    padding: 10,
  },
})
