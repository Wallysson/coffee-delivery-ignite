import { CoffeeDescription, CoffeeImage, CoffeeItemContainer, CoffeeName, CoffeeTag, CoffeeTitle } from "./styles";


export function CoffeeItem({id, name, description, price, image, tags} : any) {
  return (
    <CoffeeItemContainer>
      <CoffeeImage src={image} alt={name}/>
      <CoffeeTag>
        {tags.map(item => (
          <li key={item}>{item}</li>
        ))}
      </CoffeeTag>
      <CoffeeTitle>
        <h4>{name}</h4>
        <span>{description}</span>
      </CoffeeTitle>
      <strong>{price}</strong>
    </CoffeeItemContainer>
  )
}