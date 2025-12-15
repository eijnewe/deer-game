import { cardUnicodes } from '@/lib/cardUnicodes'
import type { CardType } from '@/lib/deck'

export function DisplayCardSymbol({ card }: { card: CardType }) {
  const colorClass = card.color == 'red' ? 'text-red-600' : 'text-black'
  return <span className={`bg-white ${colorClass} align-top h-full`}>{cardUnicodes[card.id]}</span>
}
