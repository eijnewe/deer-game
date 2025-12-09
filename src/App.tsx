import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

function App() {
    const [count, setCount] = useState(0)

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {/* {children} */}
            <Button>testbutton</Button>
            <p>jcosvoejvpjpjwvpvj</p>
            <ModeToggle></ModeToggle>
        </ThemeProvider>
    )
}

export default App
