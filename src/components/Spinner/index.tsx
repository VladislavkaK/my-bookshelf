import React, { memo } from 'react';
import styled from '@emotion/styled/macro';
import { FaSpinner } from 'react-icons/fa';
import { keyframes } from '@emotion/core';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const SpinnerStyled = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`
});

const Spinner = () => {
  return (
    <SpinnerStyled
      aria-label="loading"
    />
  );
};

export default memo(Spinner);
