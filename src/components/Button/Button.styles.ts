'use client';

import styled, { css, DefaultTheme } from 'styled-components';

const buttonVariants = (theme: DefaultTheme) =>
  ({
    primary: css`
      background-color: ${theme.colors.green.dark};
      color: white;
      &:hover {
        background-color: rgba(${theme.colors.green.default}, 0.6);
      }
    `,
    secondary: css`
      background-color: white;
      color: ${theme.colors.green.dark};
      border: 1px solid ${theme.colors.green.dark};
      &:hover {
        background-color: ${theme.colors.green.dark};
      }
    `,
    link: css`
      background-color: transparent;
      padding: 0;
      color: ${theme.colors.text.secondary};
      &:hover {
        text-decoration: underline;
      }
    `,
    danger: css`
      background-color: ${theme.colors.danger};
      color: white;
      &:hover {
        background-color: rgba(${theme.colors.danger}, 0.6);
      }
    `,
    none: css`
      background-color: transparent;
      padding: 0;
      color: ${theme.colors.text.primary};
    `,
  } as const);

interface ButtonProps {
  $variant?: keyof ReturnType<typeof buttonVariants>;
}

export const ButtonContainer = styled.button<ButtonProps>`
  padding: 12px 16px;
  border: none;
  border-radius: 5px;
  width: 'fit-content';
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  ${({ theme, $variant = 'primary' }) => buttonVariants(theme)[$variant]}
`;
