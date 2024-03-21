import { GridContainer, HighContainer } from "../containers"

export function Highlights(){
  return(
    <GridContainer>
      <section className="mt-24 flex flex-col p-8 space-y-6 bg-gradient-to-r from-base-green-dark to-base-yellow-dark-2 rounded-md">
        <div className="mb-3">
          <p className="text-sm uppercase font-light text-white text-opacity-40">Serve para você?</p>
          <h3 className="text-xl text-white">Para quem é?</h3>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-3 gap-4 lg:space-y-0">
          <div>
            <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md border-[1px]">
              <p className="text-lg text-white font-semibold">1</p>
            </div>
            <p className="mt-3 text-white md:max-w-[420px] font-semibold text-base">Mulher que busca direção</p>
            <p className="mt-3 text-white md:max-w-[420px] text-base">Se você está perdida e não sabe qual caminho trilhar, precisa de um norte e um destino… <br /> É para você!</p>
         </div>

         <div>
            <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md border-[1px]">
              <p className="text-lg text-white font-semibold">2</p>
            </div>
            <p className="mt-3 text-white md:max-w-[420px] font-semibold text-base"> Mulher que busca maturidade</p>
            <p className="mt-3 text-white md:max-w-[420px] text-base">Se você precisa tomar atitudes de impacto. Baseado em minha vivência, traçamos o seu amadurecimento fundado na superação e fortalecimento seu autoconhecimento. <br />É para você!</p>
         </div>

         <div>
            <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md border-[1px]">
              <p className="text-lg text-white font-semibold">3</p>
            </div>
            <p className="mt-3 text-white md:max-w-[420px] font-semibold text-base"> Mulher que quer virar a chave</p>
            <p className="mt-3 text-white md:max-w-[420px] text-base">Se você está estagnada e cansada de viver no automático. Se não possui constância em sua ações e vive procrastinando sua evolução.
            <br />Sem dúvidas, é para você!</p>
         </div>

         

         
        </div>
      </section>
    </GridContainer>
  )
}