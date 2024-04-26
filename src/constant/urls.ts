export const urls = {
  country: {
    list: 'all',
    details: (name: string) => `name/${name}`,
  },
} as const;
