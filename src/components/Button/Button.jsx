import './Button.css'
import AnimatedElement from "../AnimatedElement/AnimatedElement"
import { ModalContext } from "../../context/ModalContext"
import { useContext } from "react"

const numbers = {
   "v1": '595984543563',
   "v2": '595975568374'
}

const Button = ( { buttonText, colorCode, url, action, disabled } ) => {
   
   const { setModal, setConfirmationModal, setWeatherModal, sent } = useContext(ModalContext);
   // get params from url
   const urlParams = new URLSearchParams(window.location.search);
   const version = urlParams.get('v');

   const number = version ? numbers[version] : numbers['v1'];


   const handleForm = () => {
      switch(action) {
         case 'openWeatherModal':
            setWeatherModal(true);
            break;
         case 'openConfirmationModal':
            setConfirmationModal(true);
            break;
         case 'openInfoModal':
            setModal(true);
            break;
      }
   };

   const handleUrl = (url) => {
      const urlMapping = {
         salon: 'https://maps.app.goo.gl/U2V57eEpTrxknRQm6',
         church: 'https://maps.app.goo.gl/U2V57eEpTrxknRQm6',
         spotify: 'https://open.spotify.com/playlist/4zl9JhttxJvAHzJlsdpdaH?si=0GFA5u-NSWioFO1CdJKjnQ&pt=b551f3fa503654f904ea51fb78d9a555',
         confirm : `https://api.whatsapp.com/send?phone=${number}&text=Hola!%20confirmo%20mi%20asistencia%20%F0%9F%A5%B3`
      };
      if (url in urlMapping) {
         setTimeout(() => {
            window.location.href = urlMapping[url];
         }, 500);
      }
   };

   return (
      <AnimatedElement>
         <button 
            onClick={ url ? () => handleUrl(url) : handleForm }
            disabled={ sent }
            type="button" 
            className={` unselectable w-64 text-lg active:bg-green-dark
            ${colorCode}
            ${ colorCode === 'bg-mustard' ? 'btn-special' : 'btn-normal' }  `}
         >
            { buttonText }
         </button>
      </AnimatedElement>
   )
}

export default Button