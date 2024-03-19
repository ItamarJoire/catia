import { useState } from "react"

export function FaqContainer({question, response, backgroundResponse, text, textResponse}){
  const [open, setOpen] = useState(false)

  return(
    <div className="md:mx-8 ">
      <h2>
        <button onClick={() => setOpen(!open)} type="button" className="flex items-center justify-between w-full p-5 font-medium"> 
          <span className={`${text} text-left text-lg md:text-xl`}>{question}</span>
          <svg   className={`w-3 h-3 md:size-3 ${open ? 'rotate-180' : 'rotate-90'} shrink-0 duration-75`} aria-hidden="true" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>

      <div className={`${open ? 'block' : 'hidden'}`}>
        <div className={`p-5 border border-b-0 ${backgroundResponse} rounded-md`}>
          <p className={`mb-2 ${textResponse} text-base leading-7 md:text-xl`}>{response}</p>
        </div>
      </div>
    </div>
  )
}