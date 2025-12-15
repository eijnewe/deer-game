import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'
import { ModeToggle } from './mode-toggle'
import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1>🦌 DeerGame</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link to={'/'}>Play</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
            <Link to='/rules'>Rules</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle></ModeToggle>
    </header>
  )
}
