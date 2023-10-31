class Footer {
    constructor() {
        this.filtroTurbulence = document.getElementById('filtro-turbulence')
    }

    efeitoOnda() {
        TweenMax.to(this.filtroTurbulence, 20, {
            attr: {
            baseFrequency: 0.03,
        }, 
        repeat: -1,
        yoyo: true})
    }
}

export { Footer }