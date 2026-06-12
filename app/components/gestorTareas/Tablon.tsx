//"use client"
import { insertarTarea, obtenerTareas } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
type Tarea={
    id:number,
    titulo: string,
    descripcion:string
}


export default async function Tablon(){
   
    const tareas = await obtenerTareas()
    async function anadirTarea(formData: FormData) {
        "use server"
        const titulo = formData.get("titulo")
        const descripcion = formData.get("descripcion")
        if (typeof titulo !== "string" || typeof descripcion !== "string") {
        return
        }
        if (titulo.trim() === "" || descripcion.trim() === "") {
          return
        }
        await insertarTarea(titulo.trim(), descripcion.trim())
        revalidatePath("/gestorTareas")

    }
        
    //#00786f
    return(<div className="pl-3 flex flex-row min-h-screen bg-teal-100">
        <div className=" min-w-1/2">
            <h1 className="p-1 ml-10 pt-4 text-2xl font-bold text-teal-600">Gestor de tareas básico</h1>
            <form action={anadirTarea}>
                <div>
                    <Input className="max-w-70 m-1 ml-10 bg-white" name="titulo" placeholder="Escribe un título" ></Input>
                    <Textarea className="max-w-90 m-1 ml-10 bg-gray-200" name="descripcion" placeholder="Escribe una descripción"></Textarea>
                    <Button  className="max-w-30 m-1 ml-10" >Nueva Tarea</Button>
                
                </div>
            </form>
            
        </div>

        <div className="bg-cyan-800 min-w-1/2 flex justify-center">
        {tareas.length === 0 ? (    
            <div>
                
        
            <Alert variant="destructive" className={`max-w-md border-0 bg-transparent `}>
                <AlertTitle className="text-white bg-transparent text-center text-lg">Todavía no tienes tareas</AlertTitle>
            </Alert>
            </div>
        ) : (
            <div >{tareas.map((tarea) => (
                <div key={tarea.id}>
                <Card className="min-w-50  m-3 p-4 pl-4 h-auto">
                    <div>
                        <CardTitle pl-1>{tarea.titulo}</CardTitle>
                        <Textarea  id="textarea-disabled" disabled className="cursor-pointer">{tarea.descripcion}</Textarea>
                        <div className="flex flex-row">
                            <Switch id="completado" className="m-2" /><Label className="pl-2">Completado</Label>
                        </div>
                    </div>
                </Card>
                </div>
            ))}</div>
        )}
        </div>
    </div>)
}