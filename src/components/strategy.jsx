import { GridContainer } from "../containers";

import ImgCatia from '/catia.png'

export function Strategy(){
  return(
    <GridContainer>
      <div className="my-20 lg:flex lg:items-center">
        <img src={ImgCatia} alt="" className="w-[500px] h-auto mx-auto lg:mx-0 lg:size-[440px]"/>
        
        <div className="mt-8 lg:ml-8">
          <p className="text-sm uppercase font-medium text-gray-700 md:text-lg">Como Cátia Oliveira pode te ajudar?</p>
          <h2><span className="text-base-green text-xl md:text-2xl">Aplicar as estratégias corretas me ajudou a </span>...</h2>
          <p className="text-gray-500 text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat blanditiis atque magni voluptatem. Similique, odio temporibus velit consectetur dolor minima veniam culpa repellat laborum! Nihil esse ea sequi rem.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat blanditiis atque magni voluptatem. Similique, odio temporibus velit consectetur dolor minima veniam culpa repellat laborum! Nihil esse ea sequi rem.
          <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat blanditiis atque magni voluptatem. Similique, odio temporibus velit consectetur dolor minima veniam culpa repellat laborum! Nihil esse ea sequi rem.
          </p>
        </div>
      </div>
    </GridContainer>
  )
}