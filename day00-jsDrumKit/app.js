

window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const buton = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if(!audio){ return;}
    buton.style.scale = "1.1"
    buton.style.borderColor = "yellow";
    audio.currentTime = 0;
    audio.play();
    this.setTimeout(function(){
        buton.style.scale = ""
        buton.style.borderColor = "";  
    },350)
});