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
          question='O que significa ser uma mulher de atitude?'
          response='Ser uma mulher de atitude implica em ter coragem para enfrentar desafios, tomar decisões com confiança e ser proativa na busca dos seus objetivos. Envolve também a disposição para se conhecer profundamente e crescer constantemente, buscando sempre uma vida mais significativa e realizada.'
          backgroundResponse='bg-base-green-dark'
          textResponse='text-white'
        />

        <FaqContainer 
          text='text-title'
          question='Qual é o primeiro passo para começar a minha jornada de recomeço?'
          response='O primeiro passo é se comprometer consigo mesma a buscar uma nova perspectiva e um recomeço em sua vida. Isso pode envolver definir metas claras, identificar áreas que deseja mudar e estar aberta a aprender e crescer ao longo do caminho. Lembre-se de que cada passo, por menor que seja, é um progresso na direção certa.'
          backgroundResponse='bg-base-green-dark'
          textResponse='text-white'
        />
        <FaqContainer 
          text='text-title'
          question='Por que é importante recomeçar minha vida com uma nova perspectiva?'
          response='Recomeçar com uma nova perspectiva permite que você deixe para trás experiências passadas negativas e abra espaço para o crescimento pessoal e a felicidade. Isso proporciona uma oportunidade de se reinventar e alcançar seu pleno potencial.'
          backgroundResponse='bg-base-green-dark'
          textResponse='text-white'
        />
      </GridContainer>
    </div>
  )
}

