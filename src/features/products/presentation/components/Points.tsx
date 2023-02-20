import { StyleSheet, Text, View } from "react-native"

import { getActualMonth } from "../utils"

export const Points = ({ points }: { points: number }) => {
  return (
    <View>
      <Text style={[styles.titleText]}>Tus puntos</Text>

      <View style={[styles.container]}>
        <Text style={[styles.bodyText, styles.monthLabel]}>
          {getActualMonth()}
        </Text>
        <Text style={[styles.bodyText, styles.pointsLabel]}>
          {points} pts
        </Text>
      </View>
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
    alignItems: "center",
    backgroundColor: "#334FFA",
    marginHorizontal: 35,
    marginVertical: 20,
    borderRadius: 20,
    minHeight: 143,
  },

  bodyText: {
    marginTop: 10,
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  monthLabel: {
    alignSelf: "flex-start",
    marginLeft: 19,
    marginTop: 21,
    textTransform: "capitalize",
  },

  pointsLabel: {
    fontSize: 32,
  },
})
