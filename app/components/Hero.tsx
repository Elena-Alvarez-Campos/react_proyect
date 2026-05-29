"use client"
import { Button } from "@/components/ui/button"
import {useState} from "react";
export default function Hero(){
    const [contador,setContador]=useState(0)

    return(<div>
            <p className="m-3 ">Contador: {contador}</p>
            <Button variant="outline" onClick={()=>setContador(contador+1)}>Button</Button>
            <button className="m-3" onClick={()=>setContador(contador-1)}>Restar</button>
            <button className="m-3" onClick={()=>setContador(contador-contador)}>Reiniciar</button>
        </div>
        )
}
