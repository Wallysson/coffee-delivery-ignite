import coffeeList from '../../../../database/db-coffee.json'
import { CoffeeItem } from '../CoffeeItem'
import { CoffeeContainerHero, CoffeeContainerList } from './styles'

export function CoffeeList() {
  return (
    <CoffeeContainerHero>
      <h2>Nossos cafés</h2>
      <CoffeeContainerList>
        {coffeeList.map(item => (
            <CoffeeItem key={item.id} {...item}/>
        ))}
      </CoffeeContainerList>
    </CoffeeContainerHero>
  )
}

