export function Ebooks(){
  return(
    <section className=" text-center flex justify-center gap-8">
      <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src="/ebooks.jpeg" alt="" className="h-[500px] mx-auto object-cover"/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 font-semibold text-xl md:text-2xl">Adquira um dos livros</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">Descrição</p>

        <div className="mt-4">
        <p className="text-gray-700 font-semibold text-lg md:text-xl"> 6x de <span className="text-4xl font-extrabold text-base-green-light md:text-5xl">999,00</span></p>
        <p className="text-gray-600 font-medium text-lg md:text-xl">ou R$70,00 à vista</p>
        <p className="text-red-700 font-medium text-sm "></p>
      </div>
        <a href='#' target="_blank" className=' mt-6 text-lg inline-block font-["Poppins"] px-8 py-5 max-w-[280px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase md:text-xl'>
        Adquirir agora!
      </a>
    </div>
      </div>

      <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="rounded-t-lg" src="/cha.jpeg" alt="" className="h-[500px] mx-auto object-cover"/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 font-semibold text-xl md:text-2xl">Chá</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">Descrição</p>

        <div className="mt-4">
        <p className="text-gray-700 font-semibold text-lg md:text-xl"> 6x de <span className="text-4xl font-extrabold text-base-green-light md:text-5xl">999,00</span></p>
        <p className="text-gray-600 font-medium text-lg md:text-xl">ou R$70,00 à vista</p>
        <p className="text-red-700 font-medium text-sm "></p>
      </div>
        <a href='#' target="_blank" className=' mt-6 text-lg inline-block font-["Poppins"] px-8 py-5 max-w-[280px] mx-auto bg-gradient-to-r from-base-yellow-dark to-base-green-light text-white font-bold rounded-md hover:opacity-90 duration-200 md:mx-0 uppercase md:text-xl'>
        Adquirir agora!
      </a>
    </div>
      </div>
    </section>
  )
}