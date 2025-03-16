'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 50px;
  position: relative;
  justify-content: center;
  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    padding: 30px;
    background-color: var(--green);
    border-radius: 30px;
    border: 2px dotted grey;
  }
`;

export const Circle = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 100%;
  border: 20px solid white;
  box-shadow: 5px 5px 10px rgba(177, 177, 177, 0.3), inset 5px 5px 10px rgba(177, 177, 177, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const CircleMobile = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

export const Step = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 50%;
  background-color: var(--green-light);
  border: 2px solid white;

  &:nth-of-type(1) {
    top: -90px;
    @media (max-width: 800px) {
      top: 0;
    }
  }

  &:nth-of-type(2) {
    right: -90px;
  }

  &:nth-of-type(3) {
    left: -90px;
    @media (max-width: 800px) {
      left: 0;
    }
  }

  @media (max-width: 800px) {
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    position: relative;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: -90px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 50%;
  background-color: var(--green-light);
  border: 2px solid white;
`;

export const Center = styled.div`
  background-color: var(--green-light);
  box-shadow: 5px 5px 5px rgba(177, 177, 177, 0.3);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
`;

export const Icon = styled.div`
  background-color: white;
  box-shadow: 5px 5px 5px rgba(177, 177, 177, 0.3);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  text-align: center;
  color: var(--green-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;
  & > p {
    font-size: 18px;
    font-weight: 600;
  }
  & > span {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    position: relative;
  }
`;
