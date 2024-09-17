let a=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const color=document.querySelector("#color")
const button=document.querySelector("#button")

button.addEventListener('click',function(){
    let hexColor= '#'
    for (let i = 0; i < 6; i++) {
        hexColor += a[randomnogenerator()];
        }
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor
})

function randomnogenerator(){
    return Math.floor(Math.random()*a.length);
     
}

