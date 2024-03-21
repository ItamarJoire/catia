import { GridContainer } from "../containers";

import ImgCatia from '/catia.png'

export function Strategy(){
  return(
    <GridContainer>
      <div className="my-20 lg:flex lg:items-center">
        <img src={ImgCatia} alt="" className="w-[500px] h-auto mx-auto lg:mx-0 lg:size-[440px]"/>
        
        <div className="mt-8 lg:ml-8">
          <p className="mb-2 text-sm uppercase font-medium text-gray-700 md:text-lg">Como Cátia Oliveira pode te ajudar?</p>
          <h2 className="text-base-green text-xl md:text-2xl">Sou como uma Oliveira enraizada feita de fé e resiliência.</h2>
          <p className="text-gray-500 text-base md:text-lg">
          As minhas experiências vividas são bússolas nas vidas de mulheres que almejam o amadurecimento e a plenitude para superar seus limites.
          <br /><br />
          Meu propósito é te ajudar a caminhar com a orientação necessária para que suas atitudes gerem renovo.
          <br /><br />
          Como mentora de valor, irei te impulsionar a alçar voos que transformam sua vulnerabilidade em grandeza: ser mulher madura e sábia.
          <br /><br />
          Sou <span className="font-semibold">Cátia Oliveira</span>, referência em superação.
          </p>
        </div>
      </div>
    </GridContainer>
  )
}