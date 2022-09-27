class Elem{

    static elem = "X";

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
        if(this.#allapot==""){
            console.log(this.#allapot);
            this.kockaElem.html(Elem.elem);
            this.kovetkezoElem();
        }
    }

    kovetkezoElem(){
        if(Elem.elem=="X"){
            Elem.elem="O";
            this.#allapot="O";
        }else{
            Elem.elem="X";
            this.#allapot="X";
        };
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