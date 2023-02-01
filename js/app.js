let divMenuGeneral, btnMenu;
let desplegado;

window.onload
{
    divMenuGeneral = document.getElementById("menuGeneral");
    btnMenu = document.getElementById("btnMenu");
    btnMenu.addEventListener("click",gestionarMenu);
    desplegado = false;
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
