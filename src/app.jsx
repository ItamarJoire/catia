import { Hero, Highlights, Strategy, About, Investiment, Faq } from "./components"
import { Whats } from "./containers"
import { Ebooks } from "./containers/books"

export function App() {
  return (
    <>
      <Whats />

      <Hero />
      <Highlights />
      <Strategy />
      <About />
      <Investiment />
      <Ebooks />
      <Faq />
    </>
  )
}

