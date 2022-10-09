/*import Elem from "./view/elem.js";

class Jatekter{
    #nyertesSor = [
        [0, 1, 2],
        [0, 3, 6],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6]
    ] 
    #lista = [];

    

    constructor(){
        const nev = $("#xjatekos").val();
        const SZULOELEM=$(".jatek");
        for (let index = 0; index < 9; index++) {
            const UJELEM = new Elem(index, "", SZULOELEM, nev);
            this.#lista.push(UJELEM); 
        }
        $(window).on("elemreKattintas",(event)=>{
            console.log(event.detail);
            this.vanNyertes(event.detail);  
        })
    }

    vanNyertes(){
        const kiiras=$(".kiiras");
        this.#lista[id]

    for (let i of this.#nyertesSor) {
        let [elem1, elem2, elem3] = [
            this.#lista[i[0]].getAllapot(),
            this.#lista[i[1]].getAllapot(),
            this.#lista[i[2]].getAllapot()
        ]
    if(elem1 != "" && elem2 != "" && elem3 != ""){
        if((elem1 == elem2 && elem2 == elem3)){

            console.log(this.#lista[i[0]].getNev());

            kiiras.html("A nyertes: "+this.#lista[i[0]].getNev());
            
        };
    } }};
            
    }
    



export default Jatekter;*/