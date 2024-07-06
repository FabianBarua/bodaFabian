const MainHeadline = () => {

      // get url params
      const urlParams = new URLSearchParams(window.location.search);
      const i = urlParams.get('i');
      const invited = i?.split('-');

   return (
      <section className="z-50 flex flex-col items-center gap-5 absolute inset-0 mx-auto top-[32%] lg:top-[35%]">
         <img src="/assets/images/header-title-mobile.png" alt="" className="w-52 mb-2 lg:w-64" />
         <img src="/assets/images/names.png" alt="" className="w-72 lg:w-96"/>
         <hr className="w-44 border-1 border-mustard " />
         <h3 className="text-center text-black text-[22px] mt-2 drop-shadow-lg lg:text-[24px]">
            21 de septiembre 2024
         </h3>
         <div className=" text-center  ">
        {
         invited?.length > 0 && ( <h4 className="my-2 ">Invitacion valida para:</h4>)
        }
         {
            invited?.map((name, index) => (
               <h4 key={index} className="my-2 text-balance w-full  max-w-60">{name}</h4>
            ))
         }
         </div>
      </section>
   )
}

export default MainHeadline