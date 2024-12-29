let speech = new SpeechSynthesisUtterance();
document.querySelector("button").addEventListener("click", ()=> {
    const text = document.querySelector("textarea").value.trim();
    if(text){
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }
    else{
        alert("Please enter some text to convert the speech");
    }
});
