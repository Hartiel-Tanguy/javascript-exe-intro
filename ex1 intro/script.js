
let titre = document.title;
document.title = "Modifying the dom";
console.log(document.title);




function couleur(){
    let lettre = '0123456789ABCDEF';
    let color = '#'
    for (let i =0; i <6; i++){
        color += lettre[Math.floor(Math.random() *16)];
    }
    return color
}


document.body.style.backgroundColor = couleur()



function bodyChild() {
    const collection = document.body.children;
    let text = "";
    for (let i = 0; i < collection.length; i++) {
        text += collection[i].tagName + " ";
    }
    console.log(text);
}

bodyChild()