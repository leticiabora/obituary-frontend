'use client';

import Form from 'next/form';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 15px;
`;

export const FormLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > label {
    display: flex;
    flex-direction: column;
  }
  & > p {
    color: red;
  }
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
`;
