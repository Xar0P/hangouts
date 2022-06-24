import styled, { css } from 'styled-components';
import { UserCircle, SignOut } from 'phosphor-react';

const svgCss = css`
  width: 6rem;
  height: 6rem;
`;

export const UserCircleIcon = styled(UserCircle)`${svgCss}`;
export const SignOutIcon = styled(SignOut)`
  min-width: 2.5rem;
  min-height: 2.5rem;
`;

export const Button = styled.button`
  width: 100%;
  text-decoration: none !important;
  > svg {
    width: 4.5rem;
    height: 4.5rem;
    color: ${({ theme }) => theme.COLORS.primary};
  }
  > div.option {
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: .1rem;
  }
`;

export const Box = styled.div`
  height: calc(100vh - 300px);
  min-height: 55rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;

  > svg {
    width: 3rem;
    height: 3rem;
  }

  > section {
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.30);
    width: 100%;
    max-width: 40em;
    padding: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    > div {
      display: flex;
      align-items: center;
     > p {
        max-width: 16rem;
        margin-left: .5rem;
      }
    }

    > button {
      display: flex;
      align-items: center;
      gap: 1rem;

      cursor: pointer;
      font-size: 1.6rem;
      text-align: right;
      text-decoration: underline;
      background-color: transparent;
      transition: transform 3s;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;
