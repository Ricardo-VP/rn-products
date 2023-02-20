import { AppContainer } from "./src/features/app"
import { ProductsDashboard } from "./src/features/products/presentation"

export default function App() {
  return (
    <AppContainer style={{ flex: 1 }}>
      <ProductsDashboard />
    </AppContainer>
  )
}
