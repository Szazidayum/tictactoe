class Elem{

    #allapot;
    #index;
    constructor(index, allapot, SZULOELEM){
        this.#allapot = allapot;
        this.#index= index;
        SZULOELEM.append(`<div class="jatekElem"></div>`);
        this.kockaElem = SZULOELEM.children("div:last-child");
        this.kockaElem.on("click", () =>{
            console.log(this);
            this.setAllapot();
            this.kattintasTrigger();
        })
    }

    setAllapot(){
        console.log(this.#allapot);
            this.#allapot="X";
            this.kockaElem.html("X");
        
    }
    getAllapot(){
        return this.#allapot;
    }
    kattintasTrigger(){
        let event = new CustomEvent("elemreKattintas",{detail:this.#index})
        window.dispatchEvent(event);
    }
}

export default Elem;