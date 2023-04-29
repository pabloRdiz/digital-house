export const formatLogDate = (date: string) => {
  return new Intl.DateTimeFormat('es', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('es').format(value);
};
