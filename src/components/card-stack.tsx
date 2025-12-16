import type { CardType } from '@/lib/deck'
import { PlayingCard } from './playing-card'
import { DraggableCard } from './draggable.card'

type CardStackProps = {
  deck: CardType[]
}

export function CardStack({ deck }: CardStackProps) {
  return (
    <div className="carddeck relative w-50 h-70 scale-75">
      {deck.map((card, index) => {
        const isTop = index === 0 // if last = top
        return (
          <div
            key={card.id}
            className={`
            absolute
          `}
            style={{
              zIndex: deck.length - index,
              top: index * 0.5,
              left: index * -0.5,
              pointerEvents: isTop ? 'auto' : 'none',
            }}
          >
            {isTop ?
              <DraggableCard card={card} />
            : <PlayingCard card={card} faceDown />}
          </div>
        )
      })}
    </div>
  )
}
