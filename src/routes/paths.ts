export const paths = {
  countries: {
    root: '/countries',
    details: (name: string) => `/countries/${name}`,
  },
} as const;
