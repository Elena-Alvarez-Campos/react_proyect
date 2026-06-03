import GridPrsonas from "./GridPersonas";
type GridPersonas={
        nombre:string,
        edad:number,
        profesion:string
    }
export default function({nombre,edad,profesion}:(GridPersonas)){
    return(<div className="grid grid-cols-1 gap-2 text-center w-30 bg-blue-100 m-2 border border-emerald-950 rounded-2xl">
        <p className="border-b border-emerald-950">{nombre}</p>
        <p>{edad} años</p>
        <p>{profesion}</p>
    </div>)
}