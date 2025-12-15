export const suits = ['♠', '♥', '♦', '♣'] as const
export type Suit = (typeof suits)[number]

export const ranks = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
] as const

export type Rank = (typeof ranks)[number]
export type CardType = {
  id: string
  rank: Rank
  suit: Suit
  color: 'red' | 'black'
  value: number
}

const suitColors: Record<string, 'red' | 'black'> = {
  '♥': 'red',
  '♦': 'red',
  '♠': 'black',
  '♣': 'black',
}

const rankValues: Record<string, number> = {
  A: 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  J: 11,
  Q: 12,
  K: 13,
}

export function createDeck(): CardType[] {
  return suits.flatMap((suit) =>
    ranks.map((rank) => ({
      id: `${rank}${suit}`,
      rank,
      suit,
      color: suitColors[suit],
      value: rankValues[rank],
    }))
  )
}

export function shuffleDeck(deck: CardType[]): CardType[] {
  const copy = [...deck]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
