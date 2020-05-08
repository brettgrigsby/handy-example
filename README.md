# react-handy-example

This is a really basic example of using the `react-handy` library to represent a hand of cards.

To see a live version of this app running visit https://handy-example.now.sh/

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

Click any card to pick it up, and click it again to execute its onClick function. In the case of this example app,
it removes the card from your hand if the `position.y` is small enough to be above the line on the page.

---

#### A hand of cards:

<img width="360" alt="fullhand" src="https://user-images.githubusercontent.com/39804412/81449835-be9e3900-9146-11ea-93ff-90b9780762cd.png">

---

#### Hovering over one card:

<img width="360" alt="cardhover" src="https://user-images.githubusercontent.com/39804412/81449839-c1009300-9146-11ea-8d60-ccc4beb635a2.png">

---

#### After clicking a card to pick it up:

<img width="360" alt="cardheld" src="https://user-images.githubusercontent.com/39804412/81449848-c52cb080-9146-11ea-87ab-f5a9de4382a4.png">

---

#### After card has been played above the line:

<img width="360" alt="cardgone" src="https://user-images.githubusercontent.com/39804412/81449857-c958ce00-9146-11ea-8345-263e0054449f.png">

---

### NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).


