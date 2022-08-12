import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeHero from '../../../../assets/coffee-hero.png'
import { HeroContainer, HeroContent, ItensDescriptionContainer } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ItensDescriptionContainer>
            <li>
              <span>
                <ShoppingCart size={16} weight="fill" color={"#fff"}/>
              </span>
                Compra simples e segura
            </li>
            <li>
              <span>
                <Package size={16} weight="fill" color={"#fff"}/>
              </span>
                Embalagem mantém o café intacto
            </li>
            <li>
              <span>
                <Timer size={16} weight="fill" color={"#fff"}/>
              </span>
                Entrega rápida e rastreada
            </li>
            <li>
              <span>
                <Coffee size={16} weight="fill" color={"#fff"}/>
              </span>
                O café chega fresquinho até você
            </li>
          </ItensDescriptionContainer>
      </HeroContent>
        <img src={coffeeHero} alt="" />
    </HeroContainer>
  )
}