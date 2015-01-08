/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.onload = function(){
    document.getElementById("pippo").onclick = function(){return check(this.form);};
};

function check(form)
{
    
    var nome = form.firstname.value;
    var cognome = form.lastname.value;
                
    if((nome=="")||(cognome=="")){
        alert("Parametri vuoti!Dati non inviati!");
        return false;
    }
   
    document.getElementById("nome").innerHTML("<p>"+nome+"</p>");
};
