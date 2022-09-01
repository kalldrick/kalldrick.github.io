const front = document.getElementById('card-content');
let displays = front.getElementsByClassName("product");
const btns = document.querySelectorAll('.clickables');

for(let i = 0;i<displays.length;i++)
{
    btns[i].addEventListener("click", () => {
        let product_name = btns[i].name;
        for(let x = 0;x<displays.length;x++){
            if(displays[x].title == product_name){
                let curr_display  = document.getElementsByClassName("ready");
                if(curr_display.length>0){
                    curr_display[0].className = curr_display[0].className.replace("ready","");
                }
                displays[x].className += " ready";
            }
        }

    })
}

