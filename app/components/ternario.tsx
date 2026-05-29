"use client"
import { Button } from "@/components/ui/button"
import {useState} from "react";
export default function Ternario(){
    //condicion ? si : no
    const [dia,setDia]=useState(true)
    function cambiar(){
        console.log(dia)
        if(dia==true){
            setDia(false)
        }else{
            setDia(true)
        }
    }
    return(<div className={`flex min-h-screen ${dia ? 'bg-white' : 'bg-black'}`}>
        <Button variant="outline" onClick={cambiar}>Modo</Button>
    </div>)
}