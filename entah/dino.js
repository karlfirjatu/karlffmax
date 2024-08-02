const dino = document.querySelector('.dino')
const kaktus = document.querySelector ('.kaktus')
const button = document.querySelector ('.button')

button.addEventListener('click', function() {
kaktus.style.animationplayState = 'running'
button.style.display = 'none'
})
 window.addEventListener('click', function (){
    dino.style.buttom = '150px'
    this.setTimeout(() => {
        dino.style.buttom = '-5px'
    }, 600);
 })
setInterval(() => {
 const dinoBound = dino.getBoundingClientRect()
 const kaktusBound = kaktus.getBoundingClientRect()
 const leftJump = dinoBound.right - 10 >= kaktusBound.left
 const rightJump = dinoBound.left + 20 <= kaktusBound.right
 const topJump = dinoBound.bottom >= kaktusBound.top
if (leftJump && topJump && rightJump) {
    document.body.innerHTML ='Game Over!!!'
}

}, 100)