import Layout from "./pages/Layout"
import ModalProvider from "./context/ModalProvider"
import { useState } from "react"
import { useEffect } from "react"
import './pages/Layout.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

const ModalMusic = ()=>{

  const [playMusic, setPlayMusic] = useState(false)
  const navigate = useNavigate()

  const handlePlayMusic = () => {
    setPlayMusic(!playMusic)
  }

  useEffect(() => {
    if (playMusic) {
      const audio = new Audio("/music.mp3")
      audio.play()
      // navigate('/invitation')
      // mantener parametros
      navigate({pathname: '/invitation', search: window.location.search})
    }
  }, [playMusic])


  const urlParams = new URLSearchParams(window.location.search);
  const i = urlParams.get('i');
  const invited = i?.split('-');

  return(
    <>
              <div className=" fixed h-dvh bg-cream  w-dvw flex flex-col justify-center items-center">
          <section className="z-50 flex flex-col items-center gap-5">
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
                    <h4 key={index} className="my-2 text-balance w-full  font-bold max-w-60">{name}</h4>
                  ))
              }
            </div>


          </section>

            <img src="/flores1.png" alt=""  className=" lg:hidden rotate-180 pointer-events-none absolute -bottom-12 w-[140%]" />
            <img src="/flores2.png" alt=""  className=" absolute pointer-events-none  top-16 w-[16rem]" />

            <button onClick={handlePlayMusic} className=" absolute bottom-40 z-10 text-white bg-gray-dark bg-black p-2 rounded-md animate-scale">Abrir Invitacion</button>
          </div>
    </>
  )
}

function App() {

  return (
      <ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ModalMusic/>} />
            <Route path="/invitation" element={<Layout/>} />
          </Routes>
        </Router>
      </ModalProvider>
  )
}

export default App
