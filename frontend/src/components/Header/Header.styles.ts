import styled from 'styled-components';

import headerBackground from '../../assets/images/header_bg.svg';

export const Box = styled.header`
  width: 100%;
  height: 25rem;
  color: ${({ theme }) => theme.COLORS.text_secondary};
  background-image: url(${headerBackground});
  font-size: 1.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 2.2rem;
  }

  p {
    text-align: center;
    margin-top: 1.5rem;
    width: 100%;
    max-width: 64rem;
  }
`;