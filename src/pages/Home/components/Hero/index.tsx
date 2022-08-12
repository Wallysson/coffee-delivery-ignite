import coffeeHero from '../../../../assets/coffee-hero.png'
import { HeroContainer, HeroContent } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <div>
          <ul>
            <li>Compra simples e segura</li>
            <li>Embalagem mantém o café intacto</li>
            <li>Entrega rápida e rastreada</li>
            <li>O café chega fresquinho até você</li>
          </ul>
        </div>
      </HeroContent>
      <img src={coffeeHero} alt="" />
    </HeroContainer>
  )
}