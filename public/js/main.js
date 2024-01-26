import {gifchoix,acceuil,jeuxcolo,jeuxwarden,btnacceuil,infobtn,infobtnwar,infocolo,infowarden,infobacktoacceuil,backtoacceuilwar,warden,colonial,attaque1shootcolo,pvtextwar,armorwar, attaque2aeriennecolo ,pvtextcolo,armorcol,amocolo,amowar,attaque3convois,attaque4repair, } from "./instance.js";
import { shoot,repair,airbomb, } from "./function.js"

// let joueur
// function switche() {
//     if (joueur == 0) joueur = 1;
//     else joueur = 0;

//     joueur = (joueur+1)%2
//     joueur = (joueur+1)%2
//     console.log(joueur)

// }

function randomattack() {
    if (warden.amo==0) {
        warden.amo=warden.amo+5
        amowar.innerHTML=warden.amo
        console.log("reloading");

        
    }else{
        let attack = Math.floor(Math.random()*3)
        console.log(attack);
        if (attack==0) {
            console.log("airbomb!!");
            airbomb(warden,colonial)
            pvtextwar.innerText = warden.pv 
            pvtextcolo.innerText = colonial.pv
            amocolo.innerHTML=colonial.amo
            amowar.innerHTML=warden.amo
        
    }else if (attack==1){
            console.log("repair!");
            repair(warden)
            pvtextwar.innerText = warden.pv 
            pvtextcolo.innerText = colonial.pv
            amocolo.innerHTML=colonial.amo
            amowar.innerHTML=warden.amo
    }else{
            console.log("shoot !!!");
            shoot(warden,colonial,armorcol)
            pvtextwar.innerText = warden.pv 
            pvtextcolo.innerText = colonial.pv
            amocolo.innerHTML=colonial.amo
            amowar.innerHTML=warden.amo
    }
    }   
}

function winner() {
    if (colonial.pv<=0) {
        alert("warden win !!")
        
    }else if (warden.pv<=0){
        alert("colonial winner ")
    }
    
}

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





attaque1shootcolo.addEventListener("click",()=>{
    winner()
    if (colonial.amo==2){
        attaque3convois.style.display="block"
    
        
    }
    shoot(colonial,warden,armorwar)
    setTimeout(()=>{
        randomattack()
    },2000)

    amowar.innerHTML=warden.amo
    amocolo.innerHTML=colonial.amo
    pvtextwar.innerText = warden.pv 
    pvtextcolo.innerText = colonial.pv
    attaque1shootcolo.style.display="none"
    setTimeout(()=>{
        attaque1shootcolo.style.display="block"
    },2000)
})

//! btn attaque aerienne

attaque2aeriennecolo.addEventListener('click', ()=>{
    winner()
    airbomb(colonial,warden)
    setTimeout(()=>{
        randomattack()
    },2000)

    pvtextwar.innerText = warden.pv 
    attaque2aeriennecolo.style.display="none"
    setTimeout(()=>{
        attaque2aeriennecolo.style.display="block"
    },15000)
})

//! btn convois de ravitaillement

attaque3convois.addEventListener('click', ()=>{
    winner()
    colonial.amo=colonial.amo+5
    amocolo.innerHTML=colonial.amo
    attaque3convois.style.display="none"
    setTimeout(()=>{
        randomattack()
    },2000)

})

//! btn repair 

attaque4repair.addEventListener('click', ()=>{
    winner()
    repair(colonial)
    setTimeout(()=>{
        randomattack()
    },2000)

    pvtextwar.innerText = warden.pv 
    pvtextcolo.innerText = colonial.pv
    amowar.innerHTML=warden.amo
    amocolo.innerHTML=colonial.amo
    
    
    attaque4repair.style.display="none"
    setTimeout(()=>{
        attaque4repair.style.display="block"
    },2000)
})



//! condition winner : 














// switche()
// switche()
// switche()
// switche()



// while ((colonial.pv>0)&&(warden.pv>0)) {
    
    
// }







