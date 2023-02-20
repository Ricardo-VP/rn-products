import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ProductDetails, ProductsDashboard } from "../screens"

const Stack = createNativeStackNavigator()

export const ProductsNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products Dashboard"
          component={ProductsDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
