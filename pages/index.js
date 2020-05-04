import { useState } from 'react'
import { Hand } from 'handy'

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

  return (
    <div className="container">
      <button onClick={addCard}>Add Card</button>
      <Hand cards={cards} />
    </div>
  )
}
