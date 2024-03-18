import { GridContainer } from '../containers'
import ImgWoman from '/woman.png'

export function Hero(){
  return(
    <div className="bg-[url('/bg-hero.jpg')]">
      <GridContainer>
        <div className='md:flex md:items-center md:justify-around'>
          <div className='mb-12 flex flex-col '>
            <h1 className="pt-10 text-4xl text-center font-semibold text-gray-800 max-auto md:text-left md:max-w-[420px]">
              Obtenha habilidades e competências emocionais para ter força e coragem!
            </h1>
            <h4 className='mt-3 mb-8 text-lg text-center text-gray-500 max-auto md:text-left md:max-w-[420px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem accusantium necessitatibus sapiente cum. Repellat id minima deserunt et similique 
            </h4>
            <a href="#" className='px-5 py-3 max-w-[200px] mx-auto bg-gradient-to-r from-base-green to-base-yellow-dark text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0'>
              Quero mudar de vida
            </a>
          </div>
          <img src={ImgWoman} alt="" className='mx-auto md:w-auto md:h-[360px] md:mx-0 md:mt-24'/>
        </div>
      </GridContainer>
    </div>
  )
}