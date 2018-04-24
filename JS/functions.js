/***********************************************************
Este archivo contiene funciones generales y de utilería que
pueden servir como apoyo en la lógica de los demás scripts.
No están asociadas directamente a la lógica de una página en
particular sino que pueden emplearse en cualquiera.
************************************************************/

//Obtiene el valor de un parámetro de la URL
function getParameter(name){

    var parametersText = window.location.search.substring(1);
    var parameters = {};

    if(parametersText !== ""){
        var parametersListString = parametersText.split("&");

        for(var i=0; i<parametersListString.length; i++){
            var parameterComponents = parametersListString[i].split("=");
            parameters[parameterComponents[0]] = parameterComponents[1];
        }
    }

    return parameters[name];
}

//Devuelve un número entero aleatorio entre min y max
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Carga un archivo JSON desde una URL y devuelve su contenido como objeto de JS
function getJsonFile(url,callback){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if( (this.readyState === 4) && ( (this.status === 200) || (this.status === 304) ) ){
                callback(JSON.parse(this.responseText));
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();

}
