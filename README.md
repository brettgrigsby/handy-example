# react-handy-example

This is a really basic example of using the `react-handy` library to represent a hand of cards.

## Getting Started

Install the dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see react-handy in action.

Hit the `Add Random Card` button to add a random card from the set to your hand.

Click any card to execute its on click function. In the case of this example app, it removes the card
from your hand if the `position.y` is small enough to be above the line on the page.

### NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).
