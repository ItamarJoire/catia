import { GridContainer, FaqContainer } from "../containers";


export function Faq(){
  return(
    <div className="my-24">
      <GridContainer>
        <div>
          <p className="text-sm uppercase font-medium text-gray-700  md:text-lg">Perguntas frequentes</p>
          <h2 className="text-base-green text-xl md:text-2xl">Conheça as dúvidas mais frequentes</h2>
        </div>
        <FaqContainer 
            text='text-title'
            question='Pergunta 01?'
            response='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae excepturi necessitatibus, placeat dolor eaque molestiae illo itaque maiores odio sunt! Ullam cumque quis consequuntur maiores ipsam magni voluptatum non?'
            backgroundResponse='bg-gray-800'
            textResponse='text-white'
          />
      </GridContainer>
    </div>
  )
}

