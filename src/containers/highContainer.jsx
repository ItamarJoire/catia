export function HighContainer({ number, description }){
  return(
    <div className="">
      <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md"><p className="text-lg text-white font-semibold">{number}</p></div>
      <p className="mt-2 text-white md:max-w-[320px]">{description}
      </p>
    </div>
  )
}