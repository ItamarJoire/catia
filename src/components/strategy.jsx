import { GridContainer } from "../containers";

import ImgCatia from '/catia.png'

export function Strategy(){
  return(
    <GridContainer>
      <div className="my-20 lg:flex lg:items-center">
        <img src={ImgCatia} alt="" className="w-[500px] h-auto mx-auto lg:mx-0 lg:size-[440px]"/>
        
        <div className="mt-8 lg:ml-8">
          <p className="mb-2 text-sm uppercase font-medium text-gray-700 md:text-lg">Como Cátia Oliveira pode te ajudar?</p>
          <h2 className="text-base-green text-xl md:text-2xl">Sou como uma Oliveira enraizada na fé e resiliência.</h2>
          <p className="text-gray-500 text-base md:text-lg">
          As minhas experiências vívidas podem ser  bússolas na vida de outras mulheres que almejam, realinhar ou descobrir sua real essência, fortalecer sua identidade e o crescimento para superar seus limites e ir além.
          <br /><br />
          Meu objetivo é ajudá-la apontando o caminho com a orientação, ferramentas eficazes e acompanhamento necessário para que suas habilidades sejam desenvolvidas e fortalecidas.
          <br /><br />
          Como mentora, já trilhei longos caminhos, tenho resultados de valor, e transfiro decisões que transformaram minha vulnerabilidades em grandeza: ser uma mulher madura na minha essência, vivendo a missão e cumprindo um propósito. 
          <br /><br />
          Sou Cátia Oliveira, referência em superação.
          </p>
        </div>
      </div>
    </GridContainer>
  )
}