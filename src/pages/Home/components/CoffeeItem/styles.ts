import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


  background: ${props => props.theme['base-card']};

  flex: 1 1 0;
  max-width: 16rem;
  min-width: 14rem;
  height: 19.375rem;

  border-radius: 0.375rem 2.25px;


  span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${props => props.theme['base-label']}
  }
`

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
`

export const CoffeeTag = styled.ul`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: 0.75rem;
  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    line-height: 130%;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }
`

export const CoffeeTitle = styled.h4`
  display: flex;
  flex-direction: column;
  padding-inline: 1.25rem;

  h4 {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
    line-height: 130%;
  }

  span {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme['base-label']};
  }
`