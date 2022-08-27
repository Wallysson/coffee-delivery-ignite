import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeHero from '../../../../assets/coffee-hero.png'
import { InfoIcone } from '../../../../components/InfoIcone'
import { HeroContainer, HeroContent, ItensDescriptionContainer } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ItensDescriptionContainer>

              <InfoIcone 
                icon={<ShoppingCart weight="fill" />}
                iconBg={"#C47F17"}
                text="Compra simples e segura"
              />

              <InfoIcone 
                icon={<ShoppingCart weight="fill" />}
                iconBg={"#574F4D"}
                text="Embalagem mantém o café intacto"
              />
              <InfoIcone 
                icon={<ShoppingCart weight="fill" />}
                iconBg={"#DBAC2C"}
                text="Entrega rápida e rastreada"
              />
              <InfoIcone 
                icon={<ShoppingCart weight="fill" />}
                iconBg={"#8047F8"}
                text="O café chega fresquinho até você"
              />              
          </ItensDescriptionContainer>
      </HeroContent>
        <img src={coffeeHero} alt="" />
    </HeroContainer>
  )
}