class Elem{

    static elem = "X";
    static nev = $("#xjatekos").val();

    #allapot;
    #index;
    constructor(index, allapot, SZULOELEM){
        
        this.#allapot = allapot;
        this.#index= index;
        SZULOELEM.append(`<div class="jatekElem"></div>`);
        
        this.kockaElem = SZULOELEM.children("div:last-child");
        this.kockaElem.on("click", () =>{
            /* console.log(this); */
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
            kiiras.html("A következő játékos jön: "+Elem.nev);
        }
    }

    kovetkezoElem(){
        if(Elem.elem=="X"){
            Elem.elem="O";
            this.#allapot="O";
            this.kockaElem.css('color', 'rgb(3, 97, 100)');
            Elem.nev=$("#ojatekos").val();
            
        }else{
            Elem.elem="X";
            this.#allapot="X";
            this.kockaElem.css('color', '#fff');
            Elem.nev=$("#xjatekos").val();
        };
    }

    getAllapot(){
        return this.#allapot;
    }
    getNev(){
        return Elem.nev;
    }
    
        kattintasTrigger(){
            let event = new CustomEvent("elemreKattintas",{detail:this})
            window.dispatchEvent(event);
    }
}

export default Elem;