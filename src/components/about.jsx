import { GridContainer } from "../containers";

import ImgMentor from '/mentor.jpeg'

export function About(){
  return(
    <GridContainer>
      <div>
        <div>
          <p className="text-sm uppercase font-medium text-gray-700">Conheça um pouco da sua mentora</p>
          <h2><span className="text-base-green text-xl ">Cátia Oliveira </span></h2>
          <p className="text-gray-500 pt-2">Renomada empresária, escritora e palestrante, emerge como uma voz inspiradora para mulheres maduras que enfrentam desafios emocionais. Com 50 anos, mãe solo e cristã dedicada, Cátia é uma especialista em Gestão Empresarial e Master Coach, desempenhando o papel de mentora para mulheres que buscam superações significativas.
          <br /><br />
          Ao coautora do livro <span className="font-bold">"Legado"</span> e <span className="font-bold">"Mulheres em Performance"</span>, Cátia compartilha não apenas suas experiências profissionais, mas também suas batalhas pessoais. Mãe de um filho de 15 anos, ela enfrentou diversas superações, desde aceitação própria e baixa autoestima até lidar com luto, obesidade, bloqueios em redes sociais, exposição pública, calots financeiros e dívidas.
          <br /><br />
          A própria jornada de Cátia é um testemunho poderoso de aceitação, resiliência e transformação. Desde os 14 anos, quando enfrentou os primeiros confliots de baixa autoestima e identidade, até os defafios mais recentes, ela escolheu não apenas superar, mas também se tornar uma fonte de inspiração para outras mulheres. Seu propósito claro é "inspirar e conduzir pessoas a enxergarem suas possibilidades para viverem superações."
          <br /><br />
          Cátia não apenas fala sobre superações, mas vive-as, tornando-se uma mentora dedicada a apontar o caminho para aqueles que se identificam com suas qualificações e desafios. Sua mensagem clara: não se trata de facilitar ou dificultar, mas de acreditar que é possível transformar desafios em oportunidades de crescimento.
          <br /><br />
          Através de sua vasta experiência como Master Coach, ela oferece orientação e suporte para mulheres maduras que buscam encontrar leveza na vida, aceitação própria e, acima de tudo, inspiração para se superarem. A história de Cátia é um convite para outras mulheres se reconhecerem, se fortalecerem e se guiarem em direção a uma vida plena de significado e superações.  
        
          </p>
        </div>

        <img src={ImgMentor} alt="" className="mt-8 rounded-md"/>
      </div>
    </GridContainer>
  )
}