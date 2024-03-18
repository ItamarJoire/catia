import { GridContainer } from "../containers";

import ImgCatia from '/catia.png'

export function Strategy(){
  return(
    <GridContainer>
      <div className="my-16 md:flex md:justify-around">
        <img src={ImgCatia} alt="" className="w-[600px] h-auto mx-auto md:mx-0"/>
        
        <div className="mt-4">
          <p className="text-sm uppercase font-light text-gray-700">Como Cátia Oliveira pode te ajudar?</p>
          <h2><span className="text-base-green text-xl">Aplicar as estratégias corretas</span>...</h2>
          <p className="text-gray-600 md:max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum placeat blanditiis atque magni voluptatem. Similique, odio temporibus velit consectetur dolor minima veniam culpa repellat laborum! Nihil esse ea sequi rem.
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