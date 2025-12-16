import { PlayingCard } from './playing-card'
import type { CardType } from '@/lib/deck'
import { useDroppable } from '@dnd-kit/core'

type UsedCardFanProps = {
  cards: CardType[]
}

export function UsedCardFan({ cards }: UsedCardFanProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'used-fan', // unique ID for this drop zone
  })
  const visible = cards.slice(-5) // last 5 cards
  const fanClasses = [
    'group-hover:-translate-x-16 group-hover:-rotate-15', // far left
    'group-hover:-translate-x-8 group-hover:-rotate-7', // left
    'group-hover:translate-x-0 group-hover:rotate-0', // middle
    'group-hover:translate-x-8 group-hover:rotate-7', // right
    'group-hover:translate-x-16 group-hover:rotate-15', // far right
  ]

  return (
    <div
      ref={setNodeRef}
      className={`flex justify-center p-4 border-2 rounded-md transition-colors ${
        isOver ? 'border-green-500 bg-green-50' : 'border-gray-300'
      }`}
    >
      <div className="relative w-50 aspect-5/7 scale-75 group">
        {visible.map((card, index) => (
          <div
            key={card.id}
            className={`
              absolute top-0 left-0 origin-bottom-center
              transition-transform duration-300
              ${fanClasses[index]}
            `}
            style={{ zIndex: index }}
          >
            <PlayingCard card={card} />
          </div>
        ))}
      </div>
    </div>
  )
}
