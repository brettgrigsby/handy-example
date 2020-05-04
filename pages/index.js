import Head from 'next/head'
import { Hand } from 'handy'

const cards =[
  { image: 'image-url' },
  { image: 'image-url' },
  { image: 'image-url' },
]

export default function Home() {
  return (
    <div className="container">
      <Hand cards={cards} />
    </div>
  )
}
