export function shoot(attaquant,victime,armor) {
    if (attaquant.amo>0) {
        if (victime.armor<=50) {
            victime.pv=victime.pv-(attaquant.force*2)
            console.log(`${attaquant.nom} attaque ${victime.nom} ses pv sont de ${victime.pv} et a moin de 50% vous prenez le double de dammage`);
            attaquant.amo=attaquant.amo-1
            armor.innerText="Damage"
            armor.style.color="red"
            if (victime.pv<=0) {
                victime.pv=0
            }     
        }else{
            victime.pv=victime.pv-attaquant.force
            victime.armor=victime.armor-20
            console.log(`${attaquant.nom} attaque les pv de ${victime.nom} sont de ${victime.pv} et son armure est encore bonne`);
            attaquant.amo=attaquant.amo-1
            if (victime.pv<=0) {
                victime.pv=0
            }
        }   
    }
}

export function airbomb(attaquant,victime) {
    victime.pv=victime.pv-(attaquant.force/2)
    victime.armor=victime.armor-40
    if (victime.pv<=0) {
        victime.pv=0
    }
}
export function repair(x) {
    if (x.pv<=0) {
        console.log("trop tard!");
    }else{
        x.pv=x.pv+100
    } 
}


export function bombgif(tank) {
    tank.classList.toggle("fxplanecolo")
    setTimeout(()=>{
        tank.classList.toggle("fxplanecolo")
    },1500)
}
export function bombgifw(tank) {
    tank.classList.toggle("fxplanewarden")
    setTimeout(()=>{
        tank.classList.toggle("fxplanewarden")
    },1500)
}


export function fxattack(tank) {
    tank.style.height="87%"
    tank.style.width="72%"
    tank.classList.toggle("fxattack")
    setTimeout(()=>{
        tank.classList.toggle("fxattack")
        tank.style.height="85%"
        tank.style.width="70%"
    },150)  
}
export function fxrepair(tank) {
    tank.style.height="87%"
    tank.style.width="72%"
    tank.classList.toggle("fxrepair")
    setTimeout(()=>{
        tank.classList.toggle("fxrepair")
        tank.style.height="85%"
        tank.style.width="70%"
    },150)  
}

export function reloading(tank) {
    tank.classList.toggle("fxreloading")
    setTimeout(()=>{
        tank.classList.toggle("fxreloading")
        },1500)   
}
export function reloadingw(tank) {
    tank.classList.toggle("fxreloadingw")
    setTimeout(()=>{
        tank.classList.toggle("fxreloadingw")
        },1500)   
}

export function amolow(x) {
    x.style.color="white"
    setTimeout(()=>{
        x.style.color="#E27A48"
        setTimeout(()=>{
            x.style.color="white"
            setTimeout(()=>{
                x.style.color="#E27A48"
            },100)
        },100)
    },100)
}
