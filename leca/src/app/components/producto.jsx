export default function Producto({tailwind, titulo, descripcion}) {
    return(
        <div className={`${tailwind} bg-cover bg-center rounded-t-md flex flex-col`}>
            <div className=" h-[60%] w-full"></div>
            <div className=" h-[40%] w-full bg-black bg-opacity-80 text-white text-left self-end pl-2 flex flex-col justify-center  ">
                <h3 className=" font-semibold text-lg ">{`${titulo}`}</h3>
                <p className=" w-full text-xs text-gray-300 ">{`${descripcion}`}</p>
            </div>
        </div>
    );
}