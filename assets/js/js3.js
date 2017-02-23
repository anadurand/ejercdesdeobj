var mostrar = document.getElementById("add-ficha");
var print = document.getElementById("printAll");
var ficha = document.getElementById("ficha");
var todos = document.getElementById("todos");
var arrayPersona = [];

//crear objetos

function Persona(name, lastName, status, birthday){
  this.name = name,
  this.lastName = lastName,
  this.status = status,
  this.birthday = birthday,
  this.print =  function(){

    return  ' <div>' +
          '<ul>'+
          '<li>Nombre: ' + this.name + '</li>'+
          '<li>Apellido: ' + this.lastName+ '</li>'+
          '<li>Rol: '+this.status + '</li>'+
          '<li>Cumpleaños: '+ this.birthday+ '</li>'+
        '</ul>' + '</div>';
  }
}
//boton enviar datos
mostrar.onclick = function(){

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var rol = document.getElementById("rol").value;
  var cumple = document.getElementById("cumple").value;

  if(nombre != "" && apellido != "" && rol!= "" && cumple!=""){

    var persona = new Persona(nombre, apellido, rol, cumple);
//ponga vacio el formulario
    document.getElementById("todos").innerHTML = persona.print();
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("rol").value = "";
    document.getElementById("cumple").value = "";
    arrayPersona.push(persona);

    }

}

//boton para imprimir todos
print.onclick = function(){
  var ficha = "";
  arrayPersona.forEach(function(item,i){
    ficha += item.print();
  });
document.getElementById("todos").innerHTML = ficha;
}
