import { SafeAreaView, StyleSheet, Text, View } from "react-native"

export const DetailsHeader = ({ productName }: { productName: string }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={styles.headerText}>{productName}</Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: "#CFD6FF",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: 20,
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
  },
})
