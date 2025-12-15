import { type CardType } from '@/lib/deck'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { rules } from '@/data/rules'
import { DisplayCardSymbol } from './cardSymbol'
type PlayingCardProps = {
  card?: CardType | null
  faceDown?: boolean
}

export function PlayingCard({ card, faceDown = false }: PlayingCardProps) {
  if (!card) return
  const rule = rules[card.rank]
  return (
    <Card>
      <CardHeader>
        <CardTitle>{rule.title}</CardTitle>
        <CardDescription>{rule.description}</CardDescription>
        <CardAction><p>{card.rank}</p><p>{card.suit}</p></CardAction>
      </CardHeader>
      <CardContent className={`text-9xl self-center p-0`}>
        <DisplayCardSymbol card={card}></DisplayCardSymbol>
      </CardContent>
      <CardFooter>
        {card.suit}{card.id}
      </CardFooter>
    </Card>
  )
}
