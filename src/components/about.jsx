import { GridContainer } from "../containers";

import ImgMission from '/catia/mission.jpg'
import ImgQualification from '/catia/qualification.jpg'
import ImgPillars from '/catia/pillars.jpg'
import ImgMentor from '/mentor.png'

export function About(){
  return(
    <section>      
      <GridContainer>
        <div className="mb-4">
          <p className="text-sm uppercase font-medium text-gray-700 md:text-lg">Conheça um pouco da sua mentora</p>
          <h2><span className="text-base-green text-xl md:text-2xl">Cátia Oliveira </span></h2>
        </div>
        <div className="">
          <div className="mt-8">
            <div>
              <div className="space-y-6 lg:hidden">
                <div className="bg-white border-[1px] rounded-md border-base-green-light border-opacity-60 p-3">
                  <img src={ImgMission} alt="" className="mb-3 object-cover rounded-md mx-auto  md:max-w-[400px] lg:w-[360px] lg:float-right lg:ml-6 lg:mt-24"/>
                  <p className="text-gray-500 text-base pt-2 md:text-lg lg:max-w-[1000px]">
                    Olá! Sou Cátia Oliveira, uma mulher de 50 anos, cheia de experiências e paixões que moldaram minha vida e minha carreira. Sou cristã e mãe de um filho incrível de 15 anos, que é uma das minhas maiores alegrias e fontes de motivação.
                    <br /><br />
                    Como mentora de mulheres e palestrante, tenho a honra de compartilhar minha jornada e conhecimentos com outras mulheres que buscam crescer e se destacar. Minha trajetória em liderança de pessoas começou há 35 anos, e desde então tenho me dedicado a ajudar mulheres a encontrar seu propósito e alcançar seus objetivos.
                  </p>          
                </div>

                <div className="bg-white border-[1px] rounded-md border-base-yellow-dark-2 border-opacity-60 p-3">
                  <img src={ImgQualification} alt="" className="mb-3 object-cover rounded-md mx-auto  md:max-w-[400px] lg:w-[360px] lg:float-right lg:ml-6 lg:mt-24"/>
                  <p className="text-gray-500 text-base pt-2 md:text-lg lg:max-w-[1000px]">
                    Sou empreendedora por natureza, sempre buscando inovações e oportunidades para me reinventar. 
                    <br /><br />
                    Minha formação em assistência social e MBA em gestão empresarial me deram uma base sólida para entender as necessidades das pessoas e criar estratégias eficazes para o sucesso.
                  </p>          
                </div>

                <div className="bg-white border-[1px] rounded-md border-base-green border-opacity-60 p-3">
                  <img src={ImgPillars} alt="" className="mb-3 object-cover rounded-md mx-auto  md:max-w-[400px] lg:w-[360px] lg:float-right lg:ml-6 lg:mt-24"/>
                  <p className="text-gray-500 text-base pt-2 md:text-lg lg:max-w-[1000px]">
                    Sou uma pessoa comunicativa, determinada e minha fé é um pilar fundamental em minha vida. Acredito em cuidar não apenas do corpo, mas também da mente, para que possamos enfrentar os desafios com força e equilíbrio. 
                    <br /><br />
                    Estou aqui para ajudá-la a descobrir seu potencial e guiá-la em sua jornada.
                  </p>          
                </div>
              </div>

              <div className="hidden lg:grid lg:space-y-10">
                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:p-4 bg-white border-[1px] rounded-md border-base-green-light border-opacity-60 p-3">
                  <img src={ImgMission} alt="" className="mb-3 object-cover rounded-md mx-auto  d:max-w-[400px] lg:mb-0 lg:w-[360px] lg:float-right"/>
                  <p className="text-gray-500 text-base lg:pr-8 pt-2 md:text-lg lg:max-w-[1000px]">
                    Olá! Sou Cátia Oliveira, uma mulher de 50 anos, cheia de experiências e paixões que moldaram minha vida e minha carreira. Sou cristã e mãe de um filho incrível de 15 anos, que é uma das minhas maiores alegrias e fontes de motivação.
                    <br /><br />
                    Como mentora de mulheres e palestrante, tenho a honra de compartilhar minha jornada e conhecimentos com outras mulheres que buscam crescer e se destacar. Minha trajetória em liderança de pessoas começou há 35 anos, e desde então tenho me dedicado a ajudar mulheres a encontrar seu propósito e alcançar seus objetivos.
                  </p>          
                </div>

                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:p-4 bg-white border-[1px] rounded-md border-base-yellow-dark-2 border-opacity-60 p-3">
                  <p className="text-gray-500 text-base lg:pl-8 pt-2 md:text-lg lg:max-w-[1000px]">
                    Sou empreendedora por natureza, sempre buscando inovações e oportunidades para me reinventar. 
                    <br /><br />
                    Minha formação em assistência social e MBA em gestão empresarial me deram uma base sólida para entender as necessidades das pessoas e criar estratégias eficazes para o sucesso.
                  </p>   
                  <img src={ImgQualification} alt="" className="mb-3 object-cover rounded-md mx-auto  md:max-w-[400px] lg:w-[360px] lg:float-right"/>       
                </div>

                <div className="lg:flex lg:flex-row-reverse lg:items-center lg:p-4 bg-white border-[1px] rounded-md border-base-green-light border-opacity-60 p-3">
                  <img src={ImgPillars} alt="" className="mb-3 object-cover rounded-md mx-auto  d:max-w-[400px] lg:mb-0 lg:w-[360px] lg:float-right"/>
                  <p className="text-gray-500 text-base lg:pr-8 pt-2 md:text-lg lg:max-w-[1000px]">
                    Sou uma pessoa comunicativa, determinada e minha fé é um pilar fundamental em minha vida. Acredito em cuidar não apenas do corpo, mas também da mente, para que possamos enfrentar os desafios com força e equilíbrio. 
                    <br /><br />
                    Estou aqui para ajudá-la a descobrir seu potencial e guiá-la em sua jornada.
                  </p>          
                </div>
              </div>

              <div className="mt-12">
                <img src={ImgMentor} alt="" className="mt-12 mb-3 object-cover rounded-md w-[80%] mx-auto md:max-w-[400px] lg:w-[360px] lg:float-right lg:ml-6 lg:mt-30"/>
                <p className="mt-4 text-gray-500 text-base pt-2 md:text-lg lg:max-w-[1000px]">Renomada empresária, escritora e palestrante, emerge como uma voz inspiradora para mulheres maduras que enfrentam desafios. Com 50 anos, mãe solo e cristã dedicada, Cátia é uma especialista em Gestão Empresarial e Master Coach, desempenhando o papel de mentora para mulheres que buscam superações significativas.
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
          </div>
        </div>
    </GridContainer>
    </section>

  )
}