import GridPErsonas from "./GridPersonas";
type GridPersonas={
        nombre:string,
        edad:number,
        profesion:string
    }
export default function({nombre,edad,profesion}:(GridPersonas)){
    return(<div className="grid grid-cols-1 gap-2 text-center w-30 bg-blue-300 m-2">
        <p>{nombre}</p>
        <p>{edad}</p>
        <p>{profesion}</p>
    </div>)
}