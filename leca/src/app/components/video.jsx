import Image from "next/image";
export default function Video({nombre, description, tailwind}){
    return(
        <div className={`${tailwind} h-[187px] w-11/12 bg-center bg-cover flex flex-col justify-center self-center rounded-md`}>
            <Image className=" absolute self-center" src={"/play_circle.svg"} width={40} height={40}></Image>
            <div className=" text-white pl-2 relative -bottom-10">
                <h4 className=" text-lg">{nombre}</h4>
                <p className=" text-sm">{description}</p>
            </div>
            <div className=" flex gap-1 pl-2 relative -bottom-10">
                <Image src={"/star.svg"} width={30} height={30} alt="star"></Image>
                <Image src={"/star.svg"} width={30} height={30} alt="star"></Image>
                <Image src={"/star.svg"} width={30} height={30} alt="star"></Image>
                <Image src={"/star.svg"} width={30} height={30} alt="star"></Image>
                <Image src={"/star.svg"} width={30} height={30} alt="star"></Image>
            </div>
            
        </div>
    );
}