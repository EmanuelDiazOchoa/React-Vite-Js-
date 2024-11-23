import { useState } from 'react';

export const useNumber = () => {
  const formatNumber = (number) => {
    if (!number) return '0';
    
    return new Intl.NumberFormat('es-ES').format(number);
  };

  return {
    formatNumber
  };
};
