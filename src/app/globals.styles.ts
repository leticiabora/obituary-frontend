'use client';
import { theme } from '@/theme/theme';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
}
`;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 40px 80px;
  margin-bottom: 60px;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 800px) {
  padding: 20px ${theme.container.paddingX};
}
  `
