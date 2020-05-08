import { useState } from 'react'
import { Hand } from 'react-handy'

const STARTING_CARDS = [
  { id: 'starting', imgSrc: './atst.jpg' },
  { id: 'cards', cardText: 'Card with text supplied instead of an image' },
  { id: 'are', imgSrc: './2_of_hearts.png' },
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
  './veers.jpg',
  './2_of_hearts.png'
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
  // if it is played high enough on the page
  for (let card of cards) {
    card.handleClick = ({id, position}) => {
      if (position.y < 420) setCards(cards.filter(c => c.id !== id))
    }
  }

  return (
    <div className="container">
      <button onClick={addCard}>Add Random Card</button>
      <div style={{ height: 400, borderBottom: '2px solid black', width: '100%'}}>
        Play card above the line to remove it from hand
      </div>
      <Hand cards={cards} height={500} />
    </div>
  )
}
