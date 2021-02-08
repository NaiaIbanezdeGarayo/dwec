///<reference path="../Modelo/Proyecto.ts"/>
///<reference path="../Modelo/Persona.ts"/>
///<reference path="../jquery.js"/>
//@ts-notcheck
var listaUsuario = [];
var listaProyecto = [];
localStorage.setItem("datosUsuario", JSON.stringify([]));
function crearProyecto() {
    var p1 = new Proyecto("proyecto1");
    var p2 = new Proyecto("proyecto2");
    listaProyecto.push(p1, p2);
}
function crearUsuarios() {
    var usuario = new Persona("naia", "123");
    var proyect = new Proyecto("proyectonaia");
    usuario.color = "pink";
    var arrayproyectos = [proyect];
    usuario.listaProyectos = arrayproyectos;
    listaUsuario.push(usuario);
    localStorage.setItem("datosUsuario", JSON.stringify(listaUsuario));
}
$(document).ready(function () {
    try {
        if (localStorage.getItem("datosUsuario")) {
            crearProyecto();
            crearUsuarios();
        }
        $("#bAlta").click(altaUsuarios);
        $("#bConsulta").click(consultaUsuarios);
        $("#bAnadir").click(anadirProyecto);
        $("#bBorrar").click(borrarProyecto);
    }
    catch (error) {
        console.log(error);
    }
});
function altaUsuarios() {
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    var user = $("#usuario").val().toString();
    var pass = $("#pass").val().toString();
    var usu = new Persona(user, pass);
    var color = prompt("¿Qué color quieres?");
    usu.color = color;
    listaUsu.push(usu);
    localStorage.setItem("datosUsuario", JSON.stringify(listaUsu));
    //$("body").css("background", color);
}
function consultaUsuarios() {
    var listaUsu = JSON.parse(localStorage.getItem("datosUsuario"));
    var user = $("#usuario").val().toString();
    var pass = $("#pass").val().toString();
    var usuario = listaUsu.find(function (u) { return u._usuario == user && u._pass == pass; });
    if (usuario != undefined) {
        document.cookie = "cookieUsuario" + "=" + user;
        var listaProyecto_1 = usuario._listaProyectos;
        var color = usuario._color;
        var lista = "";
        for (var x = 0; x < listaProyecto_1.length; x++) {
            lista = lista + "<li>" + listaProyecto_1[x]._titulo + "</li>";
        }
        $("#listadoProyectos").html(lista);
        $("body").css("background", color);
    }
    else
        alert("El usuario y/o contraseña incorrect@");
}
function anadirProyecto() {
    //let cookie:string = document.cookie.substring(14);
    var listaUsuarios = JSON.parse(localStorage.getItem("datosUsuario"));
    var proyectoNuevo = prompt("Introduce el nombre del proyecto que quieres añadir");
    var cookie = document.cookie;
    var cookies = cookie.split(";");
    cookie = cookies.find(function (c) { return c.includes("cookieUsuario="); });
    var contenidoArray = cookie.split("=");
    var contenido = contenidoArray[1];
    var posicion = listaUsuarios.map(function (u) { return u._usuario; }).indexOf(contenido);
    console.log(listaUsuarios.map(function (u) { return u._usuario; }).indexOf(contenido));
    if (posicion != -1) {
        var p = new Proyecto(proyectoNuevo);
        listaUsuarios[posicion]._listaProyectos.push(p);
        localStorage.setItem("datosUsuario", JSON.stringify(listaUsuarios));
        var lista = "";
        for (var x = 0; x < listaUsuarios[posicion]._listaProyectos.length; x++) {
            lista = lista + "<li>" + listaUsuarios[posicion]._listaProyectos[x]._titulo + "</li>";
        }
        $("#listadoProyectos").html(lista);
    }
    else
        alert("no se mete");
}
function borrarProyecto() {
    document.cookie = "cookieUsuario=";
}
