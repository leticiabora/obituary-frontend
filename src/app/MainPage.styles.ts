'use client';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: start;
  justify-items: center;
  height: 100%;
  font-family: var(--font-quicksand);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  grid-row-start: 2;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  & > h3 {
    font-size: 30px;
  }
`;

export const Title = styled.h1`
  display: flex;
  gap: 10;
  font-size: 80px;
  align-items: center;
  justify-content: center;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  gap: 100px;
  font-size: 20px;
  height: 100%;
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Subtitle = styled.span`
  font-style: italic;
  color: ${({ theme }) => theme.colors.green.dark};
`;