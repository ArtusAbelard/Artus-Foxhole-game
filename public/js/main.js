import {gifchoix,acceuil,jeuxcolo,jeuxwarden,btnacceuil,infobtn,infobtnwar,infocolo,infowarden,infobacktoacceuil,backtoacceuilwar,warden,colonial,attaque1shootcolo,pvtextwar,armorwar, attaque2aeriennecolo ,pvtextcolo,armorcol,amocolo,amowar,attaque3convois,attaque4repair,divpv,divpvwar,lesattaquesw,pvtextwarw,pvtextcolow,armorwarw,armorcolw,amowarw,amocolow,tankcolo,tankwarden,tankcolow,tankwardenw,son,txtstatuscol } from "./instance.js";
import { shoot,repair,airbomb,bombgif,fxattack,reloading,bombgifw,reloadingw,fxrepair,amolow } from "./function.js"

son[0].volume=0.4;
son[1].volume=0.08;
son[2].volume=0.11;
// son[3].volume=1
// son[4].volume=1
son[son.length-2].volume=1;
son[son.length-1].volume=0.8;

function randomattack() {
    if (warden.amo==0) {
        warden.amo=warden.amo+5;
        amowar.innerHTML=warden.amo;
        console.log("reloading");  
        reloadingw(tankwarden);
        son[4].play();
    }else{
        let attack = Math.floor(Math.random()*3)
        console.log(attack);
        if (attack==0) {
            fxattack(tankcolo);
             
            bombgifw(tankwarden)
            console.log("airbomb!!");
            son[3].play()
            airbomb(warden,colonial)
            pvtextwar.innerText = warden.pv 
            pvtextcolo.innerText = colonial.pv
            amocolo.innerHTML=colonial.amo
            amowar.innerHTML=warden.amo
        
        }else if (attack==1){
            console.log("repair!");
             
            repair(warden)
            fxrepair(tankwarden) 
            pvtextwar.innerText = warden.pv 
            pvtextcolo.innerText = colonial.pv
            amocolo.innerHTML=colonial.amo
            amowar.innerHTML=warden.amo
        }else{
            fxattack(tankcolo)
            son[son.length-2].play()
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
function reset() {
    setTimeout(()=>{
        colonial.pv=1500
        warden.pv=1500
        warden.amo=6
        colonial.amo=5
        warden.armor=100
        colonial.armor=150
        pvtextwar.innerText = warden.pv 
        pvtextcolo.innerText = colonial.pv
        amocolo.innerHTML=colonial.amo
        amowar.innerHTML=warden.amo
        armorwarw.innerText="Good"
        armorwar.innerText="Good"
        armorcol.innerText="Good"
        armorcolw.innerText="Good"
        armorwarw.style.color="#E27A48"
        armorwar.style.color="#E27A48"
        armorcol.style.color="#E27A48"
        armorcolw.style.color="#E27A48"
        pvbarcolo()
        pvbarwarden()
        pvbarcolow()
        pvbarwardenw()
        attaque3convois.style.display="none"
        lesattaquesw[1].style.display="none"
        attaque2aeriennecolo.style.display="block"
        lesattaquesw[2].style.display="block"
    },1000)
}
function winner() {
    if (colonial.pv<=0) {
        btnacceuil[0].style.display="flex"
        btnacceuil[1].style.display="flex"
        alert("warden winner");
        reset()
        
    }else if (warden.pv<=0){
        btnacceuil[0].style.display="flex"
        btnacceuil[1].style.display="flex"
        alert("Colonial winner");
        reset()       
    }   
}
//! btn acceuil :

gifchoix[0].addEventListener('click', ()=>{
    son[0].pause()
    son[1].play()
    son[1].currentTime = 0
    acceuil.style.display="none"
    jeuxcolo.style.display="block"
    jeuxwarden.style.display="none"
})
gifchoix[1].addEventListener('click', ()=>{
    son[0].pause()
    son[2].play()
    son[2].currentTime = 0
    acceuil.style.display="none"
    jeuxwarden.style.display="block"
    jeuxcolo.style.display="none"
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
        btnacceuil[index].style.display="none"
        son[1].pause()
        son[2].pause()
        son[0].play()
        son[0].currentTime = 0
        reset()       
    })  
}
//! btn shoot !


pvtextwar.innerText = warden.pv 
pvtextcolo.innerText = colonial.pv
amocolo.innerHTML=colonial.amo
amowar.innerHTML=warden.amo
console.log(txtstatuscol);
console.log(colonial.amo);
attaque1shootcolo.addEventListener("click",()=>{   
    if (colonial.amo==2){
        attaque3convois.style.display="block"   
    }
    shoot(colonial,warden,armorwar)
    if (colonial.amo>0) {
        son[son.length-1].play()
        fxattack(tankwarden)
    }else if (colonial.amo==0){
        amolow(txtstatuscol[0])
    }
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
    },2500)
    pvbarwarden()
    setTimeout(()=>{
        winner() 
    },1000)  
})

//! btn attaque aerienne

attaque2aeriennecolo.addEventListener('click', ()=>{
    son[3].play()
    bombgif(tankcolo)
    airbomb(colonial,warden)
    setTimeout(()=>{
        fxattack(tankwarden)
    },1500)
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
    son[4].play()
    reloading(tankcolo) 
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
    fxrepair(tankcolo)
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

//TODO add event lisner de la faction wrden ! 
lesattaquesw[1].style.display="none"

function randomattackw() {
    if (colonial.amo==0) {
        colonial.amo=colonial.amo+5
        amowarw.innerHTML=colonial.amo
        console.log("reloading");
        reloading(tankcolow) 
        son[4].play()      
    }else{
        let attackw = Math.floor(Math.random()*3)
        console.log(attackw);
        if (attackw==0) {
            console.log("airbomb!!");
            son[3].play()
            airbomb(colonial,warden)
            pvtextwarw.innerText = warden.pv 
            pvtextcolow.innerText = colonial.pv
            amocolow.innerHTML=colonial.amo
            amowarw.innerHTML=warden.amo
            bombgif(tankcolow)
            fxattack(tankwardenw)      
    }else if (attackw==1){
            console.log("repair!");
            repair(colonial)
            fxrepair(tankcolow)
            pvtextwarw.innerText = warden.pv 
            pvtextcolow.innerText = colonial.pv
            amocolow.innerHTML=colonial.amo
            amowarw.innerHTML=warden.amo    
    }else{
            console.log("shoot !!!");
            son[son.length-2].play()
            shoot(colonial,warden,armorwarw)
            pvtextwarw.innerText = warden.pv 
            pvtextcolow.innerText = colonial.pv
            amocolow.innerHTML=colonial.amo
            amowarw.innerHTML=warden.amo
            fxattack(tankwardenw)
    }
    }
    pvbarwardenw()
    setTimeout(()=>{
        winner() 
    },1000)  
}

//! btn shoot!

pvtextwarw.innerText = warden.pv 
pvtextcolow.innerText = colonial.pv
amocolow.innerHTML=colonial.amo
amowarw.innerHTML=warden.amo
lesattaquesw[3].addEventListener("click",()=>{
    if (warden.amo==2){
        lesattaquesw[1].style.display="block"   
    }
    shoot(warden,colonial,armorcolw)
    if (warden.amo>0) {
        son[son.length-1].play()
        fxattack(tankcolow)
    }else{
        amolow(txtstatuscol[9])
    }
    setTimeout(()=>{
        randomattackw()
    },2000)
    amowarw.innerHTML=warden.amo
    amocolow.innerHTML=colonial.amo
    pvtextwarw.innerText = warden.pv 
    pvtextcolow.innerText = colonial.pv
    lesattaquesw[3].style.display="none"
    setTimeout(()=>{
        lesattaquesw[3].style.display="block"
    },2500)
    pvbarcolow()
    setTimeout(()=>{
        winner() 
    },1000)  
})

//! btn attaque aerienne

lesattaquesw[2].addEventListener('click', ()=>{
    son[3].play()
    bombgifw(tankwardenw)
    airbomb(warden,colonial)
    setTimeout(()=>{
        randomattack()
    },2000)

    pvtextwarw.innerText = warden.pv 
    lesattaquesw[2].style.display="none"
    setTimeout(()=>{
        lesattaquesw[2].style.display="block"
    },15000)
    pvbarcolow()
    setTimeout(()=>{
        winner() 
    },1000)  
})

//! btn convois de ravitaillement

lesattaquesw[1].addEventListener('click', ()=>{
    son[4].play()
    reloadingw(tankwardenw)
    warden.amo=warden.amo+5
    amocolow.innerHTML=colonial.amo
    lesattaquesw[1].style.display="none"
    setTimeout(()=>{
        randomattack()
    },2000)
    pvbarcolow()
    setTimeout(()=>{
        winner() 
    },1000)  
})
//! btn repair

lesattaquesw[0].addEventListener('click', ()=>{
    winner()
    repair(warden)
    fxrepair(tankwardenw)
    setTimeout(()=>{
        randomattack()
    },2000)

    pvtextwarw.innerText = warden.pv 
    pvtextcolow.innerText = colonial.pv
    amowarw.innerHTML=warden.amo
    amocolow.innerHTML=colonial.amo

    lesattaquesw[0].style.display="none"
    setTimeout(()=>{
        lesattaquesw[0].style.display="block"
    },2000)
    pvbarcolow()
    setTimeout(()=>{
        winner() 
    },1000)  
})
//TODO bar de pv des deuw faction les fonction finissant par w sont pour la faction warden
//! bar colow

function pvbarcolow() {
    if (colonial.pv>=1350) {
        divpv[19].classList="divpv"
        divpv[18].classList="divpv"
        divpv[17].classList="divpv"
        divpv[16].classList="divpv"
        divpv[15].classList="divpv"
        divpv[14].classList="divpv"
        divpv[13].classList="divpv"
        divpv[12].classList="divpv"
        divpv[11].classList="divpv"
        divpv[10].classList="divpv"  
    }else if((colonial.pv<1350)&&(colonial.pv>=1200)){
        divpv[19].classList="divpv divpv1"
        for (let i = 10; i < 19; i++) {
            divpv[i].classList="divpv"      
        }
    }else if((colonial.pv<1200)&&(colonial.pv>=1050)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        for (let i = 10; i < 18; i++) {
            divpv[i].classList="divpv"       
        }
    }else if((colonial.pv<1050)&&(colonial.pv>=900)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        for (let i = 10; i < 17; i++) {
            divpv[i].classList="divpv"    
        }
    }else if((colonial.pv<900)&&(colonial.pv>=750)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        divpv[16].classList="divpv divpv1"
        for (let i = 10; i < 16; i++) {
            divpv[i].classList="divpv"       
        }
    }else if((colonial.pv<750)&&(colonial.pv>=600)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        divpv[16].classList="divpv divpv1"
        divpv[15].classList="divpv divpv1"
        for (let i = 10; i < 15; i++) {
            divpv[i].classList="divpv"      
        }
    }else if((colonial.pv<600)&&(colonial.pv>=450)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        divpv[16].classList="divpv divpv1"
        divpv[15].classList="divpv divpv1"
        divpv[14].classList="divpv divpv1"
        for (let i = 10; i < 14; i++) {
            divpv[i].classList="divpv"       
        }
    }else if((colonial.pv<450)&&(colonial.pv>=300)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        divpv[16].classList="divpv divpv1"
        divpv[15].classList="divpv divpv1"
        divpv[14].classList="divpv divpv1"
        divpv[13].classList="divpv divpv1"
        for (let i = 10; i < 13; i++) {
            divpv[i].classList="divpv"       
        }
    }else if((colonial.pv<300)&&(colonial.pv>=150)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        divpv[16].classList="divpv divpv1"
        divpv[15].classList="divpv divpv1"
        divpv[14].classList="divpv divpv1"
        divpv[13].classList="divpv divpv1"
        divpv[12].classList="divpv divpv1"
        for (let i = 10; i < 12; i++) {
            divpv[i].classList="divpv"       
        }
    }else if((colonial.pv<150)&&(colonial.pv>=1)){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        divpv[16].classList="divpv divpv1"
        divpv[15].classList="divpv divpv1"
        divpv[14].classList="divpv divpv1"
        divpv[13].classList="divpv divpv1"
        divpv[12].classList="divpv divpv1"
        divpv[11].classList="divpv divpv1"
        for (let i = 10; i < 11; i++) {
            divpv[i].classList="divpv"     
        }
    }else if(colonial.pv<1){
        divpv[19].classList="divpv divpv1"
        divpv[18].classList="divpv divpv1"
        divpv[17].classList="divpv divpv1"
        divpv[16].classList="divpv divpv1"
        divpv[15].classList="divpv divpv1"
        divpv[14].classList="divpv divpv1"
        divpv[13].classList="divpv divpv1"
        divpv[12].classList="divpv divpv1"
        divpv[11].classList="divpv divpv1"
        divpv[10].classList="divpv divpv1"
    }
}

//! bar warden faction

function pvbarwardenw() {
    if (warden.pv>=1350) {
        divpvwar[19].classList="divpv"
        divpvwar[18].classList="divpv"
        divpvwar[17].classList="divpv"
        divpvwar[16].classList="divpv"
        divpvwar[15].classList="divpv"
        divpvwar[14].classList="divpv"
        divpvwar[13].classList="divpv"
        divpvwar[12].classList="divpv"
        divpvwar[11].classList="divpv"
        divpvwar[10].classList="divpv"
    }else if((warden.pv<1350)&&(warden.pv>=1200)){
        
        divpvwar[19].classList="divpv divpv1"
        for (let i = 10; i < 19; i++) {
            divpvwar[i].classList="divpv"      
        }
    }else if((warden.pv<1200)&&(warden.pv>=1050)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        for (let i = 10; i < 18; i++) {
            divpvwar[i].classList="divpv"  
        }
    }else if((warden.pv<1050)&&(warden.pv>=900)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        for (let i = 10; i < 17; i++) {
            divpvwar[i].classList="divpv"   
        }
    }else if((warden.pv<900)&&(warden.pv>=750)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        divpvwar[16].classList="divpv divpv1"
        for (let i = 10; i < 16; i++) {
            divpvwar[i].classList="divpv"     
        }
    }else if((warden.pv<750)&&(warden.pv>=600)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        divpvwar[16].classList="divpv divpv1"
        divpvwar[15].classList="divpv divpv1"
        for (let i = 10; i < 15; i++) {
            divpvwar[i].classList="divpv" 
        }
    }else if((warden.pv<600)&&(warden.pv>=450)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        divpvwar[16].classList="divpv divpv1"
        divpvwar[15].classList="divpv divpv1"
        divpvwar[14].classList="divpv divpv1"
        for (let i = 10; i < 14; i++) {
            divpvwar[i].classList="divpv"     
        }
    }else if((warden.pv<450)&&(warden.pv>=300)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        divpvwar[16].classList="divpv divpv1"
        divpvwar[15].classList="divpv divpv1"
        divpvwar[14].classList="divpv divpv1"
        divpvwar[13].classList="divpv divpv1"
        for (let i = 10; i < 13; i++) {
            divpvwar[i].classList="divpv"       
        }
    }else if((warden.pv<300)&&(warden.pv>=150)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        divpvwar[16].classList="divpv divpv1"
        divpvwar[15].classList="divpv divpv1"
        divpvwar[14].classList="divpv divpv1"
        divpvwar[13].classList="divpv divpv1"
        divpvwar[12].classList="divpv divpv1"
        for (let i = 10; i < 12; i++) {
            divpvwar[i].classList="divpv"       
        }
    }else if((warden.pv<150)&&(warden.pv>=1)){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        divpvwar[16].classList="divpv divpv1"
        divpvwar[15].classList="divpv divpv1"
        divpvwar[14].classList="divpv divpv1"
        divpvwar[13].classList="divpv divpv1"
        divpvwar[12].classList="divpv divpv1"
        divpvwar[11].classList="divpv divpv1"
        for (let i = 10; i < 11; i++) {
            divpvwar[i].classList="divpv"    
        }
    }else if(warden.pv<1){
        divpvwar[19].classList="divpv divpv1"
        divpvwar[18].classList="divpv divpv1"
        divpvwar[17].classList="divpv divpv1"
        divpvwar[16].classList="divpv divpv1"
        divpvwar[15].classList="divpv divpv1"
        divpvwar[14].classList="divpv divpv1"
        divpvwar[13].classList="divpv divpv1"
        divpvwar[12].classList="divpv divpv1"
        divpvwar[11].classList="divpv divpv1"
        divpvwar[10].classList="divpv divpv1"
    }
}
//! bar pv colo

function pvbarcolo() {
    if (colonial.pv>=1350) {
        divpv[9].classList="divpv"
        divpv[8].classList="divpv"
        divpv[7].classList="divpv"
        divpv[6].classList="divpv"
        divpv[5].classList="divpv"
        divpv[4].classList="divpv"
        divpv[3].classList="divpv"
        divpv[2].classList="divpv"
        divpv[1].classList="divpv"
        divpv[0].classList="divpv"   
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




























