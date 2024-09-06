//imprime mensaje de bienvenida a la consola

console.log("Sistema EBAC de registro de alumnos")

// se define un arreglo de registro con datos de alumnos en EBAC
var registro =[
    {nombre: " Christian Lara", edad: "28", zonaresidencia: "CDMX", nombreprograma: "Desarrollador Front End De Cero a Pro", email:"christianlara@gmail.com"},
    {nombre: " Adriana Garcia", edad: "26", zonaresidencia: "Puebla", nombreprograma: "Desarrollador Backend", email:"adriana_23@hotmail.com"},
    {nombre: " Adan Ramirez", edad: "35", zonaresidencia: "Nuevo Leon", nombreprograma: "Data Science", email:"adaramirez"},
    {nombre: " Wendy Cruz", edad: "37", zonaresidencia: "Aguascalientes", nombreprograma: "Marketing Digital", email:"wendi@gmail.com"},
    {nombre: " Brandon Moreno", edad: "23", zonaresidencia: "Quintana Roo", nombreprograma: "UX/UI desing", email:"brand1567@hotmail.com"},
];

// Funcion que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(){

// Se le solicita informacion al usuario para el registro de un nuevo alumno
var nombre = prompt ("Ingresa el nombre del nuevo alumno");
var zonaresidencia =prompt ( "Ingresa la zona de residencia del nuevo alumno");
var edad =prompt ("Ingresa edad del alumno");
var nombreprograma =prompt ("Ingresa programa a estudiar");
var email =prompt ("Ingresa correo electronico"); 

// Crea un objeto que se llama nuevoalumno con los datos ingresados
var nuevoAlumno ={ nombre: nombre, edad: edad, zonaResidencia: zonaresidencia, nombrePrograma: nombreprograma, email: email};


//Agrega la informacion de nuevoalumno al objeto
registro.push(nuevoAlumno);

}

//funcion para consultar los registros de los alumnos
function consultarregistros(){

    // este clico for itera sobre cada uno de los registros del arreglo
    for ( var i = 0; i < registro.length; i++) {

     // esta console.log permite ver al usuario el registro en la consola   
    console.log("Nombre:" + registro[i].nombre);
    console.log("Edad:" + registro[i].edad);
    console.log("Zona de residencia:" + registro[i].zonaresidencia);
    console.log("Nombre del programa:" + registro[i].nombreprograma);
    console.log("Email:" + registro[i].email);
};            

}


// esta funcion permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno(){

// solicita al usuario el nombre a eliminar    
var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

// utiliza el metodo filter para generar un nuevo arreglo sin el alumno a eliminar
registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);



}

// ciclo do while permite repetir el menu cuando es indicado hasta que no se cumpla la condicion

do {

// variable que toma la eleccion del usuario para ejecutar la funcion indicada

var opcion = prompt ("Seleccione una opcion: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");


// se declara este if para dar a elegir al usuario la opcion que requiera

if (opcion === "1"){
     agregarAlumno();
} else if(opcion === "2"){
    consultarregistros();
} else if(opcion === "3"){
    eliminarAlumno();
}else if("Salida"){
    alert("Salir del sistema");
}else {
 alert("Opcion invalida, elige otra");
}

//esta variable nos permite elegir si realizamos otra opcion o cerramos el ciclo

var continuar = prompt("¿Deseas hacer otra opciòn? ( S/N)");

// se encarga de cerrar el ciclo
} while (continuar === "s");



