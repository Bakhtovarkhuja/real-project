let afisanka = document.querySelector('.afisanka')
let farsh = document.querySelector('.farsh')
let kuskavoy = document.querySelector('.kuskavoy')
let dumba = document.querySelector('.dumba')
let nezhniy = document.querySelector('.nezhniy')
let murgi = document.querySelector('.murgi')
let ajabsan = document.querySelector('.ajabsan')
let barbekyu = document.querySelector('.barbekyu')
let farshA = document.querySelector('.farshA')
let kuskavoyA = document.querySelector('.kuskavoyA')
let dumbaA = document.querySelector('.dumbaA')
let nezhniyA = document.querySelector('.nezhniyA')
let murgiA = document.querySelector('.murgiA')
let ajabsanA = document.querySelector('.ajabsanA')
let barbekyuA = document.querySelector('.barbekyuA')
let farshS = document.querySelector('.farshS')
let kuskavoyS = document.querySelector('.kuskavoyS')
let dumbaS = document.querySelector('.dumbaS')
let nezhniyS = document.querySelector('.nezhniyS')
let murgiS = document.querySelector('.murgiS')
let ajabsanS = document.querySelector('.ajabsanS')
let barbekyuS = document.querySelector('.barbekyuS')
let Orashod = document.querySelector('.Orashod')
let karta = document.querySelector('.karta')
let tangaBud = document.querySelector('.tangaBud')
let tangaBurovad = document.querySelector('.tangaBurovad')
let dialog = document.querySelector('.dialog')
let form = document.querySelector('.form')
let cancel = document.querySelector('.cancel')
let generate = document.querySelector('.generate')
let b = document.querySelector('.b')
let b1 = document.querySelector('.b1')
let b2 = document.querySelector('.b2')

generate.onclick = () => {
    // Считаем шашлыки
    let FARSH = (Number(farshS.value) + Number(farsh.value) - Number(farshA.value)) * 16
    let KUSKAVOY = (Number(kuskavoyS.value) + Number(kuskavoy.value) - Number(kuskavoyA.value)) * 19
    let DUMBA = (Number(dumbaS.value) + Number(dumba.value) - Number(dumbaA.value)) * 20
    let NEZHNIY = (Number(nezhniyS.value) + Number(nezhniy.value) - Number(nezhniyA.value)) * 17
    let MURGI = (Number(murgiS.value) + Number(murgi.value) - Number(murgiA.value)) * 14
    let AJABSAN = (Number(ajabsanS.value) + Number(ajabsan.value) - Number(ajabsanA.value)) * 17
    let BARBEKYU = (Number(barbekyuS.value) + Number(barbekyu.value) - Number(barbekyuA.value)) * 48

    let FARSHa = (Number(farshS.value) + Number(farsh.value) - Number(farshA.value))
    let KUSKAVOYa = (Number(kuskavoyS.value) + Number(kuskavoy.value) - Number(kuskavoyA.value))
    let DUMBAa = (Number(dumbaS.value) + Number(dumba.value) - Number(dumbaA.value))
    let NEZHNIYa = (Number(nezhniyS.value) + Number(nezhniy.value) - Number(nezhniyA.value))
    let MURGIa = (Number(murgiS.value) + Number(murgi.value) - Number(murgiA.value))
    let AJABSANa = (Number(ajabsanS.value) + Number(ajabsan.value) - Number(ajabsanA.value))
    let BARBEKYUa = (Number(barbekyuS.value) + Number(barbekyu.value) - Number(barbekyuA.value))

    let obshiyShashlik = FARSH + KUSKAVOY + DUMBA + NEZHNIY + MURGI + AJABSAN + BARBEKYU

    let shashlik = obshiyShashlik
        - Number(afisanka.value)
        - Number(Orashod.value)
        - Number(karta.value)
        + Number(tangaBud.value)
        + Number(tangaBurovad.value)

        let olikiYahyo = ((Number(kuskavoy.value) + Number(nezhniy.value) + Number(ajabsan.value)) * 1.5) + ((Number(farsh.value) + Number(dumba.value) + Number(murgi.value)) * 1)
        let olikiAzim = (((Number(KUSKAVOYa) + Number(NEZHNIYa) + Number(AJABSANa)) * 1.5) + ((Number(FARSHa) + Number(DUMBAa) + Number(MURGIa)) * 1) + (Number(BARBEKYUa) * 3)) - Number(karta.value)

    dialog.showModal()
    b.innerHTML = `Общий счет: ${shashlik}`
    b1.innerHTML = `Олики Загатовшик: ${olikiYahyo}`
    b2.innerHTML = `Олики Шашликпаз: ${olikiAzim}`
}

cancel.onclick = () => {
    dialog.close()
}
