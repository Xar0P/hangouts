import styled, { css } from 'styled-components';
import { CaretRight } from 'phosphor-react';

interface CartItemStyle {
  isOpen?: boolean,
}
export const ArrowCart = styled(CaretRight)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.COLORS.select_primary};
  transition: transform 200ms;
  z-index: -1;
  `;

export const Button = styled.button<CartItemStyle>`
  width: 100%;
  height: ${(props) => (!props.isOpen ? '4.8rem' : 'max(10.6rem, auto)')};
  min-height: ${(props) => (!props.isOpen ? '4.5rem' : 'max(10.6rem, auto)')};
  padding: 1.4rem 1.5rem;
  font-size: 1.5rem;
  user-select: none;
  background-color: transparent;
  ${(props) => !props.isOpen && css`
    overflow: hidden;
  `}

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title value'
    'flavors flavors';

  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px #BABABA;

  > div {
    display: flex;
    gap: 1rem;
  };

#title {
  grid-area: title;
  margin-bottom: 1rem;
}
#flavors {
  grid-area: flavors;
  text-align: left;
  margin-left: 3rem;
  font-size: 1.4rem;
  letter-spacing: .1rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}
#value {
  grid-area: value;
}
`;
