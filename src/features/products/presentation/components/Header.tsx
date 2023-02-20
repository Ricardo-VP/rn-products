import { StyleSheet, Text, View } from "react-native"

export const Header = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Bienvenido de vuelta!</Text>
      <Text style={[styles.subtitle]}>Ricardo Vaca</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
})
