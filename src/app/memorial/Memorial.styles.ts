'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Memory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Detail = styled.p`
  font-weight: 800;
  color: var(--green);
  border: 1px solid transparent;
  text-align: center;
  width: fit-content;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid var(--green);
  }
`;

export const Title = styled.h3`
  color: #000;
  text-align: center;
`
