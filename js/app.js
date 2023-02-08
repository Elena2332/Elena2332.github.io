let divMenuGeneral;
let desplegado;
let difOld = 1, yOld = 0;

window.onload
{
    divMenuGeneral = document.getElementById("menuGeneral");
    desplegado = false;
}

window.onscroll = function() {
    let yAux = window.scrollY;   // y actual
    
    // si la diferencia entre la posicion actual y la anterior es mayor a 100
    let dif = Math.round(yAux-yOld);    // 0  cuando cambia de sentido
    console.log(dif)
    
    yOld = yAux;
    // document.getElementById('y').innerText = y;
    // console.log('Old:'+yOld+'   New:'+yNew);
}

function gestionarMenu()
{
    if(desplegado)   // ocultar menu
    {
        console.log("ocultar");
        desplegado = false;
        divMenuGeneral.setAtributte("class","menuOculto");
    }
    else    // mostrar menu
    {
        console.log("mostrar");
        desplegado = true;
        divMenuGeneral.setAtributte("class","menuDesplegado");
    }
}
