import GridPErsonas from "./GridPersonas";
type GridPersonas={
        nombre:string,
        edad:number,
        profesion:string
    }
export default function({nombre,edad,profesion}:(GridPersonas)){
    return(<div className="bg-blue-300 m-2">
        <p>{nombre}</p>
        <p>{edad}</p>
        <p>{profesion}</p>
    </div>)
}