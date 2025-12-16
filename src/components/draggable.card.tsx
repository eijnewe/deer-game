import { useDraggable } from '@dnd-kit/core'
import type { CardType } from '@/lib/deck'
import { PlayingCard } from './playing-card'

export function DraggableCard({ card }: { card: CardType }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  })

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: 'grab',
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <PlayingCard card={card} faceDown/>
    </div>
  )
}
