import { GridContainer } from '../containers'

import ImgWoman from '/woman.png'
import LogoGreen from '/logo-green.png'

export function Hero(){
  return(
    <div className="bg-[url('/bg-hero.jpg')]">
      <GridContainer>
        <div className=''>
          <img src={LogoGreen} alt="" className='pt-8 w-[200px] mx-auto md:w-[240px]'/>
          <div className='mb-16 flex flex-col'>
            <h1 className="font-['Poppins'] pt-10 text-4xl text-center font-semibold text-gray-800 mx-auto md:text-5xl">
              Obtenha habilidades e competências emocionais para ter força e coragem!
            </h1>
            <h4 className='mt-3 mb-8 text-xl text-center text-gray-500 max-auto md:text-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem accusantium necessitatibus sapiente cum. Repellat id minima deserunt et similique 
            </h4>
            <a href="#" className='font-["Poppins"] px-8 py-5 max-w-[280px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 uppercase md:text-xl md:max-w-[320px] md:px-10 md:py-6'>
              Quero mudar de vida!
            </a>
          </div>
          <img src={ImgWoman} alt="" className='mx-auto md:w-[600px]'/>
        </div>
      </GridContainer>
    </div>
  )
}