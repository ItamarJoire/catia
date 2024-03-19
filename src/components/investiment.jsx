import { GridContainer } from "../containers"

import LogoGreen from '/logo-green.png'
import ImgGuarantee from '/guarantee.png'
import ImgWhats from '/whatsapp.svg'

export function Investiment(){
  return(
    <GridContainer>
      <div className="mt-16 mb-12">
        <div>
          <p className="text-sm uppercase font-light text-gray-700">Investimento</p>
          <p>Conheça nossos produtos</p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="mt-4 bg-white border-[1px] border-solid border-base-green-light rounded-md text-center px-3 py-8">
              <img src={LogoGreen} alt="" className="w-[160px] mx-auto"/>
              
              <div className="mt-8 space-y-3">
                <p className="font-bold text-2xl">Oferta exclusiva!</p>
                <h2 className="font-semibold text-xl">E-book - Mulher de atitude (por Cátia Oliveira)</h2> 
                <p className="text-gray-400 text-lg">Embarque em uma jornada transformadora rumo à descoberta da verdadeira essência da mulher de atitude!</p>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 font-semibold text-lg">6x de <span className="text-4xl font-extrabold text-base-green-light">R$5,03</span></p>
                <p className="text-gray-600 font-medium text-lg">ou R$27,00 à vista</p>
              </div>
              
              <a href="https://sun.eduzz.com/2195388?cupom=PRESENTE2" target="_blank" className='mt-6 text-lg inline-block font-["Poppins"] px-8 py-5 max-w-[280px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase'>
                Adquirir agora!
              </a>
            </div>
          </div>

          <div>
            <div className="mt-4 bg-white border-[1px] border-solid border-base-green-light rounded-md text-center px-3 py-8">
              <img src={LogoGreen} alt="" className="w-[160px] mx-auto"/>
              
              <div className="mt-8 space-y-3">
                <p className="font-bold text-2xl">Oferta exclusiva!</p>
                <h2 className="font-semibold text-xl">Combo Mulher em Superação (Sessão presencial + Ebook)</h2> 
                <p className="text-gray-400 text-lg">Explore a jornada de <span className="font-medium">autodescoberta</span> e <span className="font-medium">plenitude</span> com o combo "Mulher plena". Este conjunto cuidadosamente elaborado oferece ferramentas essenciais para mulheres que buscam <span className="font-medium">equilíbrio</span>, <span className="font-medium">autoconhecimento</span> e uma <span className="font-medium">vida plena</span>.</p>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 font-semibold text-lg">12x de <span className="text-4xl font-extrabold text-base-green-light">R$18,09</span></p>
                <p className="text-gray-600 font-medium text-lg">ou R$177,00 à vista</p>
              </div>
              
              <a href="https://sun.eduzz.com/2229519?cupom=PRESENTE2" target="_blank" className='mt-6 text-lg inline-block font-["Poppins"] px-8 py-5 max-w-[280px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase'>
                Adquirir agora!
              </a>
            </div>
          </div>

          <div>
            <div className="mt-4 bg-white border-[1px] border-solid border-base-green-light rounded-md text-center px-3 py-8">
              <img src={LogoGreen} alt="" className="w-[160px] mx-auto"/>
              
              <div className="mt-8 space-y-3">
                <p className="font-bold text-2xl">Oferta exclusiva!</p>
                <h2 className="font-semibold text-xl">Combo Performance Feminina (Livro + Ebook)</h2> 
                <p className="text-gray-400 text-lg">Descubra o poder da transformação pessoal com o Combo "Performance Feminina". Este pacote exclusivo foi criado para mulheres que desejam iniciar uma jornada incrível em direção à sua melhor versão.</p>
              </div>

              <div className="mt-4">
                <p className="text-gray-700 font-semibold text-lg">12x de <span className="text-4xl font-extrabold text-base-green-light">R$9,91</span></p>
                <p className="text-gray-600 font-medium text-lg">ou R$97,00 à vista</p>
              </div>
              
              <a href="https://sun.eduzz.com/2198859?cupom=PRESENTE2" target="_blank" className='mt-6 text-lg inline-block font-["Poppins"] px-8 py-5 max-w-[280px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase'>
                Adquirir agora!
              </a>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <img src={ImgGuarantee} alt="" className="mt-8 w-[260px] mx-auto"/>
          <p className="text-gray-800 uppercase font-semibold">Risco zero</p>
          <p className="text-base-green-light font-semibold text-3xl">Garantia incondicional de 7 dias</p>
          <p className="text-xl text-gray-500">Se dentro desse período você achar que não é para você, basta enviar um e-mail para suporte@email.com para solicitar o reembolso.</p>
        </div>

       

        <div className="mt-24 text-center">
          <p className="font-['Poppins'] text-4xl text-base-green-light font-semibold ">Quero fazer parte do Grupo Vip Mulheres em Superação</p>
          
          <div>
            <a href="https://chat.whatsapp.com/KsKSC0h68HJJ1DKBgnD0pm" target="_blank" className='mt-8 inline-flex items-center gap-2 font-["Poppins"] px-8 py-6 max-w-[340px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase text-xl'>

            <img src={ImgWhats} alt="" />
            Entrar no grupo vip        
            </a>
          </div>
        </div>
      </div>

      
    </GridContainer>
  )
}