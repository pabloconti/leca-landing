import Image from "next/image";

export default function Servicio({tailwind, icon, title, description}){
    return(
        <div className={`${tailwind} h-44 w-[95%] rounded-xl flex flex-col bg-center self-center bg-cover justify-center gap-4 px-3 `}>
            <Image src={icon} width={60} height={60} alt="Icono"></Image>
            <div className=" flex flex-col"> 
            <h4 className=" font-semibold text-lg text-white">{`${title}`}</h4>
            <p className=" text-white text-sm">{`${description}`}</p>
            </div>
        </div>
    );
}