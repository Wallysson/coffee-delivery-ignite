import { coffees } from '../../../../database/db-coffee'
import { CoffeeCards } from '../CoffeeCards'
import { CoffeeContainerHero, CoffeeContainerList } from './styles'

export function CoffeeList() {
  return (
    <CoffeeContainerHero>
      <h2>Nossos cafés</h2>
      
      <CoffeeContainerList>
        {coffees.map(coffee => (
            <CoffeeCards key={coffee.id} coffee={coffee}/>
        ))}
      </CoffeeContainerList>
    </CoffeeContainerHero>
  )
}
