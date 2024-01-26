import {gifchoix,acceuil,jeuxcolo,jeuxwarden,btnacceuil,infobtn,infobtnwar,infocolo,infowarden,infobacktoacceuil,backtoacceuilwar,warden,colonial,attaque1shootcolo,pvtextwar,armorwar, attaque2aeriennecolo ,pvtextcolo,armorcol,amocolo,amowar,attaque3convois,attaque4repair,divpv,divpvwar } from "./instance.js";
import { shoot,repair,airbomb, } from "./function.js"


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
    pvbarcolo()
    setTimeout(()=>{
        winner() 
    },1000)  
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
    pvbarwarden()
    setTimeout(()=>{
        winner() 
    },1000)  
})

//! btn attaque aerienne

attaque2aeriennecolo.addEventListener('click', ()=>{
    
    airbomb(colonial,warden)
    setTimeout(()=>{
        randomattack()
    },2000)

    pvtextwar.innerText = warden.pv 
    attaque2aeriennecolo.style.display="none"
    setTimeout(()=>{
        attaque2aeriennecolo.style.display="block"
    },15000)
    pvbarwarden()
    setTimeout(()=>{
        winner() 
    },1000)  
})

//! btn convois de ravitaillement

attaque3convois.addEventListener('click', ()=>{
    
    colonial.amo=colonial.amo+5
    amocolo.innerHTML=colonial.amo
    attaque3convois.style.display="none"
    setTimeout(()=>{
        randomattack()
    },2000)
    pvbarwarden()
    setTimeout(()=>{
        winner() 
    },1000)  

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
    pvbarwarden()
    setTimeout(()=>{
        winner() 
    },1000)  
})

//! bar pv colo

function pvbarcolo() {
    if (colonial.pv>=1350) {
        
    }else if((colonial.pv<1350)&&(colonial.pv>=1200)){
        
        divpv[9].classList="divpv divpv1"
        for (let i = 0; i < 9; i++) {
            divpv[i].classList="divpv"
               
        }
    }else if((colonial.pv<1200)&&(colonial.pv>=1050)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        for (let i = 0; i < 8; i++) {
            divpv[i].classList="divpv"
               
        }
    }else if((colonial.pv<1050)&&(colonial.pv>=900)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        for (let i = 0; i < 7; i++) {
            divpv[i].classList="divpv"
               
        }
    }else if((colonial.pv<900)&&(colonial.pv>=750)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        divpv[6].classList="divpv divpv1"
        for (let i = 0; i < 6; i++) {
            divpv[i].classList="divpv"
                
        }
    }else if((colonial.pv<750)&&(colonial.pv>=600)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        divpv[6].classList="divpv divpv1"
        divpv[5].classList="divpv divpv1"
        for (let i = 0; i < 5; i++) {
            divpv[i].classList="divpv"
               
        }
    }else if((colonial.pv<600)&&(colonial.pv>=450)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        divpv[6].classList="divpv divpv1"
        divpv[5].classList="divpv divpv1"
        divpv[4].classList="divpv divpv1"
        for (let i = 0; i < 4; i++) {
            divpv[i].classList="divpv"
                
        }
    }else if((colonial.pv<450)&&(colonial.pv>=300)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        divpv[6].classList="divpv divpv1"
        divpv[5].classList="divpv divpv1"
        divpv[4].classList="divpv divpv1"
        divpv[3].classList="divpv divpv1"
        for (let i = 0; i < 3; i++) {
            divpv[i].classList="divpv"
                
        }
    }else if((colonial.pv<300)&&(colonial.pv>=150)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        divpv[6].classList="divpv divpv1"
        divpv[5].classList="divpv divpv1"
        divpv[4].classList="divpv divpv1"
        divpv[3].classList="divpv divpv1"
        divpv[2].classList="divpv divpv1"
        for (let i = 0; i < 2; i++) {
            divpv[i].classList="divpv"
                
        }
    }else if((colonial.pv<150)&&(colonial.pv>=1)){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        divpv[6].classList="divpv divpv1"
        divpv[5].classList="divpv divpv1"
        divpv[4].classList="divpv divpv1"
        divpv[3].classList="divpv divpv1"
        divpv[2].classList="divpv divpv1"
        divpv[1].classList="divpv divpv1"
        for (let i = 0; i < 1; i++) {
            divpv[i].classList="divpv"
              
        }
    }else if(colonial.pv<1){
        divpv[9].classList="divpv divpv1"
        divpv[8].classList="divpv divpv1"
        divpv[7].classList="divpv divpv1"
        divpv[6].classList="divpv divpv1"
        divpv[5].classList="divpv divpv1"
        divpv[4].classList="divpv divpv1"
        divpv[3].classList="divpv divpv1"
        divpv[2].classList="divpv divpv1"
        divpv[1].classList="divpv divpv1"
        divpv[0].classList="divpv divpv1"
    }
}

//! pv bar warden 

function pvbarwarden() {
    if (warden.pv>=1350) {
        divpvwar[9].classList="divpv"
        divpvwar[8].classList="divpv"
        divpvwar[7].classList="divpv"
        divpvwar[6].classList="divpv"
        divpvwar[5].classList="divpv"
        divpvwar[4].classList="divpv"
        divpvwar[3].classList="divpv"
        divpvwar[2].classList="divpv"
        divpvwar[1].classList="divpv"
        divpvwar[0].classList="divpv"

        
    }else if((warden.pv<1350)&&(warden.pv>=1200)){
        
        divpvwar[9].classList="divpv divpv1"
        for (let i = 0; i < 9; i++) {
            divpvwar[i].classList="divpv"
               
        }
    }else if((warden.pv<1200)&&(warden.pv>=1050)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        for (let i = 0; i < 8; i++) {
            divpvwar[i].classList="divpv"
             
        }
    }else if((warden.pv<1050)&&(warden.pv>=900)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        for (let i = 0; i < 7; i++) {
            divpvwar[i].classList="divpv"
            
        }
    }else if((warden.pv<900)&&(warden.pv>=750)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        divpvwar[6].classList="divpv divpv1"
        for (let i = 0; i < 6; i++) {
            divpvwar[i].classList="divpv"
               
        }
    }else if((warden.pv<750)&&(warden.pv>=600)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        divpvwar[6].classList="divpv divpv1"
        divpvwar[5].classList="divpv divpv1"
        for (let i = 0; i < 5; i++) {
            divpvwar[i].classList="divpv"
          
        }
    }else if((warden.pv<600)&&(warden.pv>=450)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        divpvwar[6].classList="divpv divpv1"
        divpvwar[5].classList="divpv divpv1"
        divpvwar[4].classList="divpv divpv1"
        for (let i = 0; i < 4; i++) {
            divpvwar[i].classList="divpv"
             
        }
    }else if((warden.pv<450)&&(warden.pv>=300)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        divpvwar[6].classList="divpv divpv1"
        divpvwar[5].classList="divpv divpv1"
        divpvwar[4].classList="divpv divpv1"
        divpvwar[3].classList="divpv divpv1"
        for (let i = 0; i < 3; i++) {
            divpvwar[i].classList="divpv"
                
        }
    }else if((warden.pv<300)&&(warden.pv>=150)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        divpvwar[6].classList="divpv divpv1"
        divpvwar[5].classList="divpv divpv1"
        divpvwar[4].classList="divpv divpv1"
        divpvwar[3].classList="divpv divpv1"
        divpvwar[2].classList="divpv divpv1"
        for (let i = 0; i < 2; i++) {
            divpvwar[i].classList="divpv"
               
        }
    }else if((warden.pv<150)&&(warden.pv>=1)){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        divpvwar[6].classList="divpv divpv1"
        divpvwar[5].classList="divpv divpv1"
        divpvwar[4].classList="divpv divpv1"
        divpvwar[3].classList="divpv divpv1"
        divpvwar[2].classList="divpv divpv1"
        divpvwar[1].classList="divpv divpv1"
        for (let i = 0; i < 1; i++) {
            divpvwar[i].classList="divpv"
             
        }
    }else if(warden.pv<1){
        divpvwar[9].classList="divpv divpv1"
        divpvwar[8].classList="divpv divpv1"
        divpvwar[7].classList="divpv divpv1"
        divpvwar[6].classList="divpv divpv1"
        divpvwar[5].classList="divpv divpv1"
        divpvwar[4].classList="divpv divpv1"
        divpvwar[3].classList="divpv divpv1"
        divpvwar[2].classList="divpv divpv1"
        divpvwar[1].classList="divpv divpv1"
        divpvwar[0].classList="divpv divpv1"
    }
}




























