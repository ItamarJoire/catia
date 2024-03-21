import { GridContainer } from '../containers'

import ImgWoman from '/woman.png'
import LogoGreen from '/logo-green.png'

export function Hero(){
  return(
    <div className="bg-[url('/bg-hero.jpg')]">
      <GridContainer>
        <div className='lg:flex lg:items-center'>
          <div className='mb-16 flex flex-col'>
            <div >
              <img src={LogoGreen} alt="" className='pt-8 w-[200px] mx-auto md:w-[240px] lg:mx-0'/>
              <h1 className="font-['Poppins'] pt-10 text-4xl text-center font-semibold text-gray-800 mx-auto md:text-5xl lg:text-left lg:w-full">
              A sua jornada de superação começa agora! 
              </h1>
              <h4 className='mt-3 mb-8 text-xl text-center text-gray-500 max-auto md:text-2xl lg:text-left'>
              Recomece sua vida com uma nova perspectiva: uma mulher de atitude é madura, e disposta a se conhecer a ressignificar. 
              </h4>
            
              <a href="https://api.whatsapp.com/send?l=pt&phone=5571992360876&text=Olá! Tudo bem?" className='font-["Poppins"] block px-8 py-5 max-w-[250px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 uppercase md:text-xl md:max-w-[320px] md:px-10 md:py-6 lg:mx-0'>
                Quero me conhecer!
              </a>
            </div>
          </div>
          <img src={ImgWoman} alt="" className='mx-auto md:w-[600px] lg:size-[500px]'/>
        </div>
      </GridContainer>
    </div>
  )
}