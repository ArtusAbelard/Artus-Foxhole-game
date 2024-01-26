

export function shoot(attaquant,victime) {
    if (victime.armor<=50) {
        victime.pv=victime.pv-(attaquant.force*2)
        console.log(`${attaquant.nom} attaque ${victime.nom} ses pv sont de ${victime.pv} et a moin de 50% vous prenez le double de dammage`);
        attaquant.amo=attaquant.amo-1
        
    }else{
        victime.pv=victime.pv-attaquant.force
        victime.armor=victime.armor-20
        console.log(`${attaquant.nom} attaque les pv de ${victime.nom} sont de ${victime.pv} et son armure est encore bonne`);
        attaquant.amo=attaquant.amo-1
    }
   

}