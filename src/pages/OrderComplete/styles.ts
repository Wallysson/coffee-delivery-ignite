import styled from "styled-components";

export const OrderCompleteContainer = styled.div`
  margin-top: 5rem;

  > div {
    @media (max-width: 900px) {
      text-align: center;
    }
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${props => props.theme['yellow-dark']};
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']} ;
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
    flex-direction: column;

    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`

export const OrderDetailsPurchaseContainer = styled.div`
  border-radius: 6px 36px 6px 36px;
  display: flex;
  background: ${props => props.theme['background']};
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  position: relative;
  width: 50%;
  margin-top: 2.5rem;

  @media (max-width: 900px) {
    width: 75%;
    justify-content: center;
  }

  &::before{
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }
`