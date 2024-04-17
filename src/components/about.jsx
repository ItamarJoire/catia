import { CarouselContainer, GridContainer } from "../containers";

import ImgMentor from '/mentor.png'

export function About(){
  return(
    <section>      
      <GridContainer>
        <div className="mb-4">
          <p className="text-sm uppercase font-medium text-gray-700 md:text-lg">Conheça um pouco da sua mentora</p>
          <h2><span className="text-base-green text-xl md:text-2xl">Cátia Oliveira </span></h2>
        </div>
      <CarouselContainer />
      <div className="mt-8">
        <div>
          {/* <img src={ImgMentor} alt="" className="mb-8 rounded-md mx-auto w-[300px] md:max-w-[400px] lg:w-[360px] lg:float-right lg:ml-6 lg:mt-24"/> */}
          
          <p className="text-gray-500 text-base pt-2 md:text-lg lg:max-w-[1000px]">Renomada empresária, escritora e palestrante, emerge como uma voz inspiradora para mulheres maduras que enfrentam desafios. Com 50 anos, mãe solo e cristã dedicada, Cátia é uma especialista em Gestão Empresarial e Master Coach, desempenhando o papel de mentora para mulheres que buscam superações significativas.
          <br /><br />
          Ao coautora do livro "Legado", "A Arte de Vencer" e "Mulheres em Performance", e do E-book Mulher de Atitude, Cátia compartilha não apenas suas experiências profissionais, mas também suas superações  pessoais. Mãe de um filho de 15 anos, ela enfrentou diversos desafios, que a impulsionaram para a resiliência e superações; desde aceitação própria e baixa autoestima até lidar com luto (perda do esposo aos 36 anos, filho com um ano e 8 meses) obesidade, bloqueios em redes sociais, exposição pública, calote financeiros e dívidas.
            <br /><br />
            A própria jornada de Cátia é um testemunho poderoso de aceitação, resiliência e transformação. Desde os 14 anos, quando enfrentou os primeiros confliots de baixa autoestima e identidade, até os defafios mais recentes, ela escolheu não apenas superar, mas também se tornar uma fonte de inspiração para outras mulheres. Seu propósito claro é "inspirar e conduzir pessoas a enxergarem suas possibilidades para viverem superações."
            <br /><br />
            Cátia não apenas fala sobre superações, mas vive-as, tornando-se uma mentora dedicada a apontar o caminho para aqueles que se identificam com suas qualificações e desafios já vencidos, e outros na jornada do próximo nível. Afinal, estamos em evolução até o último dia da nossa vida. Sua mensagem clara: não se trata de facilitar ou dificultar, mas de acreditar que é possível transformar desafios em oportunidades de crescimento.
            <br /><br />
            Através de sua vasta experiência de vida, aliada aos conhecimentos de estudo e formações, ela oferece orientação e suporte para mulheres maduras que buscam encontrar leveza na vida, aceitação própria, e como vencer alguns desafios :  mudanças de profissão, resgate de sonhos, desbloqueios para vídeos e falar em público, dentre outros; mas, acima de tudo, ser inspiração para se superarem, indo sempre para o próximo nível.
            <br /><br />
            A história de Cátia é um convite para outras mulheres se reconhecerem, se fortalecerem e se guiarem em direção a uma vida plena de novos significado e superações.  
          </p>
        </div>
      </div>
      
    </GridContainer>
    </section>

  )
}