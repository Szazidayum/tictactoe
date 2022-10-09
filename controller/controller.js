import Elem from "../view/elem.js";
import JatekModel from "../modell/modell.js";

class AdatController{
    #elemLista = [];

    constructor(){
        const jatekModel = new JatekModel();
       for (let i = 0; i < 9; i++) {
            const elem = new Elem(i, false);
            this.#elemLista.push(elem);
       }
       $(window).on("elemreKattintas", (event) =>{
            const index = (event.detail);
            let kov = jatekModel.kovetkezo(index);
            this.#elemLista[index].setErtek(kov);
       })
       
    }   
}

export default AdatController;