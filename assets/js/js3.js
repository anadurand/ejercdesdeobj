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
    if(validarCumple(cumple)){
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

}

//boton para imprimir todos
print.onclick = function(){
  var ficha = "";
  arrayPersona.forEach(function(item,i){
    ficha += item.print();
  });
document.getElementById("todos").innerHTML = ficha;
}
//Solo validado para que ingrese numeros correctos, todavia falta para cada mes
function validarCumple(cumple){

  cumple = cumple.split("/");

  if(cumple.length==2){
    var c= 0;
    for(i=0; i<2; i++){
      if(cumple[i].length == 2 && cumple[i].match(/^[0-9]+$/)){
        if(i == 0){
          if(parseInt(cumple[i])<=31 && parseInt(cumple[i])>0){
             c++;
          }else{
            alert("Ingresar cumpleaños segun formato");
            break;
          }
        }else{
          if(parseInt(cumple[i])<=12 && parseInt(cumple[i])>0){
            c++;
          }else{
            alert("Ingresar cumpleaños segun formato");
          }
        }
      }else{
        alert("Ingresar cumpleaños segun formato");
        break;
      }
    }
  }else{
    alert("Ingresar cumpleaños segun formato");
  }
  if(c==2){return true;}
}
