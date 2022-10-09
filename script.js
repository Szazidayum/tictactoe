import AdatController from "../controller/controller.js";

let jatek;

const kezdes = $("#kezd");
let xJatekos = $("#xjatekos");
let oJatekos = $("#ojatekos");
const kiiras=$(".kiiras");

kezdes.on("click", function(){
    if(xJatekos.val()=="" || oJatekos.val()==""){
        kiiras.html("<p>Kérem adja meg mind a két nevet!</p>");
    }else{
        jatek = new AdatController();
        kezdes.addClass("disabled")
    }
})