class JatekModel{

    #tomb = ["-", "-", "-", "-", "-", "-", "-", "-", "-",]
    #lepesszam
    #nev;
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

    constructor(){
       this.#lepesszam=0;
       this.#nev = this.#nev=$("#ojatekos").val();
    }

    kovetkezo(index){
        const kiiras=$(".kiiras");
        let kovetkezoJatekos="X";
        if(this.#lepesszam<8){
            this.#lepesszam++;
            if(this.#lepesszam%2==0){
                kovetkezoJatekos="O";
                this.#nev=$("#xjatekos").val();
            }else{
                this.#nev=$("#ojatekos").val();
            }
        }else{
            /* console.log("vége a játéknak"); */
            /* kiiras.html(`<p>Döntetlen!</p>`); */
        }
        kiiras.html(`<p>A következő játékos jön: ${this.#nev}</p>`);
        this.#tomb[index] = kovetkezoJatekos;
        if (this.#lepesszam>=5){
            this.ellenorzes(this.#tomb[index]);
        }
        return kovetkezoJatekos;
    }

    ellenorzes(id){
        const kiiras=$(".kiiras");
for (let i of this.#nyertesSor) {
    let [elem1, elem2, elem3] = [
        this.#tomb[i[0]],
        this.#tomb[i[1]],
        this.#tomb[i[2]]
    ]
if(elem1 != "-" && elem2 != "-" && elem3 != "-"){
    if((elem1 == elem2 && elem2 == elem3)){
        if(elem1=="X"){
            this.#nev = $("#xjatekos").val();
        }else{
            this.#nev = $("#ojatekos").val();
        }
        kiiras.html(`<p>A nyertes: ${this.#nev}!</p>`);
    }
}
}   
}
}

export default JatekModel;