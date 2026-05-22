import TarjetaPersonas from "./TarjetaPersonas";
export default function GridPersonas(){
    let nombre="Ana"
    let edad=30
    let profesion="Médica"
    let nombre2="Lucía"
    return (<div>
        <TarjetaPersonas nombre={nombre} edad={edad} profesion={profesion}></TarjetaPersonas>
        <TarjetaPersonas nombre={nombre2} edad={edad} profesion={profesion}></TarjetaPersonas>
        </div>)
}