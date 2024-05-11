/*
 Ad : Boş olmalı deyil
 Fin Kod : 7 simvoldan az və artığ olmalı deyil
*/


//*REVIEW -  1)
// let ad = prompt("Adınızı daxil edin");
// let fin_kod = prompt("Fin Kodunuzu daxil edin");


// kontrolEt(ad, fin_kod)

// function kontrolEt(ad, fin_kod) {

//     if (ad != "") {
//         if (fin_kod.length == 7) {
//             alert("Adınız və Fin Kodunuz düzgün daxil edildi");
//             console.log("Adınız və Fin Kodunuz düzgün daxil edildi");
//         }
//         else {
//             alert("Zəhmət olmasa Fin Kodunuzu 7 simvol olmağla daxil edin");
//             console.log("Zəhmət olmasa Fin Kodunuzu 7 simvol olmağla daxil edin");
//         }
//     }
//     else {
//         alert("Zəhmət olmasa Adınızı düzgün daxil edin");
//         console.log("Zəhmət olmasa Adınızı düzgün daxil edin");
//     }
// }




//*REVIEW -  2)
let ad = prompt("Adınızı daxil edin");
let fin_kod = prompt("Fin Kodunuzu daxil edin");


kontrolEt2(ad, fin_kod)

function kontrolEt2(ad, fin_kod) {
    if (ad == "") {
        alert("Zəhmət olmasa Adınızı düzgün daxil edin");
        console.log("Zəhmət olmasa Adınızı düzgün daxil edin");
        return
    }
    if (fin_kod.length !== 7) {
        alert("Zəhmət olmasa Fin Kodunuzu 7 simvol olmağla daxil edin");
        console.log("Zəhmət olmasa Fin Kodunuzu 7 simvol olmağla daxil edin");
        return
    }

    alert("Adınız və Fin Kodunuz düzgün daxil edildi");
    console.log("Adınız və Fin Kodunuz düzgün daxil edildi");
}