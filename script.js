let name
function showName() {
  let questions=document.getElementById("container");
  let disappearFirst=document.getElementById("welcome");
  name= document.getElementById('padawan').value;

      if (name=="") {
    
  } else {
    alert ("Hola " + name + " ¿Listx para la trivia?");
  }
  disappearFirst.style.display="none";
  questions.style.display="block";
    }

function sendAnswer(){
  
  let score=0;



  if(document.getElementById("uno").checked) {
  alert ("¡Felicidades! La respuesta de la pregunta 1 es correcta.");
    score ++
}
if(document.getElementById("dos").checked) {
  alert ("Lo siento, la respuesta correcta de la pregunta 1 es la A.");
}
if(document.getElementById("tres").checked) {
  alert ("Lo siento, la respuesta correcta de la pregunta 1 es la A.");
}

  if(document.getElementById("one").checked) {
  alert ("Lo siento, la respuesta correcta de la pregunta 2 es la C.");
}
if(document.getElementById("two").checked) {
  alert ("Lo siento, la respuesta correcta de la pregunta 2 es la C.");
}
  
if(document.getElementById("three").checked) {
  alert ("¡Felicidades! La respuesta de la pregunta 2 es correcta.");
  score++
}


  if(document.getElementById("oneUno").checked) {
  alert ("Lo siento, la respuesta correcta de la pregunta 3 es la B.");
}
if(document.getElementById("twoDos").checked) {
  alert ("¡Felicidades! La respuesta de la pregunta 3 es correcta.");
  score++
}
if(document.getElementById ("threeTres").checked) {
  alert ("Lo siento, la respuesta correcta de la pregunta 3 es la B.");
}
 
//let scoreLink =document.getElementById("score1");
  
  // questions.style.display="none";
   //scoreLink.style.display="block";
if (score<=2){
  
 alert ("Tu puntuación es " + score + ". No eres tan fan como creíamos.");
 }else {
 alert ("Tu puntuación es " + score + ". ¡Felicidades, joven padawan! Eres unx verdaderx fan.");
}
 
}
