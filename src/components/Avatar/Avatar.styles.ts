'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ImageContainer = styled(Image)`
  display: flex;
  border-radius: 20%;
  border: 5px groove var(--green-light);
`;

export const Memory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LinkContainer = styled(Link)`
  font-weight: 800;
  color: var(--green);
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
  }
`;