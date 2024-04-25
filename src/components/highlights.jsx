import { GridContainer, HighContainer } from "../containers"

export function Highlights(){
  return(
    <GridContainer>
      <section className="mt-24 flex flex-col p-8 space-y-6 bg-gradient-to-r from-base-green-dark to-base-yellow-dark-2 rounded-md">
        <div className="mb-3">
          <h3 className="text-xl text-white">Para quem é?</h3>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-3 gap-4 lg:space-y-0">
          <div>
            <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md border-[1px]">
              <p className="text-lg text-white font-semibold">1</p>
            </div>
            <p className="mt-3 text-white md:max-w-[420px] font-semibold text-base">Mulher que busca direção</p>
            <p className="mt-3 text-white md:max-w-[420px] text-base">
              Mulher que a partir do conhecimento da sua história, deseja mudança de comportamento para atrair e ter novos resultados.
              <br /><br />
              <li>Mulher que deseja encontrar sua missão e propósito.</li>
              <li>Mulher que deseja da um novo sentido a sua jornada de vida.</li>
              <li>Mulher que deseja fazer transição de carreira.</li>
              <li>Mulher que deseja ainda na maturidade viver sonhos.</li>
              <br />
              Se você não sabe qual caminho trilhar, qual opção escolher e precisa de um direcionamento. É para você!
            </p>
         </div>

         <div>
            <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md border-[1px]">
              <p className="text-lg text-white font-semibold">2</p>
            </div>
            <p className="mt-3 text-white md:max-w-[420px] font-semibold text-base"> Mulher que busca maturidade</p>
            <p className="mt-3 text-white md:max-w-[420px] text-base">
              Se você precisa fazer escolhas e quer ter atitudes mais assertivas. <br /><br /> Com base em algumas vivências posso traçar um caminho fundamentado em superações, e o desenvolvimento de novas habilidades, assim como fortalecimento das que você já possui. 
            </p>
         </div>

         <div>
            <div className="bg-base-yellow-dark inline-block px-4 py-2 rounded-md border-[1px]">
              <p className="text-lg text-white font-semibold">3</p>
            </div>
            <p className="mt-3 text-white md:max-w-[420px] font-semibold text-base"> Mulher que quer fazer transição de carreira</p>
            <p className="mt-3 text-white md:max-w-[420px] text-base">Se você está estagnada e cansada de viver no automático ou deseja mudar de atuação. Sem dúvidas, é para você!</p>
         </div>

         

         
        </div>
      </section>
    </GridContainer>
  )
}