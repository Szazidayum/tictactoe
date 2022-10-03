import Jatekter from "../view/jatekter.js";

var jatek;

const kezdes = $("#kezd");
var xJatekos = $("#xjatekos");
var oJatekos = $("#ojatekos");
const kiiras=$(".kiiras");

kezdes.on("click", function(){
    if(xJatekos.val()=="" || oJatekos.val()==""){
        kiiras.html("Kérem adja meg mind a két nevet!");
    }else{
        jatek = new Jatekter();
        kezdes.addClass("disabled")
    }
})

$(function(){
    /* console.log("belépési pont"); */
    
});