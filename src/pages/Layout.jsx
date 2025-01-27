import Arrows from "../components/Arrows/Arrows"
import Button from "../components/Button/Button"
import ButtonGift from "../components/ButtonGift/ButtonGift"
import Countdown from "../components/Countdown/Countdown"
import CurvedBottomSection from "../components/CurvedBottomSection/CurvedBottomSection"
import CurvedTopSection from "../components/CurvedTopSection/CurvedSection"
import ImageComponent from "../components/ImageComponent/ImageComponent"
import InfoSection from "../components/InfoSection/InfoSection"
import MainHeadline from "../components/MainHeadline/MainHeadline"
import Portrait from "../components/Portrait/Portrait"
import Spinner from "../components/Spinner/Spinner"
import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import ModalContainer from "../components/ModalContainer/ModalContainer"
import ModalAccounts from "../components/ModalAccounts/ModalAccounts"
import ModalConfirm from "../components/ModalConfirm/ModalConfirm"
import ModalWeather from "../components/ModalWeather/ModalWeather"
import SectionContainer from "../components/SectionContainer/SectionContainer"
import SectionContainerElement from "../components/SectionContainerElement/SectionContainerElement"


const Layout = () => {

   const { modal, confirmationModal, weatherModal, sent } = useContext(ModalContext);

   return (
      <div className={` relative flex flex-col items-center overflow-hidden
         ${confirmationModal || weatherModal || modal ? ' h-dvh' : 'h-min-screen'} `
      }>

         <ButtonGift />

         {/* Modals --------------------------------------- */}
         <ModalContainer isOpen={ modal }>
            <ModalAccounts />
         </ModalContainer>
         
         <ModalContainer isOpen={ weatherModal }>
            <ModalWeather />
         </ModalContainer>
         
         <ModalContainer isOpen={ confirmationModal }>
            <ModalConfirm />
         </ModalContainer>


         {/* 1° Portrait Section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-[85dvh] text-sm bg-cream pt-8 px-8 overflow-hidden z-20">
            <Spinner />
            <Portrait />
            <MainHeadline />
            <Arrows />
            <CurvedTopSection bgColor={"bg-mustard"} />
         </section>

         {/* 2° Countdown, maps and schelude section --------------------------------------- */}
         <section className="relative flex flex-col items-center justify-center w-full bg-mustard h-fit px-8 pb-4 z-30
            lg:px-8 lg:pb-20">

            <Countdown />


            {/* Church and party container ---------- */}
            <SectionContainer>

               {/* Church section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/church-icon.png"}
                     alt={"church icon"}
                  />
                  <InfoSection
                     header={"Ceremonia | 19:00 pm"}
                     subtitle={"Salón de Eventos Pacholi"}
                     lineColorCode={"border-green"}
                  >
                    Ciudad del Este | Km 7 Ciudad Nueva
                  </InfoSection>
                  <Button
                     buttonText={"¿Cómo llego?"}
                     colorCode={"bg-green"}
                     url={'church'}
                  />
               </SectionContainerElement>

               {/* Party section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/music-icon.png"}
                     alt={"Icono música"}
                  />
                  <InfoSection
                     header={"Fiesta | 21:00 pm"}
                     subtitle={"Salón de Eventos Pacholi"}
                     lineColorCode={"border-green"}
                  >
                     Mismo local de la ceremonia
                  </InfoSection>
                  {/* <Button
                     buttonText={"¿Cómo llego?"}
                     colorCode={"bg-green"}
                     url={'salon'}
                  /> */}
               </SectionContainerElement>

               {/* Present section (only Desktop) ---------- */}
               <SectionContainerElement mobileView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/plane-icon.png"}
                     alt={"plane icon"}
                  />
                  <InfoSection
                     header={"¿Qué les regalo?"}
                     lineColorCode={"border-green"}
                  >
                     ¿El mejor regalo? tu presencia, pero si querés cumplirnos un sueño hacé click.

                  </InfoSection>
                  <Button
                     buttonText={'Ver información'}
                     colorCode={'bg-green'}
                     url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>


            </SectionContainer>

         </section>

         {/* 3° Music & clothes section --------------------------------------- */}
         <section className="relative flex flex-col items-center w-full h-fit text-sm bg-green px-8 pt-20 pb-32 z-20
            lg:pb-40">
            <CurvedBottomSection bgColor={"bg-mustard"} />

            {/* Dress and music container ---------- */}
            <SectionContainer>

               {/* Dress section ---------- */}
               <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/dress-icon.png"}
                     alt={"Icono vestimenta"}
                     margin={"disabled"}
                  />
                  <div className="flex flex-col items-center">
                     <InfoSection
                        header={'¿Qué me pongo?'}
                        subtitle={`
                           Codigo de vestimenta:
                           `}
                        lineColorCode={'border-mustard'}
                     >
                        Elegante (De preferencia utilizar colores primaverales).
                     </InfoSection>
                  </div>
               </SectionContainerElement>

               {/* Music section ---------- */}
               {/* <SectionContainerElement>
                  <ImageComponent
                     src={"/assets/images/dance-icon.png"}
                     alt={"Icono baile"}
                  />
                  <InfoSection
                     header={"#ModoDJ"}
                     lineColorCode={'border-mustard'}
                  >
                     Ayudanos a armar la lista y no dejar afuera ningún tema.
                  </InfoSection>
                  <Button
                     buttonText={"Añadir tu tema"}
                     widthClass={"w-64"}
                     colorCode={"bg-mustard"}
                     url={'spotify'}
                  />
               </SectionContainerElement> */}

               {/* Confirmation section (only Desktop) ---------- */}
               <SectionContainerElement mobileView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/confirm-icon.png"}
                     alt={"Icono confimación"}
                     margin={"disabled"}
                  />
                  <InfoSection
                     header={'Confirmar asistencia'}
                     lineColorCode={'border-mustard'}
                  >
                     Esperamos que puedas acompañarnos.
                     PD: Si no confirmás nos dolerá
                     el bolsillo (y el alma).

                  </InfoSection>
                  <Button
                     buttonText={'Confirmar asistencia'}
                     url={'confirm'}
                     colorCode={'bg-mustard'}
                  />
               </SectionContainerElement>

            </SectionContainer>

            <CurvedTopSection bgColor={"bg-cream"} />
         </section>

         {/* 4° Confirmation section --------------------------------------- */}
         <section className="relative flex flex-col items-center h-fit w-full text-sm bg-cream px-8 z-20
            sm:pb-24 md:pb-0 md:px-0">

            {/* Confirmation and present container ---------- */}
            <SectionContainer>

               {/* Confirmation section ---------- */}
               <SectionContainerElement desktopView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/confirm-icon.png"}
                     alt={"Icono confimación"}
                     margin={"disabled"}
                  />
                  <InfoSection
                     header={'Confirmar asistencia'}
                     lineColorCode={'border-mustard'}
                     textColorCode={'text-gray-dark'}
                  >
                     Esperamos que puedas acompañarnos.
                     Favor de confirmar la asistencia para una mejor organización.

                  </InfoSection>
                  <Button
                     buttonText={ 'Confirmar asistencia' }
                     disabled={ sent }
                     colorCode={'bg-green'}
                     url={'confirm'}
                  />
               </SectionContainerElement>

               {/* Present section ---------- */}
               <SectionContainerElement desktopView={ 'off' }>
                  <ImageComponent
                     src={"/assets/images/plane-icon.png"}
                     alt={"plane icon"}
                  />
                  <InfoSection
                     header={"¿Qué les regalo?"}
                     lineColorCode={"border-mustard"}
                     textColorCode={"text-gray-dark"}
                  >
                     ¿El mejor regalo? tu presencia,
                     pero si querés te damos una opción.

                  </InfoSection>
                  <Button
                     buttonText={'Ver información'}
                     
                     colorCode={'bg-green'}
                     url={false}
                     action={'openInfoModal'}
                  />
               </SectionContainerElement>

            </SectionContainer>

            <section className="hidden lg:flex lg:w-full lg:justify-center pb-16">
            {/* <Carousel /> */}
            </section>


         </section>

         {/* 5° Carousel section --------------------------------------- */}
         <section className="relative flex justify-center items-end bg-cream w-full z-20 pb-16
            sm:hidden">
            {/* <Carousel /> */}
         </section>


      </div>
   );
}

export default Layout