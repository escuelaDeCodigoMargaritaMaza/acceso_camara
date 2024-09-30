// function convertir(){
//     var cantidadEntrada = parseFloat(document.getElementById('cantidadEntrada').value);
//     var unidadEntrada = document.getElementById('unidadEntrada').value;
//     var unidadSalida = document.getElementById('unidadSalida').value;
//     var total;

//     if(unidadEntrada === "metros" && unidadSalida === "kilometros"){
//         total = cantidadEntrada / 1000;

//     }else if(unidadEntrada === "kilometros" && unidadSalida === "metros"){
//         total = cantidadEntrada * 1000;
        
//     }else if(unidadEntrada === "gramos" && unidadSalida === "kilos"){
//         total = cantidadEntrada / 1000;
//     }else if(unidadEntrada === "kilos" && unidadSalida === "gramos"){
//         total = cantidadEntrada * 1000;
//     }else if(unidadEntrada === "celsius" && unidadSalida === "fahrengeit"){
//         total = (cantidadEntrada * 1.8) + 32;
//     }else if(unidadEntrada === "fahrengeit" && unidadSalida === "celsius"){
//     total = (cantidadEntrada - 32) / 1.8;
//     }else{
//         total = 0}

//     document.getElementById("datosSalida").textContent = "Resultado " + total + " " + unidadSalida;
// }

//API (funciones asincronas, esperan a que se cumpla algo)
// async function getWeather(){
//     var city = document.getElementById("city").value;
//     var apiKey = "dd736a9b5c8f7d803147ea15148b4940";
//     var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; //Se ponen estas comillas sl inicio y final ``
//     try{ //aqui se pone todo lo que evalua
//         var response = await fetch(url); //por conversion se escribe en ingles el await, espera en recivir una estructura de url
//         if(!response.ok) throw new Error ("Ciudad no encontrada"); //si no recibo un ok, estoy en el rango de los 200, si existe la ciudad
//         var data = await response.json(); //Json tipo de formato de base de datos
//         var temperature = data.main.temp;
//         var weatherDescription = data.weather[0].description; 

//         document.getElementById("resultadosClima").textContent = `Clima en ${city}: ${temperature} °C, ${weatherDescription}`;

//     }catch{
//         document.getElementById("resultadosClima").textContent = "Error";
//     }
// }

//TAREA: Modificar el primer programa con un true y catch, si el cero lo meto en division

// var frutas = ["manzana, pera, uvas"];
// console.log(frutas);
// frutas.push("durazno");
// console.log(frutas);
// frutas.pop("manzana");
// console.log(frutas);

// var estudiante = {
//     nombre: "Juan",
//     edad: 20,
//     carrera: "Sistemas",
//     promedio: 9.2
// };
// console.log(estuadiante);
// estudiante.semestre = 5;
// estudiante.universidad = "UNAM";

// console.log(estduiante);

const enableCamara = async () => {
    try{
        const video = document.getElementById('camara');
        const stream = await navigator.mediaDevices.getUserMedia({video:true});
        video.srcObject = stream;
    }catch(error){
        console.error('error accesando a la camara ',error);
    }
};
window.onload = enableCamara;