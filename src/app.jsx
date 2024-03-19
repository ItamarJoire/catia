import { Hero, Highlights, Strategy, About, Investiment, Faq } from "./components"
import { Whats } from "./containers"

export function App() {
  return (
    <>
      <Whats />

      <Hero />
      <Highlights />
      <Strategy />
      <About />
      <Investiment />
      <Faq />
    </>
  )
}

