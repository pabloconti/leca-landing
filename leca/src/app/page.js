import Image from "next/image";
import ContactButton from "./components/contactButton";
import Producto from "./components/producto";
import Servicio from "./components/servicio";
import Video from "./components/video";
export default function Home() {
  return (
    <main>
      <div className="home h-screen w-full">
        <nav className=" h-[82px] w-full bg-main-bg bg-scroll flex flex-row-reverse justify-around align-middle absolute top-0">
          <div className=" flex flex-row-reverse gap-4 justify-center align-middle*">
            <Image src={"/leca.svg"} width={80} height={80} alt=" Leca Logo"></Image>
            <Image src={"/logo.svg"} width={40} height={40} alt=" Leca Logo"></Image>
          </div>
          <div className=" flex flex-col gap-1 justify-center ">
            <div className=" w-7 h-1 bg-white rounded-xl"></div>
            <div className=" w-7 h-1 bg-white rounded-xl"></div>
            <div className=" w-7 h-1 bg-white rounded-xl"></div>
          </div>
        </nav>
        <section className=" w-full h-screen bg-bg-home bg-cover bg-center">
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
      <div className="productos h-auto w-full justify-center flex flex-col gap-6">
        <div className=" h-auto w-full">
          <p className=" text-3xl font-semibold text-center text-white p-6">Nuestros Productos</p>
        </div>
        <div className="tarjetas flex justify-around">
          <div className=" fila1 flex flex-col gap-2">
            <Producto tailwind={"bg-bg-remeras"} titulo={"Remeras"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-buzos"} titulo={"Buzos"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-medico"} titulo={"Ambos"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-musculosa"} titulo={"Sin manga"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-ambo"} titulo={"Camisa trabajo"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-uniforme"} titulo={"Uniformes"} descripcion={"Resistentes y sofisticadas"}></Producto>
          </div>
          <div className=" fila2 flex flex-col gap-2">
            <Producto tailwind={"bg-bg-chombas"} titulo={"Chombas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-camperas"} titulo={"Camperas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-sinmanga"} titulo={"Musculosas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-calza"} titulo={"Calzas"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-cargo"} titulo={"Cargo"} descripcion={"Resistentes y sofisticadas"}></Producto>
            <Producto tailwind={"bg-bg-joggin"} titulo={"Joggin"} descripcion={"Resistentes y sofisticadas"}></Producto>
          </div>
        </div>
        <ContactButton tailwind={' w-2/4 h-8 self-center'}></ContactButton>
      </div>
      <div className="sobrenosotros h-screen flex flex-col justify-center gap-8">
        <div className=" flex flex-col">
          <div className=" w-[95%] h-20 self-center bg-bg-us bg-cover bg-center rounded-xl"></div>
          <div className=" w-fit py-1 px-3 bg-white rounded-2xl self-center relative -top-5"><p className=" text-xl text-black">Sobre <span className=" text-blue-600">Nosotros</span></p></div>
        </div>
        <div className=" flex flex-col gap-5">
          <h3 className=" text-white text-2xl px-3"><span className=" text-[#D8FFCE]">Fortaleza, calidad y diseño</span>  en cada puntada</h3>
          <p className=" text-white px-4">Somos fabricantes al por mayor especializados en una selecta gama de indumentaria, desde remeras y buzos hasta uniformes escolares y ropa de trabajo. Comprometidos con la excelencia, nuestros servicios de corte, confección, estampado y bordado garantizan que cada prenda cumpla con los más altos estándares de calidad y satisfacción del cliente.</p>
        </div>
        <ContactButton tailwind={' w-2/4 h-8 self-center'}></ContactButton>
      </div>
      <div className="servicios flex flex-col justify-center ">
        <h3 className=" text-white text-2xl text-center pb-4">Nuestros Servicios</h3>
        <div className=" flex flex-col gap-2 justify-center">
          <Servicio icon={"/tijera.svg"} title={"Corte y confección"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-corte"}></Servicio>
          <Servicio icon={"/inventory.svg"} title={"Producto Terminado"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-terminado"}></Servicio>
          <Servicio icon={"/shirt.svg"} title={"Estampado"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-estampados"}></Servicio>
          <Servicio icon={"/letras.svg"} title={"Bordados"} description={"Con extremo cuidado en cada puntada"} tailwind={" bg-bg-bordados"}></Servicio>
        </div>
        <ContactButton tailwind={' w-2/4 h-8 self-center mt-6'}></ContactButton>
      </div>
      <div className="socialProof h-auto w-auto flex overflow-scroll gap-10 my-16 -rotate-3 bg-white  px-3 py-3 scroll-smooth snap-center">
        <Image src={"/jack2.png"} width={90} height={50} alt="jack"></Image>
        <Image src={"/janome2.png"} width={100} height={50} alt="Janome"></Image>
        <Image src={"/cladd1.png"} width={60} height={75} alt="Textil Cladd"></Image>
        <Image src={"/americancotton1.png"} width={300} height={100} alt="American Cotton"></Image>
      </div>
      <div className="testimonios h-auto mb-8 w-full flex flex-col justify-start gap-8">
        <div className=" flex flex-col gap-2">
        <h3 className=" text-white text-3xl px-2 text-left font-semibold">Testimonios de nuestros clientes</h3>
        <p className=" text-gray-400 text-sm text-left px-2 font-extralight">Tené en cuenta las experiencias satisfactorias que tuvieron nuestros clientes</p>
        </div>
        <div className=" flex flex-col justify-center">
          <Video tailwind={"bg-bg-testimonio"} description={"Representante de XYZ cothing distribuidor Buenos Aires"} nombre={"Antonio Perez"}></Video>
        </div>
        <ContactButton tailwind={' w-2/4 h-8 self-center mt-6'}></ContactButton>
      </div>
      <footer className=" h-auto w-full">
        <div className="logo"></div>
        <div><div id="embed-map-canvas"><iframe  frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Garzón+279,+Rosario,+Santa+Fe+Province,+Argentina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="make-map-infor-mation">premium bootstrap themes</a></div>
      </footer>
    </main>
    
  );
}        