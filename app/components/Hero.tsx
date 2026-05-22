"use client"
import {useState} from "react";
export default function Hero(){
    const [contador,setContador]=useState(0)

    return(<div>
            <p className="m-3 ">Contador: {contador}</p>
            <button className="m-3 outline-1 border-green-500 border-solid " onClick={()=>setContador(contador+1)}>Contar</button>
            <button className="m-3" onClick={()=>setContador(contador-1)}>Restar</button>
            <button className="m-3" onClick={()=>setContador(contador-contador)}>Reiniciar</button>
        </div>
        )
}
