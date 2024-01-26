

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
        
    }else{
        alert("pas assez de munition")
        // faire clignoter le txt amuniton 
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

// export function switche(joueur) {
//     if (joueur == 0) joueur = 1;
//     else joueur = 0;

//     joueur = (joueur+1)%2
//     joueur = (joueur+1)%2
//     console.log(joueur)

// }