const body = document.getElementsByTagName('body')[0]
 function setColor(name){
    body.style.backgroundColor = name 
 }

 function randomColor( ){
    const pink =Math.round(Math.random( )*255)
    const plum =Math.round(Math.random( )* 255)
    const purple = Math.round(Math.random( )*255)

    const color =`rgb(${plum},${purple},${pink})`
    body.style.backgroundColor= color;

 }