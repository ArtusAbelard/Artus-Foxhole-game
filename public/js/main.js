import {gifchoix,acceuil,jeuxcolo,jeuxwarden,btnacceuil,infobtn,infobtnwar,infocolo,infowarden,infobacktoacceuil,backtoacceuilwar,warden,colonial,attaque1shootcolo,pvtextwar,armorwar, attaque2aeriennecolo ,pvtextcolo,armorcol,amocolo,amowar,attaque3convois,attaque4repair } from "./instance.js";
import { shoot,repair } from "./function.js"


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
pvtextwar.innerText = warden.pv 
pvtextcolo.innerText = colonial.pv
amocolo.innerHTML=colonial.amo
amowar.innerHTML=warden.amo

// if (colonial.amo<=1){
//     attaque3convois.style.display="block"

    
// }





attaque1shootcolo.addEventListener("click",()=>{
    if (colonial.amo==2){
        attaque3convois.style.display="block"
    
        
    }
    shoot(colonial,warden,armorwar)

    amocolo.innerHTML=colonial.amo
    pvtextwar.innerText = warden.pv 
    attaque1shootcolo.style.display="none"
    setTimeout(()=>{
        attaque1shootcolo.style.display="block"
    },2000)
})

//! btn attaque aerienne

attaque2aeriennecolo.addEventListener('click', ()=>{
    attaque2aeriennecolo.style.display="none"
    setTimeout(()=>{
        attaque2aeriennecolo.style.display="block"
    },30000)
})

//! btn convois de ravitaillement

attaque3convois.addEventListener('click', ()=>{
    colonial.amo=colonial.amo+5
    amocolo.innerHTML=colonial.amo
    attaque3convois.style.display="none"

})

//! btn repair 

attaque4repair.addEventListener('click', ()=>{
    repair(colonial)
    pvtextcolo.innerText = colonial.pv

    attaque4repair.style.display="none"
    setTimeout(()=>{
        attaque4repair.style.display="block"
    },2000)
})









