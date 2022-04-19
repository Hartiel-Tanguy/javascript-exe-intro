const importants = document.querySelectorAll('.important');
 
for (let i = 0; i < importants.length; i++) {
importants[i].setAttribute("title","this is an important item")


}



const photo = document.querySelectorAll("img");
for (const pic of photo) {
    if(!pic.hasAttribute("class", "important")){
        pic.style.display ='none';
    }
}



const para = document.querySelectorAll("p");
for (const poro of para) {
    if (poro.hasAttribute("class")){
        console.log(poro.className)
    }
    console.log(poro.textContent)
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor;
}

const paraphElem = document.querySelectorAll('p');

for(let i = 0; i < paraphElem.length; i++) {
    if(!paraphElem[i].className)
    paraphElem[i].style.color = random_bg_color();
}