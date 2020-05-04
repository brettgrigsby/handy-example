import { useState } from 'react'
import { Hand } from 'react-handy'

const CARDS = [
  { imgSrc: './atst.jpg' },
  { cardText: 'Card with text supplied instead of an image' },
  { imgSrc: './f11d.jpg' },
  {},
  { imgSrc: './grievous.jpg' },
  { imgSrc: './phasma.jpg' },
  { imgSrc: './presence.jpg' },
  { imgSrc: './tfighter.jpg' },
  { imgSrc: './trooper.jpg' },
  { imgSrc: './veers.jpg' },
]

export default function Home() {
  const [cards, setCards] = useState(CARDS.slice(0,4))

  const addCard = () => setCards([ ...cards, CARDS[Math.floor(Math.random() * CARDS.length)]])

  // attach a simple function to each card to remove the card from your hand
  for (let card of cards) {
    card.handleClick = (id) => setCards(cards.filter((c, i) => i !== id))
  }

  return (
    <div className="container">
      <button onClick={addCard}>Add Random Card</button>
      <Hand cards={cards} />
    </div>
  )
}
