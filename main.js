Webcam.set({
    height:316,
    width:384,
    image_format:'png',
    png_quality:100
})
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img"src="'+data_uri+'">';
    });
}
console.log("ml5_version", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/b8w_biJhx/model.json', modelLoaded);
 
function modelLoaded() {
    console.log("Model Loaded!")
 }

function speak() {
    var synth= window.speechSynthesis;
    var speakdata1="The first Prediction is"+prediction_1;
    var speakdata2="The second Prediction is"+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterThis);
}