class Icones {
    constructor() {
        this.listaIcones = document.querySelectorAll('.icones')
    }

    animaIcones() {
        TweenMax.to(this.listaIcones, 1, {scale: 0.95, repeat: -1, yoyo: true})
    } 
}

export { Icones }