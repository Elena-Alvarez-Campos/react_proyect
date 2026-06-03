"use client"
import { Button } from "@/components/ui/button"
import {useState} from "react";
import Tarea from "./Tareas";
type Tarea={
        id:number,
        titulo: string,
        descripcion:string
}

export default function({id,titulo,descripcion}:(Tarea)){
    const [titulos, setTitulo] = useState("")//título que empieza vacío
    const [descripciones, setDescripcion] = useState("")//descripción qiue empieza vacío
    const [tareas, setTareas] = useState<Tarea[]>([])//array tareas creadas que empieza vacío
    function anadirTarea() {
        if (titulo.trim() === "" || descripcion.trim() === "") {
            return
        }
        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo: titulo.trim(),
            descripcion: descripcion.trim(),
        }
        setTareas([...tareas, nuevaTarea])
        setTitulo("")
        setDescripcion("")
    }

    return(<div>
        <div>
            <input></input>
            <textarea></textarea>
            <Button></Button>
        </div>
        <div className={ ${{tareas}==<Tarea[]>([]) ? 'bg-white' : 'bg-black'}}>
            <div onClick={anadirTarea}></div>
        </div>
    </div>)
}