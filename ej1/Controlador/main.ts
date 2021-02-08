///<reference path="../Modelo/Proyecto.ts"/>
///<reference path="../Modelo/Persona.ts"/>
///<reference path="../jquery.js"/>
//@ts-notcheck

let listaUsuario:Array<Persona>=[];
let listaProyecto:Array<Proyecto>=[];
localStorage.setItem("datosUsuario", JSON.stringify([]));
function crearProyecto():void{
    let p1:Proyecto = new Proyecto("proyecto1");
    let p2:Proyecto = new Proyecto("proyecto2");
    listaProyecto.push(p1,p2);
}
function crearUsuarios():void{
    let usuario:Persona = new Persona("naia","123");
    let proyect:Proyecto = new Proyecto("proyectonaia");
    usuario.color ="pink";
    let arrayproyectos:Array<Proyecto> = [proyect];
    usuario.listaProyectos = arrayproyectos;
    listaUsuario.push(usuario);


    localStorage.setItem("datosUsuario", JSON.stringify(listaUsuario));
}

$(document).ready(function () {
    try{
        if (localStorage.getItem("datosUsuario")){
            crearProyecto();
            crearUsuarios();
        }
        $("#bAlta").click(altaUsuarios);
        $("#bConsulta").click(consultaUsuarios);
        $("#bAnadir").click(anadirProyecto);
        $("#bBorrar").click(borrarProyecto);
    }catch(error){
        console.log(error);
    }
})

function altaUsuarios(){
    let listaUsu:Array<Persona> = JSON.parse(localStorage.getItem("datosUsuario"));
    let user:string = $("#usuario").val().toString();
    let pass:string = $("#pass").val().toString();
    let usu:Persona = new Persona(user,pass);
    let color:string = prompt("¿Qué color quieres?");

    usu.color = color;

    listaUsu.push(usu);
    localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));

    //$("body").css("background", color);

}
function consultaUsuarios(){

    let listaUsu:any = JSON.parse(localStorage.getItem("datosUsuario"));
    let user:string = $("#usuario").val().toString();
    let pass:string = $("#pass").val().toString();
    let usuario:Persona = listaUsu.find(u => u._usuario == user && u._pass == pass );

    if (usuario != undefined){
        document.cookie = "cookieUsuario"+"="+ user;
        let listaProyecto:any = usuario._listaProyectos;
        let color:string = usuario._color;
        let lista:string ="";
        for (let x = 0; x < listaProyecto.length; x ++){
            lista = lista + "<li>" + listaProyecto[x]._titulo + "</li>";
        }
        $("#listadoProyectos").html(lista);
        $("body").css("background", color);
    }else
        alert("El usuario y/o contraseña incorrect@");
}
function anadirProyecto(){
    //let cookie:string = document.cookie.substring(14);
    let listaUsuarios:any = JSON.parse(localStorage.getItem("datosUsuario"));
    let proyectoNuevo:string = prompt("Introduce el nombre del proyecto que quieres añadir");

    let cookie:string = document.cookie;
    let cookies:any = cookie.split(";");
    cookie = cookies.find(c => c.includes("cookieUsuario="));
    let contenidoArray:any = cookie.split("=");
    let contenido:string = contenidoArray[1];

    let posicion:number = listaUsuarios.map(u => u._usuario).indexOf(contenido);

    console.log(listaUsuarios.map(u => u._usuario).indexOf(contenido));
    if (posicion != -1){
        let p = new Proyecto(proyectoNuevo);
        listaUsuarios[posicion]._listaProyectos.push(p);
        localStorage.setItem("datosUsuario", JSON.stringify(listaUsuarios));
        let lista:string ="";
        for (let x = 0; x < listaUsuarios[posicion]._listaProyectos.length; x ++){
            lista = lista + "<li>" + listaUsuarios[posicion]._listaProyectos[x]._titulo + "</li>";
        }
        $("#listadoProyectos").html(lista);
    }else
        alert("no se mete");

}
function borrarProyecto(){
    document.cookie = "cookieUsuario=";
}