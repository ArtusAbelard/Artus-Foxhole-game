let gifchoix = document.querySelectorAll(".gifchoix")
let acceuil = document.querySelector("#acceuil")
let jeuxcolo = document.querySelector("#jeuxcolo")
let jeuxwarden = document.querySelector("#jeuxwarden")
let btnacceuil = document.querySelectorAll(".btnacceuil")
let infobtn = document.querySelector("#infobtn")
let infobtnwar = document.querySelector("#infobtnwar")
let infocolo = document.querySelector(".infocolo")
let infowarden = document.querySelector(".infowarden")
let infobacktoacceuil = document.querySelectorAll(".backtoacceuil")
let backtoacceuilwar = document.querySelector("#backtoacceuilwar")



gifchoix[0].addEventListener('click', ()=>{
    acceuil.style.display="none"
    jeuxcolo.style.display="block"
})
gifchoix[1].addEventListener('click', ()=>{
    acceuil.style.display="none"
    jeuxwarden.style.display="block"
})


infobtn.addEventListener('click', ()=>{
    infocolo.style.display="flex"

})
infobtnwar.addEventListener("click", ()=>{
    infowarden.style.display="flex"
    
})
infobacktoacceuil[0].addEventListener("click",()=>{
    infocolo.style.display="none"
})
backtoacceuilwar.addEventListener('click', ()=>{
    infowarden.style.display="none"

})

for (let index = 0; index < btnacceuil.length; index++) {
    btnacceuil[index].addEventListener('click', ()=>{
        acceuil.style.display="flex"
        jeuxwarden.style.display="none"
        jeuxcolo.style.display="none"
        
    })
    
}
