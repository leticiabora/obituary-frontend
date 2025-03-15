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
  color: green;
`;

// export const Button
// .action_button {
//   border: 2px solid var(--green-dark);
//   color: var(--green-dark);
//   background-color: var(--foreground);
//   &:hover {
//     filter: brightness(90%);
//   }
// }

// .main li:not(:last-of-type) {
//   margin-bottom: 8px;
// }

// .main code {
//   font-family: inherit;
//   background: var(--gray-alpha-100);
//   padding: 2px 4px;
//   border-radius: 4px;
//   font-weight: 600;
// }

// .ctas {
//   display: flex;
//   gap: 16px;
// }

// .ctas a {
//   appearance: none;
//   border-radius: 128px;
//   height: 48px;
//   padding: 0 20px;
//   border: none;
//   border: 1px solid transparent;
//   transition:
//     background 0.2s,
//     color 0.2s,
//     border-color 0.2s;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 16px;
//   line-height: 20px;
//   font-weight: 500;
// }

// a.primary {
//   background: var(--foreground);
//   color: var(--background);
//   gap: 8px;
// }

// a.secondary {
//   border-color: var(--gray-alpha-200);
//   min-width: 180px;
// }

// .footer {
//   grid-row-start: 3;
//   display: flex;
//   gap: 24px;
// }

// .footer a {
//   display: flex;
//   align-items: center;
//   gap: 8px;
// }

// .footer img {
//   flex-shrink: 0;
// }

// .form_container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   gap: 20px;
//   & > div {
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     & label {
//       display: flex;
//       flex-direction: column;
//     }
//   }
// }

// .error {
//   color: red;
// }

// /* Enable hover only on non-touch devices */
// @media (hover: hover) and (pointer: fine) {
//   a.primary:hover {
//     background: var(--button-primary-hover);
//     border-color: transparent;
//   }

//   a.secondary:hover {
//     background: var(--button-secondary-hover);
//     border-color: transparent;
//   }

//   .footer a:hover {
//     text-decoration: underline;
//     text-underline-offset: 4px;
//   }
// }

// @media (max-width: 1080) {
//   .action_container {
//     display: flex;
//     padding-top: 35px;
//     gap: 100px;
//     font-size: 20px;
//     flex-direction: column;
//     align-items: center;
//     height: 100%;
//   }
// }

// @media (max-width: 600px) {
//   .page {
//     padding: 32px;
//     padding-bottom: 80px;
//   }

//   .main {
//     align-items: center;
//   }

//   .main ol {
//     text-align: center;
//   }

//   .ctas {
//     flex-direction: column;
//   }

//   .ctas a {
//     font-size: 14px;
//     height: 40px;
//     padding: 0 16px;
//   }

//   a.secondary {
//     min-width: auto;
//   }

//   .footer {
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: center;
//   }
// }

// @media (prefers-color-scheme: dark) {
//   .logo {
//     filter: invert();
//   }
// }
