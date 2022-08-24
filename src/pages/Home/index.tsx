import { CoffeeList } from './components/CoffeeList'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer className="container">
      <Hero />
      <CoffeeList />
    </HomeContainer>
  )
}