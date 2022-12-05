// aciona eventos quando chega serta posiçao da pagina
function scroll(){

    // mostra a posiçao da tela em px
    // document.querySelector(".mostra").innerHTML= window.scrollY
    
    var sou= document.querySelector(".sou")
    if (window.scrollY > 400){
        sou.style.opacity= 1
        sou.style.marginRight= "10px"
    }else{
        sou.style.opacity= 0
        sou.style.marginRight= "100px"
    }

    var sou= document.querySelector(".sou2")
    if (window.scrollY > 600){
        sou.style.opacity= 1
        sou.style.left= "5vw"
    }else{
        sou.style.opacity= 0
        sou.style.left= "10vw"
    }

    var icones= document.querySelector(".icones")
    if (window.scrollY > 1150){
        icones.style.width= "60vw"
    }else{
        icones.style.width= "40vw"
    }

    
}

// faz o background se mexer ao mover o mouse
function back(event){
    var header2= document.querySelector("#hab")
    var x = event.clientX
    var y = event.clientY
    header2.style.backgroundPositionX= x/30+"px"
    header2.style.backgroundPositionY= y/20+"px"
}

// menu retratil pra dispositivos mobile
var foi = 0
function menu(){
    var hambur= document.querySelector("#hambur")
    if (foi == 0){
        hambur.style.right= "0vw"
        foi = 1
    }else{
        hambur.style.right= "-100vw"
        foi = 0
    }
}