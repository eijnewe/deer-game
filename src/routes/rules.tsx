import React from 'react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { rules } from '@/data/rules'
import { ranks } from '@/lib/deck'
import { cardUnicodes } from '@/lib/cardUnicodes'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export const Route = createFileRoute('/rules')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center">Rules</h1>
      <article>
        <section className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 my-4">
          <h2 className="text-xl font-semibold mb-2">How to Play</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Gather 3 or more players and a deck of cards. Shuffle the deck and
            place it face down in the center.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Players take turns drawing one card at a time and follow the rule
            corresponding to the card's rank.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            The game continues until all cards are drawn or the players decide
            to stop.
          </p>
        </section>
        <section>
          <h3>Ruleset</h3>
          <ToggleGroup type="single" variant={'outline'}>
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>

          <ItemGroup>
            {ranks.map((rank) => {
              const rule = rules[rank]
              if (!rule) return null
              const cardId = `${rank}♠` // pick spades for icon
              return (
                <React.Fragment key={rank}>
                  <Item key={rank}>
                    <ItemHeader className="justify-center text-9xl">
                      {/* Optional: display card unicode in header */}
                      {cardUnicodes[cardId]}
                    </ItemHeader>
                    <ItemMedia variant={'icon'}>{rank}</ItemMedia>
                    <ItemContent>
                      <ItemTitle>{rule.title}</ItemTitle>
                      <ItemDescription>{rule.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Button size={'icon'}>
                        <Pencil></Pencil>
                      </Button>
                    </ItemActions>
                  </Item>
                  {rank !== 'K' && <ItemSeparator />}
                </React.Fragment>
              )
            })}
          </ItemGroup>
        </section>
      </article>
    </main>
  )
}
