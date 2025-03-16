'use client';

import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
    @media (max-width: 800px) {
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
  border-bottom: 1px solid transparent;
`;