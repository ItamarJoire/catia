import { useState, useEffect } from "react"

import ImgWhats from '/whats-float.svg'

export function Whats(){
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShowScrollTopButton(true)
      }
      else {
        setShowScrollTopButton(false)
      }
    })
  }, [])

  return(
    <>
      {showScrollTopButton && 
        <a className="fixed bottom-3 right-3 z-50" href="https://api.whatsapp.com/send?l=pt&phone=5571992360876&text=Olá! Tudo bem?" target="_blank">
          <img src={ImgWhats} alt="" className="size-16"/>
        </a>
      }
    </>
  )
}