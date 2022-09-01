const cards = document.querySelectorAll(".clickables");
let pick;

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        pick = card.name;
        document.getElementById(pick).style.marginTop="227px";        
    })
    card.addEventListener("mouseleave" , () => {
        pick = card.name;
        document.getElementById(pick).style.marginTop="345px";
    })
})
