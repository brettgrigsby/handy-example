import { useState } from 'react'
import { Hand } from 'react-handy'

const STARTING_CARDS = [
  { id: 'starting', imgSrc: './atst.jpg' },
  { id: 'cards', cardText: 'Card with text supplied instead of an image' },
  { id: 'are', imgSrc: './f11d.jpg' },
  { id: 'cool' },
]

const IMG_URLS = [
  './atst.jpg',
  './f11d.jpg',
  './grievous.jpg',
  './phasma.jpg',
  './presence.jpg',
  './tfighter.jpg',
  './trooper.jpg',
  './veers.jpg'
]

export default function Home() {
  const [cards, setCards] = useState(STARTING_CARDS)
  const [nextId, setNextId] = useState(0)

  const addCard = () => {
    const randoUrl = IMG_URLS[Math.floor(Math.random() * IMG_URLS.length)]
    const newCard = { id: nextId.toString(), imgSrc: randoUrl }
    setCards([...cards.slice(0), newCard])
    setNextId(nextId + 1)
  }

  // attach a simple function to each card to remove the card from your hand
  for (let card of cards) {
    card.handleClick = (id) => setCards(cards.filter(c => c.id !== id))
  }

  return (
    <div className="container">
      <button onClick={addCard}>Add Random Card</button>
      <Hand cards={cards} />
    </div>
  )
}
