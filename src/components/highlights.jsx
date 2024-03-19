import { GridContainer, HighContainer } from "../containers"

export function Highlights(){
  return(
    <GridContainer>
      <section className="mt-24 flex flex-col p-8 space-y-6 bg-gradient-to-r from-base-green-dark  to-base-yellow-dark-2 rounded-md md:flex-row md:space-x-10">
        <div className="mb-3">
          <p className="text-sm uppercase font-light text-white text-opacity-40">Serve para você?</p>
          <h3 className="text-xl text-white">Para quem é?</h3>
        </div>

        <HighContainer number='1' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil fuga consectetur, nam labore cum placeat explicabo sint cupiditate, sunt expedita. ' />

        <HighContainer number='2' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil fuga cons. Alias, itaque quod ab architecto saepe tempore accusantium porro!' />

        <HighContainer number='3' description='Lorem explicabo sint cupiditate, sunt expedita. Alias, itaque quod ab architecto saepe tempore accusantium porro!' />
      </section>
    </GridContainer>
  )
}