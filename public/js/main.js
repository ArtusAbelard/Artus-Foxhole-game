let gifchoix = document.querySelectorAll(".gifchoix")
let acceuil = document.querySelector("#acceuil")
let jeuxcolo = document.querySelector("#jeuxcolo")

console.log(acceuil.style);



gifchoix[0].addEventListener('click', ()=>{
    // alert("ewa")
    acceuil.style.display="none"
    jeuxcolo.style.display="block"
})
gifchoix[1].addEventListener('click', ()=>{
    acceuil.style.display="none"
})

// for (let index = 0; index < gifchoix.length; index++) {
//     gifchoix[index].addEventListener('click', ()=>{
//         alert("ewa")
//     })
    
// }
