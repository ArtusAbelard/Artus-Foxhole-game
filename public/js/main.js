let gifchoix = document.querySelectorAll(".gifchoix")
let acceuil = document.querySelector("#acceuil")
let jeuxcolo = document.querySelector("#jeuxcolo")
let jeuxwarden = document.querySelector("#jeuxwarden")
let btnacceuil = document.querySelectorAll(".btnacceuil")



gifchoix[0].addEventListener('click', ()=>{
    // alert("ewa")
    acceuil.style.display="none"
    jeuxcolo.style.display="block"
})
gifchoix[1].addEventListener('click', ()=>{
    acceuil.style.display="none"
    jeuxwarden.style.display="block"
})

for (let index = 0; index < btnacceuil.length; index++) {
    btnacceuil[index].addEventListener('click', ()=>{
        acceuil.style.display="flex"
        jeuxwarden.style.display="none"
        jeuxcolo.style.display="none"
        
    })
    
}
