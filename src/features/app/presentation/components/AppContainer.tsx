import { SafeAreaView, StyleSheet, View, ViewStyle } from "react-native"

interface AppContainerProps {
  children: React.ReactNode
  style?: ViewStyle
}

export const AppContainer: React.FC<AppContainerProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[style, styles.container]}>
      <View style={[styles.body]}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    flex: 1,
  },
  body: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
})
