"use client"

type Tarea = {
  id: number
  titulo: string
  descripcion: string
}
export default function ({id,titulo,descripcion}:(Tarea)) {
    return(
    <div className="grid grid-cols-1 gap-2 text-center w-30 bg-blue-100 m-2 border border-emerald-950 rounded-2xl">
        <p className="border-b border-emerald-950">{id}</p>
        <p>{titulo} años</p>
        <p>{descripcion}</p>
    </div>)

}