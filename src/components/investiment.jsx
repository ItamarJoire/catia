import { GridContainer } from "../containers"

import LogoGreen from '/logo-green.png'

export function Investiment(){
  return(
    <GridContainer>
      <div className="mt-16 mb-12">
        <div>
          <p className="text-sm uppercase font-light text-gray-700">Investimento</p>
          <p>Conheça nossos produtos</p>
        
          <div className="mt-4 bg-white border-2 border-gradient-to-r from-base-green to-base-yellow rounded-md text-center px-3 py-6">
            <img src={LogoGreen} alt="" className="w-[160px] mx-auto"/>
            
            <div className="space-y-3">
              <p className="font-bold text-xl">Oferta exclusiva!</p>
              <h2 className="font-semibold">E-book - Mulher de atitude (por Cátia Oliveira)</h2> 
              <p className="text-gray-400">Embarque em uma jornada transformadora rumo à descoberta da verdadeira essência da mulher de atitude!</p>
            </div>

            <div className="mt-4">
              <p className="text-gray-700 font-semibold">6x de <span className="text-4xl font-extrabold text-base-green-light">R$5,03</span></p>
              <p className="text-gray-600 font-medium">ou R$27,00 à vista</p>
            </div>
          </div>
        </div>
      </div>
    </GridContainer>
  )
}