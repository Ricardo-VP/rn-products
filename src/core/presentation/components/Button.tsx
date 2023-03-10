import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native"

export const Button = ({
  text,
  style,
  onPress,
}: { text: string; style?: ViewStyle; onPress: Function }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => onPress()}
        style={[style, styles.button]}
      >
        <Text style={[styles.buttonText]}>{text}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
  },
  button: {
    backgroundColor: "#334FFA",
    borderRadius: 10,
    alignItems: "center",
    height: 50,
  },
  buttonText: {
    marginVertical: 12,
    color: "white",
    size: 16,
    lineHeight: 21.86,
    fontWeight: "800",
    textTransform: "capitalize",
  },
})
