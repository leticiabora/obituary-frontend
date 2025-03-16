'use client';

import { theme } from '@/theme/theme';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  border-top: 1px solid ${theme.colors.green.light};
  padding-top: 20px;
  position: fixed;
  background-color: ${theme.background};
  bottom: 0;
  left: 0;
  z-index: 10;
  padding: 10px 80px;
    @media (min-width: 800px) {
      display: none;
    }
  }`;

export const List = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    list-style: none;
    justify-content: space-between;
  }
`;
export const Links = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 60px;
  justify-content: center;
`;

export const Item = styled.li`
  &:hover {
    filter: invert(50%);
  }
`;