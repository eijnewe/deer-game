import { type CardType, createDeck, shuffleDeck } from '@/lib/deck'
import { useState } from 'react'
import { Button } from './ui/button'
import { PlayingCard } from './playing-card'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'
import { rules } from '@/data/rules'

export function GameBoard() {
  const [deck, setDeck] = useState<CardType[]>(() => shuffleDeck(createDeck()))
  const [currentCard, setCurrentCard] = useState<CardType | null>(null)
  const [history, setHistory] = useState<CardType[]>([])

  const currentRule = currentCard ? rules[currentCard.rank] : null
  const usedStack = history.slice(-5).reverse()

  function drawCard() {
    if (deck.length === 0) return
    const next = deck[0]

    setCurrentCard(next)
    setHistory((prev) => [...prev, next])
    setDeck(deck.slice(1)) // removes the first card
  }

  return (
    <main>
      <Button onClick={drawCard}>Draw CardType</Button>
      {currentCard && <div>{currentCard.id}</div>}
      <div>Cards left: {deck.length}</div>
      <div>Last drawn: {currentCard?.id}</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {history.map((card) => (
          <div key={card.id} className="px-3 py-2 border rounded text-sm">
            {card.id}
          </div>
        ))}
      </div>
      <div className="relative w-40 aspect-[5/7] ml-40">
        {usedStack.map((card, index) => (
          <div
            key={card.id}
            className="absolute top-0 left-0 origin-bottom-right transition-transform"
            style={{
              transform: `
           translate(${index * -10}px, ${index * -6}px)
          rotate(${index * -10}deg)
        `,
              zIndex: usedStack.length - index,
            }}
          >
            <PlayingCard card={card} faceDown={false} />
          </div>
        ))}
      </div>

      <Drawer>
        <DrawerTrigger asChild>
          <Button onClick={drawCard}>Draw CardType</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{currentRule?.title}</DrawerTitle>
            <DrawerDescription>{currentRule?.description}</DrawerDescription>
          </DrawerHeader>
          <div className="self-center">
            <PlayingCard card={currentCard} faceDown={false}></PlayingCard>
          </div>
          <DrawerFooter>
            <Button>Keep</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  )
}
