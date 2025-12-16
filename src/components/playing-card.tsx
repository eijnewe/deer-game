import { type CardType } from '@/lib/deck'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { rules } from '@/data/rules'
import { useState } from 'react'
type PlayingCardProps = {
  card?: CardType | null
  faceDown?: boolean
}

export function PlayingCard({ card, faceDown = false }: PlayingCardProps) {
  const [flipped, setFlipped] = useState(faceDown)
  if (!card) return
  const rule = rules[card.rank]
  const colorClass = card.color == 'red' ? 'text-red-600' : 'text-black'
  return (
    <div
      className="w-50 aspect-5/7 perspective cursor-pointer"
      onClick={() => {
        setFlipped(!flipped)
      }}
    >
      <div
        className={`relative w-full h-full backface-hidden duration-500 transform-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        <Card
          className={`${colorClass} absolute inset w-full h-full backface-hidden justify-between text-xl`}
        >
          <CardHeader className="justify-start">
            <div className="flex flex-col items-center">
              <p>{card.rank}</p>
              <p>{card.suit}</p>
            </div>
          </CardHeader>
          <CardContent className={`self-center text-6xl`}>
            {/*   <DisplayCardSymbol card={card}></DisplayCardSymbol> */}
            {card.suit}
          </CardContent>
          <CardFooter className="justify-end">
            <div className="flex flex-col items-center rotate-180">
              <p>{card.rank}</p>
              <p>{card.suit}</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500 text-white flex items-center justify-center text-4xl">
          🂠 {/* Or any back pattern */}
        </Card>
      </div>
    </div>
  )
}
