let opening = document.createElement("h1")
let title = document.createTextNode("Tout ce que vous avez à savoir")
let buttons = document.querySelectorAll('.main-button');
let infos = document.querySelectorAll('.main-container');
opening.appendChild(title);
document.body.insertBefore(opening, buttons[0]);

opening.style.color="blue";
opening.style.fontSize="36px";
opening.style.textAlign="center";
console.log(buttons);
console.log(infos);

for ( let i = 0; i < buttons.length; i++) {
   let button = buttons[i];
   let info =  infos[i];
   info.style.display="none";
    button.addEventListener('click', invisible(info))  
    button.addEventListener('click', visible(info))
} 
   function visible(e) { 
       if (e.style.display="none") 
       {
        e.style.display="block"
        console.log("e")
    }
}
    function invisible(e) {
        if (e.style.display="block")
        {
            e.style.display="none"
            console.log("y")
        }
    }