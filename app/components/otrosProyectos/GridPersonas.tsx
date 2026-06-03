import TarjetaPersonas from "./TarjetaPersonas";
export default function GridPersonas(){
    let nombre="Ana"
    let edad=30
    let profesion="Médica"
    let nombre2="Lucía"
    let edad2=25
    let profesion2="Actriz"
    return (<div className="grid grid-cols-1 gap-1 w-100 justify-center">
        <TarjetaPersonas nombre={nombre} edad={edad} profesion={profesion}></TarjetaPersonas>
        <TarjetaPersonas nombre={nombre2} edad={edad2} profesion={profesion2}></TarjetaPersonas>
        <TarjetaPersonas nombre={nombre} edad={edad} profesion={profesion}></TarjetaPersonas>
        <TarjetaPersonas nombre={nombre2} edad={edad} profesion={profesion}></TarjetaPersonas>
        </div>)
}