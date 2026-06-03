"use client"
import { Button } from "@/components/ui/button"
import {useState} from "react";
import { Input } from "@/components/ui/input"
type Tarea={
    id:number,
    titulo: string,
    descripcion:string
}


export default function Tablon(){
    const [titulo, setTitulo] = useState("")//título que empieza vacío
    const [descripcion, setDescripcion] = useState("")//descripción qiue empieza vacío
    const [tarea, setTareas] = useState<Tarea[]>([])//array tareas creadas que empieza vacío
    function anadirTarea() {
        if (titulo.trim() === "" || descripcion.trim() === "") {
            return
        }
        const nuevaTarea: Tarea={
            id: Date.now(),
            titulo: titulo.trim(),
            descripcion: descripcion.trim(),
        }
        //let nuevaTarea=<Tareas id={Date.now()} titulo={titulo.trim()} descripcion={descripcion.trim()}></Tareas>
        
        setTareas([...tarea,nuevaTarea]);
        setTitulo("")
        setDescripcion("")
    }

    return(<div className="p-2">
        <div className="flex flex-col">
            <Input className="max-w-70" value={titulo} placeholder="Escribe un título" onChange={e => setTitulo(e.target.value)}></Input>
            <textarea value={descripcion} placeholder="Escribe una descripción" onChange={e => setDescripcion(e.target.value)}></textarea>
            <Button  className="max-w-30" onClick={anadirTarea}>Nueva Tarea</Button>
        </div>
        <div>
            <div>{tarea.map((tarea) => (
            <div key={tarea.id}>
                <h2>{tarea.titulo}</h2>
                <p>{tarea.descripcion}</p>
            </div>
        ))}</div>
        </div>
    </div>)
}