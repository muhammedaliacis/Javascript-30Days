const panels = document.querySelectorAll(".panel"); 

panels.forEach(function(panel){
    panel.addEventListener("click", toggleOpen);
    panel.addEventListener("transitionend", toggleActive);

});

function toggleOpen(){
    this.classList.toggle('open');

}

function toggleActive(e){
    if (e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active');
      }

}