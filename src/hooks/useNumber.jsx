export const useNumber = () => {
  const formatNumber = (number) => {
    if (number === null || number === undefined) return '0';
    
    
    const numValue = Number(number);
    if (isNaN(numValue)) return '0';
    
    return new Intl.NumberFormat('es-ES', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    }).format(numValue);
  };

  return {
    formatNumber
  };
};
