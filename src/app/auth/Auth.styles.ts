'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 100%;
  gap: 20px;
  & > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    & label {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 800px) {
    & > form {
      width: 100%;
    }
  }
`;

export const LoginLink = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
`;

export const Error = styled.p`
  color: red;
`;
