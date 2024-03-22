import { CardContainer, GridContainer } from "../containers"

import LogoGreen from '/logo-green.png'
import ImgGuarantee from '/guarantee.png'
import ImgWhats from '/whatsapp.svg'

export function Investiment(){
  return(
    <GridContainer>
      <div className="mt-16 mb-12">
        <div className="pb-4">
          <p className="text-sm uppercase font-medium text-gray-70 md:text-lg">Investimento</p>
          <h2 className="text-base-green text-xl md:text-2xl">Conheça meus infoprodutos</h2>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-x-4 lg: lg:space-y-0">
          <CardContainer 
            title='E-book - Mulher de atitude (por Cátia Oliveira)'
            description='Embarque em uma jornada transformadora rumo à descoberta da verdadeira essência da mulher de atitude!'
            portion='6x'
            value='R$ 5,03'
            inCash='R$ 27,00'
            link='https://sun.eduzz.com/2195388?cupom=PRESENTE2'
          />

          <CardContainer 
            title='Combo Mulher em Superação (Sessão presencial + Ebook)'
            description='Explore a jornada de autodescoberta e plenitude com o combo "Mulher plena". Este conjunto cuidadosamente elaborado oferece ferramentas essenciais para mulheres que buscam equilíbrio, autoconhecimento e uma vida plena.'
            portion='12x'
            value='R$ 18,09'
            inCash='R$ 177,00'
            link='https://sun.eduzz.com/2229519?cupom=PRESENTE2'
          />

          <CardContainer 
            title='Combo Performance Feminina (Livro + Ebook)'
            description='Descubra o poder da transformação pessoal com o Combo "Performance Feminina". Este pacote exclusivo foi criado para mulheres que desejam iniciar uma jornada incrível em direção à sua melhor versão.'
            portion='12x'
            value='R$ 9,91'
            inCash='R$ 97,00'
            link='https://sun.eduzz.com/2198859?cupom=PRESENTE2'
          />                   
        </div>

        {/* <div className="text-center space-y-4 lg:mx-36">
          <img src={ImgGuarantee} alt="" className="mt-8 w-[260px] mx-auto"/>
          <p className="text-gray-800 uppercase font-semibold">Risco zero</p>
          <p className="text-base-green-light font-semibold text-3xl">Garantia incondicional de 7 dias</p>
          <p className="text-xl text-gray-500">Se dentro desse período você achar que não é para você, basta enviar um e-mail para suporte@email.com para solicitar o reembolso.</p>
        </div> */}

        <div className="mt-20 text-center lg:mx-36">
          <p className="font-['Poppins'] text-3xl text-base-green-light font-semibold ">Quero fazer parte do Grupo Vip Mulheres em Superação</p>
          
          <div>
            <a href="https://chat.whatsapp.com/KsKSC0h68HJJ1DKBgnD0pm" target="_blank" className='mt-8 inline-flex items-center gap-3 font-["Poppins"] px-8 py-6 max-w-[340px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase text-lg'>

            <img src={ImgWhats} alt="" />
            Entrar no grupo vip        
            </a>
          </div>
        </div>
      </div>
    </GridContainer>
  )
}