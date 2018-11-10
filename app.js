
var correctAnswers = 0;
var timeoutId = setTimeout(clock, 15000);
var time;

function clock (){
    document.getElementById("perdiste").innerHTML = "Perdiste";
}
function countDown (seconds, element){
    var element = document.getElementById(element);
    element.innerHTML = ("Segundos restantes: " + seconds)
    if (seconds < 1){
        clearTimeout(time);
        element.innerHTML = "Se te acabo el tiempo";
    }
    seconds--;
    time = setTimeout('countDown('+seconds+', "'+"timer"+'")',1500);
}

$("#finish").click(function () {
    clearTimeout(timeoutId);
    clearTimeout(time);
    $("input[type='radio']").each(function (index, radioButton) {
        console.log($(radioButton).is(":checked"))
    })
    if(document.getElementById("respuesta1").checked){
        correctAnswers ++;
        document.getElementById("correct").innerHTML = "Respuestas correctas: " +  correctAnswers;
    }
    if(document.getElementById("respuesta2").checked){
        correctAnswers ++;
        document.getElementById("correct").innerHTML = "Respuestas correctas: " +  correctAnswers;
    }  
    if(document.getElementById("respuesta3").checked){
        correctAnswers ++;
        document.getElementById("correct").innerHTML = "Respuestas correctas: " +  correctAnswers;
    }  
    if(document.getElementById("respuesta4").checked){
        correctAnswers ++;
        document.getElementById("correct").innerHTML = "Respuestas correctas: " + correctAnswers;
    }  
    
    document.getElementById("incorrect").innerHTML = "Respuestas incorrectas: " + (4-correctAnswers);
})




countDown(15, "timer");

