import Elem from "../elem.js";

class Jatekter{

    #lista = [];

    constructor(){
        const SZULOELEM=$(".jatek");
        for (let index = 0; index < 9; index++) {
            const UJELEM = new Elem(index, "", SZULOELEM);
            this.#lista.push(UJELEM); 
        }
        $(window).on("elemreKattintas",(event)=>{
            //console.log(event.detail);
            this.ertekValtoztatas(event.detail);
        })
    }
    ertekValtoztatas(id){
        console.log(id);
        if(this.#lista[id].getAllapot()==""){
            this.#lista[id].setAllapot();
           
        }
    }

}

export default Jatekter;