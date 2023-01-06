const flecha1 = document.getElementById('arrow')
const contenido2 = document.getElementById('content2')
const flecha2 = document.getElementById('arrow2')
const contenido1 = document.getElementById('content1')

function deslizar(){
    flecha1.style.opacity= '0'
    flecha1.style.display= 'none'
    contenido2.classList.add('animate__fadeInRightBig')
    contenido2.style.display = 'block'
    contenido2.style.backgroundColor= '#fff'
    contenido2.style.height= '100%'
    contenido2.style.width= '50%'
    contenido2.style.display= 'flex'
    contenido2.style.justifyContent= 'center'
    contenido2.style.textAlign= 'center'
    contenido2.style.alignItems= 'center'
    
    contenido1.style.marginRight= '10px'
    contenido1.style.height= '100%'
    flecha2.style.opacity= '1'
    flecha2.style.display= 'block'
    flecha2.style.position= 'absolute'
    flecha2.style.left= '100%'
    flecha2.style.top= '45%'
    flecha2.style.marginLeft= '10px'
}

function ocultar(){
    contenido2.classList.remove("animate__fadeInRightBig")
    contenido2.classList.add('animate__fadeOutRightBig')
    contenido2.style.width= '0vw'
    contenido1.style.width= '100vw'
}