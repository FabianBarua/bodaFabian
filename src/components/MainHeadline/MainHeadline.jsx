const MainHeadline = () => {


   return (
      <section className="z-50 flex flex-col items-center gap-5 absolute inset-0 mx-auto top-[32%] lg:top-[35%]">
         <img src="/assets/images/header-title-mobile.png" alt="" className="w-52 mb-2 lg:w-64" />
         <img src="/assets/images/names.png" alt="" className="w-72 lg:w-96"/>
         <hr className="w-44 border-1 border-mustard " />
         <h3 className="text-center text-black text-[22px] mt-2 drop-shadow-lg lg:text-[24px]">
            21 de septiembre 2024
         </h3>
         <p className=" lg:hidden   p-4 h-20  mx-9 rounded-xl text-white leading-4 mt-3 flex justify-center items-center text-balance text-center bg-gray-dark">
         Decidimos unir nuestras vidas en matrimonio para celebrar nuestro amor.
         </p>
      </section>
   )
}

export default MainHeadline