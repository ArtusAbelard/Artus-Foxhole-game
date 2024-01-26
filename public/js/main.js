import {gifchoix,acceuil,jeuxcolo,jeuxwarden,btnacceuil,infobtn,infobtnwar,infocolo,infowarden,infobacktoacceuil,backtoacceuilwar,warden,colonial,attaque1shootcolo } from "./instance.js";
import { shoot } from "./function.js"


//! btn acceuil :

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

//! btn shoot !

// shoot(warden,colonial)
// shoot(warden,colonial)
// shoot(warden,colonial)
// shoot(warden,colonial)
// shoot(warden,colonial)
// shoot(warden,colonial)

// shoot(colonial,warden)
// shoot(colonial,warden)
// shoot(colonial,warden)
// shoot(colonial,warden)
// shoot(colonial,warden)
// shoot(colonial,warden)
console.log(attaque1shootcolo);
attaque1shootcolo.addEventListener("click",()=>{
    shoot(colonial,warden)

})
