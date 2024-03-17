'use client'
import Image from "next/image";
import ContactButton from "./components/contactButton";
import Producto from "./components/producto";
import Servicio from "./components/servicio";
import { useState, useRef } from "react";
import Head from "next/head";
export default function Home() {
  const playerRef = useRef();
  const [barState, setBarState] = useState(false);
  let bars = () =>{
    setBarState(!barState);
    console.log(barState)
  }
  return (
    <main className=" scroll-smooth ">
        <div>
           <Head>
           <link rel="shortcut icon" href="/logo.svg" />
           </Head>
        </div>
      <div id="sidebar" className={ barState ? "sidebar w-80 fixed  h-screen bg-[#392972] z-99 transition-all ease-linear " : "fixed -translate-x-full h-screen transition-all ease-linear "}>
        <div className=" flex justify-around mt-5">
          <Image onClick={bars} id="arrow" className="" src={"/arrow.svg"} width={20} height={20} alt="arrow icon"></Image>
          <div className=" flex flex-row-reverse gap-4 justify-center align-middle*">
            <Image src={"/leca.svg"} width={80} height={80} alt=" Leca Logo"></Image>
            <Image src={"/logo.svg"} width={40} height={40} alt=" Leca Logo"></Image>
          </div>
        </div>
        <div className=" h-full w-full flex flex-col justify-around ml-3">
        <ul className=" text-white text-4xl flex flex-col gap-3">
          <li><a href="#homeSm" onClick={bars}>Inicio</a></li>
          <li><a href="#productos" onClick={bars}>Productos</a></li>
          <li><a href="#sobrenosotros" onClick={bars}>Sobre Nosotros</a></li>
          <li><a href="#servicios" onClick={bars}>Servicios</a></li>
          <li><a href="#testimonios" onClick={bars}>Testimonios</a></li>
        </ul>
        <div className="">              
              <ul className=" text-xl flex flex-col gap-2">
                <li className=" flex gap-1">
                  <Image src={"/instagram.svg"} width={20} height={30} alt="whatsapp icon"></Image>
                  <a className="text-gray-400" href="#">@lecaindumentaria</a>
                </li>
                <li className=" flex gap-1">
                <Image src={"/facebook.svg"} width={20} height={30} alt="whatsapp icon"></Image>
                  <a className="text-gray-400" href="#">lecaindumentaria</a>
                </li>
                <li className=" flex gap-1">
                <Image src={"/whatsapp.svg"} width={20} height={30} alt="whatsapp icon"></Image>
                  <a className="text-gray-400" href="#">+54 12345678</a>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div id="homeSm" className="homeSm h-screen w-full md:hidden">
        <nav className=" h-[82px] w-full bg-main-bg  flex flex-row-reverse justify-around align-middle absolute z-10 top-0">
          <div className=" flex flex-row-reverse gap-4 justify-center align-middle*">
            <Image src={"/leca.svg"} width={80} height={80} alt=" Leca Logo"></Image>
            <Image src={"/logo.svg"} width={40} height={40} alt=" Leca Logo"></Image>
          </div>
          <div id="bar" className=" cursor-pointer flex flex-col gap-1 justify-center" onClick={bars}>
            <div className=" w-7 h-1 bg-white rounded-xl"></div>
            <div className=" w-7 h-1 bg-white rounded-xl"></div>
            <div className=" w-7 h-1 bg-white rounded-xl"></div>
          </div>
        </nav>
        <section className=" w-full h-screen bg-bg-home bg-fixed bg-cover bg-center">
          <div className=" h-1/2"></div>
          <div className=" flex flex-col justify-center align-middle w-full h-1/2 gap-8 ">
            <div className=" flex flex-col gap-3">
              <p className=" text-white text-center text-3xl">La excelencia en moda mayorista con</p>
              <Image className=" self-center " src={"/leca.svg"} width={100} height={50} alt="Leca"></Image>
            </div>
            <ContactButton tailwind={' w-2/4 h-8 self-center'}></ContactButton>
          </div>
        </section>
      </div>
      <div id="homeLg" className=" homeLg  hidden md:flex bg-main-bg h-screen w-full flex-col justify-center">
        <nav className="hidden sm:flex justify-around h-auto  w-full top-0 py-3 align-middle bg-main-bg border-b-2 border-[#392972]">
          <div className=" flex flex-row-reverse gap-4 justify-center align-middle w-[20%]">
            <Image src={"/leca.svg"} width={80} height={80} alt=" Leca Logo"></Image>
            <Image src={"/logo.svg"} width={40} height={40} alt=" Leca Logo"></Image>
          </div>
          <ul className=" text-white flex justify-around align-middle lg:w-[65%] md:text-sm md:gap-4 ">
            <li className="flex hover:text-gray-500 transition-all ease-linear"><a href="#homeLg" className=" self-center">Inicio</a></li>
            <li className="flex hover:text-gray-500 transition-all ease-linear"><a href="#productosLg" className=" self-center">Productos</a></li>
            <li className="flex hover:text-gray-500 transition-all ease-linear"><a href="#sobrenosotros" className=" self-center">Servicios</a></li>
            <li className="flex hover:text-gray-500 transition-all ease-linear"><a href="#serviciosLg" className=" self-center">Sobre Nosotros</a></li>
            <li className="flex hover:text-gray-500 transition-all ease-linear"><a href="#testimonios" className=" self-center">Testimonios</a></li>
            <ContactButton tailwind={" h-7 w-40 self-center"}></ContactButton>
          </ul>
        </nav>
        <div className=" flex h-full xl:w-[80%] self-center">
            <div className=" w-[65%] h-full justify-center flex pr-4">
              <Image loading="eager" className=" self-center align-middle" src={"/homeLg1.svg"} width={750} height={0} alt="leca"></Image>
            </div>
            <div className=" w-[35%]  flex flex-col self-center justify-around text-white px-3 py-4 ">
              <div className=" flex flex-col gap-4 mb-5">
                <h3 className=" text-3xl">La excelencia en moda mayorista con</h3>
                <Image src={"/leca.svg"} width={70} height={0} alt="leca"></Image>
              </div>
              <div className=" h-auto flex flex-col justify-around gap-6 ">
                <p className=" h-auto">Destacados como fabricantes al por mayor, ofrecemos una gama selecta de indumentaria que viste e inspira. Nuestra dedicación a la calidad se refleja en cada prenda, desde remeras y buzos hasta uniformes escolares y ropa de trabajo especializada.</p>
                <p className=" h-auto md:hidden lg:inline-block">Con servicios exclusivos de corte, confección, estampado y bordado, aseguramos que cada artículo cumpla con los más altos estándares de la industria y las expectativas de nuestros clientes.</p>
              </div>
              <ContactButton tailwind={' mt-5 w-2/4 h-8 self-start'}></ContactButton>
            </div>
        </div>  
      </div>
      <div id="productos" className="productos h-auto w-full justify-center flex flex-col gap-6 md:hidden">
        <div className=" h-auto w-full">
          <p className=" text-3xl font-semibold text-center text-white p-6">Nuestros Productos</p>
        </div>
        <div className="tarjetas justify-around flex">
          <div className=" fila1 flex flex-col gap-2">
            <Producto tailwind={"bg-bg-remeras w-[165px] h-[130px]"} titulo={"Remeras"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-buzos w-[165px] h-[130px]"} titulo={"Buzos"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-medico w-[165px] h-[130px]"} titulo={"Ambos"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-musculosa w-[165px] h-[130px]"} titulo={"Sin manga"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-ambo w-[165px] h-[130px]"} titulo={"Camisa trabajo"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-uniforme w-[165px] h-[130px]"} titulo={"Uniformes"} descripcion={"Resistentes y sofisticadas"}></Producto>
          </div>
          <div className=" fila2 flex flex-col gap-2">
            <Producto tailwind={"bg-bg-chombas w-[165px] h-[130px]"} titulo={"Chombas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-camperas w-[165px] h-[130px]"} titulo={"Camperas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-sinmanga w-[165px] h-[130px]"} titulo={"Musculosas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-calza w-[165px] h-[130px]"} titulo={"Calzas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-cargo w-[165px] h-[130px]"} titulo={"Cargo"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-joggin w-[165px] h-[130px]"} titulo={"Joggin"} descripcion={"Resistentes y sofisticadas"}></Producto>
          </div>
        </div>
      </div>
      <div id="productosLg" className="productosLg h-screen w-full md:flex flex-col justify-center hidden gap-5 ">
        <h4 className="h-auto text-white text-3xl text-center">Nuestros Productos</h4>
        <div className=" flex">
          <div className=" w-[10%] h-auto flex justify-center"><Image src={"/detalle.svg"} width={20} height={0} alt="detalle"></Image></div>
          <div className=" w-[80%] self-center h-auto  grid grid-cols-4 grid-rows-3 items-center justify-items-center ">
              <Producto tailwind={"bg-bg-remeras lg:w-[195px] h-[160px] mt-4"} titulo={"Remeras"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-buzos lg:w-[195px] h-[160px] mt-4"} titulo={"Buzos"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-medico lg:w-[195px] h-[160px] mt-4"} titulo={"Ambos"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-musculosa lg:w-[195px] h-[160px] mt-4"} titulo={"Sin manga"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-ambo lg:w-[195px] h-[160px] mt-4"} titulo={"Camisa trabajo"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-uniforme lg:w-[195px] h-[160px] mt-4"} titulo={"Uniformes"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-chombas lg:w-[195px] h-[160px] mt-4"} titulo={"Chombas"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-camperas lg:w-[195px] h-[160px] mt-4"} titulo={"Camperas"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-sinmanga lg:w-[195px] h-[160px] mt-4"} titulo={"Musculosas"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-calza lg:w-[195px] h-[160px] mt-4"} titulo={"Calzas"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-cargo lg:w-[195px] h-[160px] mt-4"} titulo={"Cargo"} descripcion={"Resistentes y sofisticadas"}></Producto>
              <Producto tailwind={"bg-bg-joggin lg:w-[195px] h-[160px] mt-4"} titulo={"Joggin"} descripcion={"Resistentes y sofisticadas"}></Producto>
          </div>
          <div className=" w-[10%] h-auto flex justify-center"><Image src={"/detalle.svg"} width={20} height={0} alt="detalle"></Image></div>
        </div>
        <ContactButton tailwind={' w-1/6 h-8 self-center mt-4'}></ContactButton>
      </div>
      <div id="sobrenosotros" className="sobrenosotros max-w[90%]  h-screen flex flex-col justify-center gap-8">
        <div className=" flex flex-col w-full h-auto  md:self-center justify-center ">
          <div className=" flex flex-col justify-center ">
            <div className=" w-full h-5 bg-[#392972] max-md:hidden absolute self-center "></div>
            <div className=" w-[95%] md:h-32 md:w-[60%] md:relative  h-20 self-center bg-bg-us bg-cover bg-center rounded-xl"></div>  
          </div>
          <div className=" w-fit py-2 px-4 bg-white rounded-xl self-center relative -top-5"><p className=" text-xl md:text-2xl text-black">Sobre <span className=" text-blue-600">Nosotros</span></p></div>
        </div>
        <div className=" flex flex-col px-5 gap-5 md:hidden">
          <h3 className=" text-white text-2xl px-3"><span className=" text-[#D8FFCE]">Fortaleza, calidad y diseño</span>  en cada puntada</h3>
          <p className=" text-white px-4">Somos fabricantes al por mayor especializados en una selecta gama de indumentaria, desde remeras y buzos hasta uniformes escolares y ropa de trabajo. Comprometidos con la excelencia, nuestros servicios de corte, confección, estampado y bordado garantizan que cada prenda cumpla con los más altos estándares de calidad y satisfacción del cliente.</p>
        </div>
        <div className=" hidden md:flex w-full h-auto text-white max-w-[80%] self-center">
          <div className=" w-[10%] flex justify-center h-full"><Image src={"/detalle.svg"} width={20} height={0} alt="detalle"></Image></div>
          <div className="w-[40%] flex flex-col gap-6">
            <h4 className=" text-4xl px-10"><span className=" text-[#D8FFCE]">Fortaleza calidad y diseño</span> en cada puntada</h4>
            <ContactButton tailwind={" w-2/4 h-8 mx-24"}></ContactButton>
          </div>
          <div className="w-[40%] text-sm flex flex-col gap-5 px-8 text-gray-300">
            <p><span className=" text-white text-lg">LECA</span> destaca por su calidad y minimalismo; es nuestra declaración de principios. Como pioneros en la producción textil mayorista, nos posicionamos en la vanguardia de la responsabilidad social corporativa. Con cada remera, cada uniforme escolar y cada servicio personalizado que ofrecemos, reafirmamos nuestro compromiso con la excelencia y el Movimiento Solidario.</p>
            <p className=" hidden lg:inline-block">Nuestros diseños, simples pero premium, llevan el sello de la autenticidad y la innovación, garantizando a nuestros socios productos que resuenan con los valores de sostenibilidad y confianza. Unimos tradición y modernidad para crear no solo prendas, sino legados de integridad y confianza.</p>
          </div>
          <div className="w-[10%] flex justify-center h-full"><Image src={"/detalle.svg"} width={20} height={0} alt="detalle"></Image></div>
        </div>
        <ContactButton tailwind={' w-2/4 h-8 self-center md:hidden'}></ContactButton>
      </div>
      <div id="servicios" className="servicios flex flex-col justify-center md:hidden ">
        <h3 className=" text-white text-2xl text-center pb-4">Nuestros Servicios</h3>
        <div className=" flex flex-col gap-4 justify-center">
          <Servicio icon={"/tijera.svg"} title={"Corte y confección"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-corte"}></Servicio>
          <Servicio icon={"/inventory.svg"} title={"Producto Terminado"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-terminado"}></Servicio>
          <Servicio icon={"/shirt.svg"} title={"Estampado"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-estampados"}></Servicio>
          <Servicio icon={"/letras.svg"} title={"Bordados"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-bordados"}></Servicio>
        </div>
        <ContactButton tailwind={' w-2/4 h-8 self-center mt-6'}></ContactButton>
      </div>
      <div id="serviciosLg" className="serviciosLg w-full h-screen hidden md:flex flex-col gap-4">
        <div className=" text-white flex flex-col gap-2 mb-10">
          <h4 className=" text-3xl text-center">Nuestros Servicios</h4>
          <p className=" text-sm text-center text-gray-300">Estos son nuestros servicios, contamos con un equipo experto encargado de cada area</p>
        </div>
        <div className=" flex w-[80%] h-auto justify-center self-center">
          <div className=" w-full flex flex-col justify-center gap-4">
            <Servicio icon={"/tijera.svg"} title={"Corte y confección"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-corte"}></Servicio>
            <Servicio icon={"/inventory.svg"} title={"Producto Terminado"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-terminado"}></Servicio>
          </div>
          <div className="w-full flex flex-col justify-center gap-4">
            <Servicio icon={"/shirt.svg"} title={"Estampado"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-estampados"}></Servicio>
            <Servicio icon={"/letras.svg"} title={"Bordados"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-bordados"}></Servicio>
          </div>
        </div>
        <ContactButton tailwind={"w-1/6 h-auto py-1 self-center my-5"}></ContactButton>
        <div id="socialProofLg" className="socialProofLg hidden md:flex w-full justify-center ">
          <div className=" px-8 mt-5 gap-8 self-center bg-white h-auto py-3 rounded-lg justify-center flex w-fit">
            <Image src={"/jack2.png"} width={90} height={50} alt="jack"></Image>
            <Image src={"/janome2.png"} width={130} height={50} alt="Janome"></Image>
            <Image src={"/cladd1.png"} width={100} height={75} alt="Textil Cladd"></Image>
            <Image src={"/americancotton1.png"} width={340} height={100} alt="American Cotton"></Image>
          </div>
      </div>
      </div>
      <div id="socialProof" className="socialProof md:hidden h-auto w-auto flex overflow-scroll gap-10 my-16 -rotate-3 bg-white  px-3 py-3 scroll-smooth snap-center">
        <Image src={"/jack2.png"} width={90} height={50} alt="jack"></Image>
        <Image src={"/janome2.png"} width={100} height={50} alt="Janome"></Image>
        <Image src={"/cladd1.png"} width={60} height={75} alt="Textil Cladd"></Image>
        <Image src={"/americancotton1.png"} width={300} height={100} alt="American Cotton"></Image>
      </div>
      
      <div id="testimonios" className="testimonios h-auto w-full flex flex-col mb-10 justify-start gap-10">
        <div className=" flex flex-col gap-3">
        <h3 className=" text-white text-3xl px-2 text-center font-semibold">Clientes Satisfechos</h3>
        <p className=" text-gray-400 text-sm px-6 text-center font-extralight">Tené en cuenta las experiencias satisfactorias que tuvieron nuestros clientes</p>
        </div>
        <div className=" flex flex-col md:flex-row justify-center gap-4">
          <div className="hidden md:flex self-center  justify-center w-full h-full">
            <Image src={"/detalle.svg"} width={10} height={0} alt="detalle"></Image>
          </div>
          <iframe src="https://player.vimeo.com/video/922710681?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className=""></iframe>
          <iframe src="https://player.vimeo.com/video/922713513?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className=""></iframe> 
          <div className=" self-center hidden md:flex justify-center w-full h-full">
            <Image src={"/detalle.svg"} width={10} height={0} alt="detalle"></Image>
          </div>
        </div>
        <ContactButton tailwind={' w-2/4 md:w-1/6 h-8 self-center mt-6'}></ContactButton>
      </div>
      <footer className="footer h-auto w-full bg-[#392972] flex justify-around flex-col md:flex-row gap-5 py-3">
          <div className=" flex flex-row-reverse gap-4 justify-center align-middle self-start ml-4">
            <Image src={"/leca.svg"} width={80} height={80} alt=" Leca Logo"></Image>
            <Image src={"/logo.svg"} width={40} height={40} alt=" Leca Logo"></Image>
          </div>
          <div className="flex flex-col">
            <h4 className=" hidden md:inline-block text-white text-lg">Encontranos</h4>
            <div className=" w-11/12 md:w-full h-36 bg-bg-mapa bg-cover bg-center self-center rounded-lg">
            </div>
            <div className=" flex flex-row-reverse pt-1 md:flex-col justify-center gap-3">
            <p className=" text-white text-md flex justify-center align-middle self-center ">Ntra Sra del Buen Viaje 1055, Morón</p>
            <Image className="flex md:hidden" src={"/maps.png"} width={30} height={30} alt="map icon"></Image>
            </div>
          </div>
          <div className=" flex md:w-[40%] h-auto self-center w-full justify-around">
            <div>
              <h4 className=" text-lg text-white">Directorio</h4>
              <ul>
                <li><a className="text-gray-400" href="#homeS">Inicio</a></li>
                <li><a className="text-gray-400" href="#">Productos</a></li>
                <li><a className="text-gray-400" href="#">Sobre Nosotros</a></li>
                <li><a className="text-gray-400" href="#">Servicios</a></li>
                <li><a className="text-gray-400" href="#">Testimonios</a></li>
              </ul>
            </div>
            <div className="">
              <h4 className=" text-lg text-white">Redes Sociales</h4>
              <ul>
                <li className=" flex gap-1">
                  <Image src={"/instagram.svg"} width={20} height={30} alt="whatsapp icon"></Image>
                  <a className="text-gray-400" href="#">@lecaindumentaria</a>
                </li>
                <li className=" flex gap-1">
                <Image src={"/facebook.svg"} width={20} height={30} alt="whatsapp icon"></Image>
                  <a className="text-gray-400" href="#">lecaindumentaria</a>
                </li>
                <li className=" flex gap-1">
                <Image src={"/whatsapp.svg"} width={20} height={30} alt="whatsapp icon"></Image>
                  <a className="text-gray-400" href="#">+54 12345678</a>
                </li>
              </ul>
            </div>
          </div>
      </footer>
    </main>
    
  );
}        


