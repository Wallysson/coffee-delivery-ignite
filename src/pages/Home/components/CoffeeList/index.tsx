import coffeeList from '../../../../database/db-coffee.json'
import { CoffeeContainerHero, CoffeeContainerList } from './styles'

export function CoffeeList() {
  return (
    <CoffeeContainerHero>
      <h2>Nossos cafés</h2>
      <CoffeeContainerList>
        {coffeeList.map(item => (
            <li>{JSON.stringify(item)}</li>
        ))}
      </CoffeeContainerList>
    </CoffeeContainerHero>
  )
}

