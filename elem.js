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
        const kiiras=$(".kiiras");
        if(this.#allapot==""){
            console.log(this.#allapot);
            this.kockaElem.html(`<p>${Elem.elem}</p>`);
            this.kovetkezoElem();
            kiiras.html("A következő játékos jön: "+Elem.elem)
        }
    }

    kovetkezoElem(){
        if(Elem.elem=="X"){
            Elem.elem="O";
            this.#allapot="O";
            this.kockaElem.css('color', 'rgb(3, 97, 100)');
        }else{
            Elem.elem="X";
            this.#allapot="X";
            this.kockaElem.css('color', '#fff');
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