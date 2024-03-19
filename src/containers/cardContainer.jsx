import LogoGreen from '/logo-green.png'

export function CardContainer({ title, description, portion, value, inCash, link}){
  return(
    <div>
      <div className="mt-4 mx-auto bg-white border-[1px] border-solid border-base-green-light rounded-md text-center px-3 py-8 md:max-w-[540px] lg:min-h-[640px]">
      <img src={LogoGreen} alt="" className="w-[160px] mx-auto md:w-[180px]"/>
      
      <div className="mt-8 space-y-3">
        <p className="font-bold text-2xl md:text-3xl">Oferta exclusiva!</p>
        <h2 className="font-semibold text-xl md:text-2xl">{title}</h2> 
        <p className="text-gray-400 text-lg md:text-xl">{description}</p>
      </div>

      <div className="mt-4">
        <p className="text-gray-700 font-semibold text-lg md:text-xl">{portion} de <span className="text-4xl font-extrabold text-base-green-light md:text-5xl">{value}</span></p>
        <p className="text-gray-600 font-medium text-lg md:text-xl">ou {inCash} à vista</p>
      </div>
      
      <a href={`${link}`} target="_blank" className='mt-6 text-lg inline-block font-["Poppins"] px-8 py-5 max-w-[280px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase md:text-xl'>
        Adquirir agora!
      </a>
      </div>
    </div>
  )
}