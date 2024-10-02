function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = {
    color: pegarCSS('--bra')
}

export{pegarCSS}