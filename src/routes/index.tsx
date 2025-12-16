import { GameBoard } from '@/components/game-board'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { createFileRoute } from '@tanstack/react-router'
import {  Settings, UserPen } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/"! index
      <ButtonGroup>
        <Button>new game</Button>
        <Button>
          <UserPen /> players
        </Button>
        <Button>
          <Settings /> settings
        </Button>
      </ButtonGroup>
      <GameBoard></GameBoard>
    </div>
  )
}
