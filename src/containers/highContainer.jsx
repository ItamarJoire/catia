export function HighContainer({ number, description }){
  return(
    <div>
      <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md border-[1px]"><p className="text-lg text-white font-semibold">{number}</p></div>
      <p className="mt-3 text-white md:max-w-[420px] text-base">{description}
      </p>
    </div>
  )
}