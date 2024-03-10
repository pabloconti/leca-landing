export default function Producto({tailwind, titulo, descripcion}) {
    return(
        <div className={`${tailwind} bg-cover bg-center w-[165px] h-[130px] rounded-sm`}>
            <div className=" h-2/3 w-full"></div>
            <div className=" h-1/3 w-full bg-black bg-opacity-80 text-white">
                <h3 className=" font-semibold text-lg text-center">{`${titulo}`}</h3>
                <p className=" w-full text-xs text-center">{`${descripcion}`}</p>
            </div>
        </div>
    );
}