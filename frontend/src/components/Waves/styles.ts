import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const Wave = styled.Image `
    height: 250px;
    width: 100%
`

// export const Wave = styled.View`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100px;
//   background-image: url("./wave.png");
//   background-size: 1000px 100px;
// `;

// export const Wave1 = styled(Wave)`
//   animation: ${keyframes`
//     0% {
//       background-position-x: 0;
//     }
//     100% {
//       background-position-x: 1000px;
//     }
//   `} 30s linear infinite;
//   z-index: 1000;
//   opacity: 1;
//   animation-delay: 0s;
// `;

// export const Wave2 = styled(Wave)`
//   animation: ${keyframes`
//     0% {
//       background-position-x: 0;
//     }
//     100% {
//       background-position-x: -1000px;
//     }
//   `} 15s linear infinite;
//   z-index: 999;
//   opacity: 0.5;
//   animation-delay: -5s;
//   bottom: 10px;
// `;

// export const Wave3 = styled(Wave)`
//   animation: ${keyframes`
//     0% {
//       background-position-x: 0;
//     }
//     100% {
//       background-position-x: 1000px;
//     }
//   `} 15s linear infinite;
//   z-index: 998;
//   opacity: 0.2;
//   animation-delay: -2s;
//   bottom: 15px;
// `;

// export const Wave4 = styled(Wave)`
//   animation: ${keyframes`
//     0% {
//       background-position-x: 0;
//     }
//     100% {
//       background-position-x: -1000px;
//     }
//   `} 15s linear infinite;
//   z-index: 997;
//   opacity: 0.7;
//   animation-delay: -5s;
//   bottom: 20px;
// `;