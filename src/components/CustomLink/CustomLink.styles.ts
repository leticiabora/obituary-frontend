'use client';

import styled, { css, DefaultTheme } from 'styled-components';

const buttonStyles = css`
  padding: 12px 16px;
  border: none;
  border-radius: 5px;
  width: fit-content;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const linkVariants = (theme: DefaultTheme) => {
  return {
    primary: css`
      color: ${theme.colors.text.primary};
      border-bottom: 1px solid transparent;
      &:hover {
        border-bottom: 1px solid ${theme.colors.green.default};
      }
    `,
    button: css`
      ${buttonStyles};
      color: white;
      background-color: ${theme.colors.green.default};
      &:hover {
        background-color: ${theme.colors.green.dark};
      }
    `,
    outlined: css`
      ${buttonStyles};
      color: ${theme.colors.green.dark};
      background-color: white;
      border: 1px solid ${theme.colors.green.dark};
      &:hover {
        background-color: ${theme.colors.green.light};
      }
    `,
    none: css`
      ${buttonStyles};
      padding: 0;
      &:hover {
        border-bottom: none
      }
    `,
  } as const;
};

interface LinkProps {
  $variant?: keyof ReturnType<typeof linkVariants>;
}

export const LinkContainer = styled.div<LinkProps>`
  ${({ theme, $variant = 'primary' }) => linkVariants(theme)[$variant]}
`;
