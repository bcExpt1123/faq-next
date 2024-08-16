export type IFAQ = {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_LIST: IFAQ[] = [
  {
    id: '1',
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework for building web applications.'
  },
  {
    id: '2',
    question: 'How does Tailwind CSS work?',
    answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.'
  },
  {
    id: '3',
    question: 'What is the purpose of getStaticProps?',
    answer: 'getStaticProps is used to fetch data at build time in Next.js.'
  },
];