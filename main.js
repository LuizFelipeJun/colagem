var SpeechRecognition = window.webkitSpeechRecognition;
var Recogition = new SpeechRecognition();
var content;

function start() {
   Recogition.start();
}

Recogition.onresult = function(evento){
   console.log(evento);
   content = evento.results[0][0].transcript.toLowerCase();
   console.log(content);
   if(content == "selfie"){
      speak();
   }
}

var idDaImg;

function speak(){
   var synth = window.speechSynthesis;
   Webcam.attach(camera);
   var speakData = "Tirando sua selfie em 5 segundos";
   var utterThis = new SpeechSynthesisUtterance(speakData);
   synth.speak(utterThis);

   setTimeout(function() {
      idDaImg = "selfie1";
      tirandoASelfie();
      speakData = "Tirando sua selfie em 5 segundos";
      utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
   }, 5000);

   setTimeout(function() {
      idDaImg = "selfie2";
      tirandoASelfie();
      speakData = "Tirando sua selfie em 10 segundos";
      utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
   }, 10000);

   setTimeout(function() {
      idDaImg = "selfie3";
      tirandoASelfie();
      speakData = "Tirando sua selfie em 15 segundos";
      utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
   }, 15000);
}

var camera = document.getElementById("camera");
Webcam.set({
   width: 500,
   height: 400,
   img_format: "jpg",
   jpg_quality: 90
});

function tirandoASelfie() {
   Webcam.snap(function(dataURI){
      if(idDaImg == "selfie1") {
         document.getElementById("resultado1").innerHTML = "<img id='selfie1' src='" + dataURI + "'>";
      }

      if(idDaImg == "selfie2") {
         document.getElementById("resultado2").innerHTML = "<img id='selfie2' src='" + dataURI + "'>";
      }

      if(idDaImg == "selfie3") {
         document.getElementById("resultado3").innerHTML = "<img id='selfie3' src='" + dataURI + "'>";
      }
   })
}