import Image from "next/image";

export default function Servicio({tailwind, icon, title, description}){
    return(
        <div className={`${tailwind} h-40 w-[85%] rounded-xl flex flex-col bg-center self-center bg-cover justify-center gap-4 `}>
            <Image className="  self-center" src={icon} width={60} height={60} alt="Icono"></Image>
            <div className=" flex flex-col bg-black bg-opacity-60 w-full p-2"> 
            <h4 className=" font-semibold text-lg text-white text-center">{`${title}`}</h4>
            <p className=" text-white text-sm text-center">{`${description}`}</p>
            </div>
        </div>
    );
}