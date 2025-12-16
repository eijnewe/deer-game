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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from './ui/item'
import { ButtonGroup } from './ui/button-group'
import { History } from 'lucide-react'
import { UsedCardFan } from './card-fan'
import { DndContext } from '@dnd-kit/core'
import { CardStack } from './card-stack'

export function GameBoard() {
  const [deck, setDeck] = useState<CardType[]>(() => shuffleDeck(createDeck()))
  const [currentCard, setCurrentCard] = useState<CardType | null>(null)
  const [history, setHistory] = useState<CardType[]>([])

  const currentRule = currentCard ? rules[currentCard.rank] : null

  function drawCard() {
    if (deck.length === 0) return
    const next = deck[0]

    setCurrentCard(next)
    setHistory((prev) => [...prev, next])
    setDeck(deck.slice(1)) // removes the first card
  }

  return (
    <main>
      <div>Cards left: {deck.length}</div>
      <div>Last drawn: {currentCard?.id}</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {[...history].reverse().map((card) => (
          <div key={card.id} className="px-3 py-2 border rounded text-sm">
            {card.id}
          </div>
        ))}
      </div>

      <ButtonGroup>
        <Drawer>
          <DrawerTrigger asChild>
            <Button onClick={drawCard}>Draw Card</Button>
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
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <History />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>History</SheetTitle>
              <SheetDescription>Previously drawn cards</SheetDescription>
            </SheetHeader>
            <ItemGroup>
              {[...history].reverse().map((card) => {
                const rule = rules[card.rank]
                const colorClass =
                  card.color == 'red' ? 'text-red-600' : 'text-black'

                return (
                  /*   <div key={card.id} className="px-3 py-2 border rounded text-sm">
              {card.id}
            </div> */
                  <Item key={card.id}>
                    <ItemMedia className={`${colorClass}`}>
                      {card.rank} {card.suit}
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{rule.title}</ItemTitle>
                      <ItemDescription>{rule.description}</ItemDescription>
                    </ItemContent>
                  </Item>
                )
              })}
            </ItemGroup>
          </SheetContent>
        </Sheet>
      </ButtonGroup>

      <DndContext
        onDragEnd={(event) => {
          const { active, over } = event
          if (over?.id === 'used-fan') {
            const cardId = active.id
            const card = deck.find((c) => c.id === cardId)
            if (card) {
              setDeck(deck.filter((c) => c.id !== cardId))
              setHistory((prev) => [...prev, card])
            }
          }
        }}
      >
        <CardStack deck={deck}></CardStack>
        <UsedCardFan cards={history}></UsedCardFan>
      </DndContext>
    </main>
  )
}
