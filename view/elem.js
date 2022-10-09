class Elem{

    #allapot;
    #index;
    constructor(index, allapot){
        
        this.#allapot = allapot;
        this.#index= index;
        const elem = `<div class="jatekElem"><p></p></div>`;
        $(".jatek").append(elem);
        this.divElem = $(".jatek").children("div:last-child");
        this.pElem = this.divElem.children("p");

        this.divElem.on("click", () =>{
            this.kattintasTrigger();
            //ha van nyertes, akkor szedje le az összeset
            
        })
    }

    setErtek(jel){
        this.pElem.html(jel);
        if(jel=="X"){
            this.pElem.css('color', 'rgb(3, 97, 100)');
        }else{
            this.pElem.css('color', '#fff');
        }
        this.#allapot=true;
        this.divElem.off('click');
        
    }
    
        kattintasTrigger(){
            let event = new CustomEvent("elemreKattintas",{detail:this.#index})
            window.dispatchEvent(event);
    }
}

export default Elem;