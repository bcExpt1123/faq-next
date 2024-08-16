This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project

### Description

Objective

Create a responsive FAQ (Frequently Asked Questions) page in Next.js that displays a list of questions and answers. The page should allow users to search through the questions, and each question should be able to expand or collapse to show or hide its answer. The entire solution must be implemented in a single file using Tailwind CSS for styling.

Requirements

Static Route:

Create a page at `/faq` that displays a list of FAQ items.
Each FAQ item should consist of a question and an answer.
Simulated FAQ Data:

Use a local array of objects to simulate the FAQ data.
Each FAQ object should have a question and an answer.
Search Functionality:

Implement a search bar at the top of the page that filters the FAQ items based on the text input.
The search should be case-insensitive and should match the search term against the questions.
Accordion Functionality:

Each FAQ question should be clickable to toggle the visibility of the answer.
When a question is clicked, the corresponding answer should expand below it.
If the question is clicked again, the answer should collapse.
Responsive Design:

The page should be fully responsive and look good on both desktop and mobile devices.
Use Tailwind CSS for all styling.
Bonus Challenges

Expand/Collapse All: Add buttons to expand or collapse all FAQ items at once.
Persist Search State: Save the user's search query in the URL so that it persists across page reloads.
Example Submission

Your submission should be a single .js file containing:

A functional Next.js page at `/faq`.
All necessary code to implement the FAQ accordion with search functionality.
Styling implemented with Tailwind CSS directly in the file.

Example FAQ Data

```ecmascript 6
const faqs = [
    { question: 'What is Next.js?', answer: 'Next.js is a React framework for building web applications.' },
    { question: 'How does Tailwind CSS work?', answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.' },
    { question: 'What is the purpose of getStaticProps?', answer: 'getStaticProps is used to fetch data at build time in Next.js.' },
];
```
