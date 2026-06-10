
import { revalidatePath } from "next/cache"
import { insertarTarea, obtenerTareas } from "@/lib/db"
import Tablon from "./components/gestorTareas/Tablon";
//import tarea from "./components/tarea"
export default async function Home() {
  
  
  return (<Tablon></Tablon>);
}
