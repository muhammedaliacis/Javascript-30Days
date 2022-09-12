const hour = document.getElementById("hand1");
const minute = document.getElementById("hand2");
const second = document.getElementById("hand3");


function run(){
    let saat = 0;
    let dakika = 0;
    let saniye = 0;

    let id = setInterval(function(){
        saniye += 1;
        second.setAttribute("style", `transform: rotate(${(saniye * 6) + 90}deg)`);
        if (saniye % 60 === 0){
            dakika += 1;
            minute.setAttribute("style", `transform: rotate(${(dakika * 6) + 90}deg)`);
            if (dakika % 60 === 0){
                saat += 1;
                hour.setAttribute("style", `transform: rotate(${(saat * 30) + 90}deg)`);
    
            }
        }

    },1000);
}

run();