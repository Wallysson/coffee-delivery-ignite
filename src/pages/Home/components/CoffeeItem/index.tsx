import { CoffeeImage, CoffeeItemContainer, CoffeeTag } from "./styles";


export function CoffeeItem({id, name, description, price, image, tags} : any) {
  return (
    <CoffeeItemContainer>
      <CoffeeImage src={image} alt={name}/>
      <CoffeeTag>
        {tags.map(item => (
          <li key={item}>{item}</li>
        ))}
      </CoffeeTag>
      <h4>{name}</h4>
      <span>{description}</span>
      <strong>{price}</strong>
    </CoffeeItemContainer>
  )
}