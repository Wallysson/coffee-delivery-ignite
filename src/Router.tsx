import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderComplete } from './pages/OrderComplete'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderComplete" element={<OrderComplete />} />

      </Route>
    </Routes>
  )
}